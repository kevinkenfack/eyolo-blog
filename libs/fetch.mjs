import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import readingTime from "reading-time";
const dest_dir = "data";

const sortByDate = (a, b) => {
  const longEnUSFormatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  if (a.frontmatter.date && b.frontmatter.date) {
    const dateA = new Date(a.frontmatter.date);
    const dateB = new Date(b.frontmatter.date);
    longEnUSFormatter.format(dateA);
    longEnUSFormatter.format(dateB);
    return dateB - dateA;
  }
  return 0;
};

const getPages = async (directory) => {
  try {
    const dirFiles = fs.readdirSync(directory);
    const pages = dirFiles.filter((file) => file.endsWith(".mdx"));

    if (!fs.existsSync(`${dest_dir}/pages`)) {
      fs.mkdirSync(`${dest_dir}/pages`, { recursive: true });
    }

    for (const filename of pages) {
      const slug = filename.replace(/\.[^/.]+$/, "");
      const filePath = path.join(process.cwd(), directory, filename);
      const dirFileContents = fs.readFileSync(filePath, "utf8");
      const content = dirFileContents.replace(/---[\s\S]+?---/, "").trim();

      try {
        const { frontmatter } = await compileMDX({
          source: dirFileContents,
          options: {
            parseFrontmatter: true,
          },
        });

        const pageData = {
          slug,
          frontmatter,
          content: content,
        };

        fs.writeFileSync(
          `${dest_dir}/pages/${slug}.json`,
          JSON.stringify(pageData, null, 2)
        );
        console.log(`generated ${dest_dir}/pages/${slug}.json`);
      } catch (error) {
        console.error(`Error processing file ${filename}:`, error);
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${directory}:`, error);
  }
};

const getSectionFiles = async (directory, isBlog, authorPages) => {
  const dirFiles = fs.readdirSync(path.join(directory));
  const pages = dirFiles.filter(
    (file) => !file.startsWith("_") && file.endsWith(".mdx")
  );

  const returnDirPages = await Promise.all(
    pages.map(async (filename) => {
      const slug = filename.replace(/\.[^/.]+$/, "");
      const filePath = path.join(process.cwd(), directory, filename);
      const dirFileContents = fs.readFileSync(filePath, "utf8");
      const content = dirFileContents.replace(/---[\s\S]+?---/, "").trim();
      const readingStats = readingTime(content);

      const { frontmatter } = await compileMDX({
        source: dirFileContents,
        options: {
          parseFrontmatter: true,
        },
      });

      if (isBlog) {
        // set author image to frontmatter
        if (frontmatter.author) {
          const author = authorPages.find(
            (a) => a.frontmatter.title === frontmatter.author
          );
          frontmatter.authorImage = author.frontmatter.image;
        }

        // set reading time to frontmatter
        const minutes = Math.ceil(readingStats.minutes);
        const formattedMinutes = String(minutes).padStart(2, "0");
        const formattedReadingTime = `${formattedMinutes} MIN TO READ`;
        frontmatter.readingTime = formattedReadingTime;
      }

      if (frontmatter.published === false) return null;
      return {
        slug,
        frontmatter,
        content: content,
      };
    })
  );

  let filterPages = returnDirPages.filter((entry) => entry !== null);
  return filterPages.sort(sortByDate);
};

const generateData = async () => {
  try {
    const authorPages = await getSectionFiles("content/author", false, null);
    const blogPages = await getSectionFiles("content/blog", true, authorPages);
    const videos = await getSectionFiles("content/videos", false, null);
    await getPages("content/pages");

    fs.writeFileSync(
      `${dest_dir}/author.json`,
      JSON.stringify(authorPages, null, 2)
    );
    console.log(`generated ${dest_dir}/author.json`);
    fs.writeFileSync(
      `${dest_dir}/posts.json`,
      JSON.stringify(blogPages, null, 2)
    );
    console.log(`generated ${dest_dir}/posts.json`);
    fs.writeFileSync(
      `${dest_dir}/video-posts.json`,
      JSON.stringify(videos, null, 2)
    );
    console.log(`generated ${dest_dir}/video-posts.json`);
  } catch (error) {
    console.error(`Error generating data:`, error);
  }
};

try {
  if (!fs.existsSync(dest_dir)) {
    fs.mkdirSync(dest_dir);
  }

  (async () => {
    await generateData();
  })();
} catch (error) {
  console.error(error);
}
