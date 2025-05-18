import Image from "next/image";
import Link from "next/link";

const InnerPages = () => {
  return (
    <section className="py-[80px] md:py-[120px] bg-secondary">
      <div className="container">
        <div className="border-t pt-8 border-[#627669]">
          <div className="flex justify-between items-center sm:items-start mb-8 sm:mb-16">
            <h2 className="text-base uppercase font-secondary pl-4 relative after:absolute after:rounded-full -mt-1 after:content-[''] after:h-2 after:w-2 after:bg-primary after:left-0 after:top-2 text-white">
              Impressive Inner Pages
            </h2>
          </div>
        </div>

        <div className="row gap-y-6 justify-center">
          {/* about start single card */}
          <div className="sm:col-6 lg:col-3 xl:col-3">
            <div className="rounded-xl p-3 border border-[#758A7D] bg-white/10 group">
              <div className="flex gap-[6px] items-center">
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
              </div>
              <div className="my-3 relative overflow-hidden rounded-lg">
                <Image
                  className="w-full h-full rounded-lg group-hover:scale-[1.01] duration-200"
                  height={500}
                  width={300}
                  src={"/images/splash/demos/about.jpg"}
                  alt="Inner page image"
                />
                <Link
                  href={"/about"}
                  className="absolute w-full h-full bg-secondary/70 top-0 left-0 flex justify-center items-center opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto duration-200"
                >
                  <span className="w-12 h-12 rounded-full bg-primary text-white flex justify-center items-center">
                    <Image
                      height={14}
                      width={14}
                      src={"/images/splash/icons/arrow-top-right.svg"}
                      alt="Icon"
                    />
                  </span>
                </Link>
              </div>
              <h6 className="text-lg text-white font-secondary !leading-[1.33] text-center">
                About (1)
              </h6>
            </div>
          </div>
          {/* about end single card */}

          {/* about 2 start single card */}
          <div className="sm:col-6 lg:col-3 xl:col-3">
            <div className="rounded-xl p-3 border border-[#758A7D] bg-white/10 group">
              <div className="flex gap-[6px] items-center">
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
              </div>
              <div className="my-3 relative overflow-hidden rounded-lg">
                <Image
                  className="w-full h-full rounded-lg group-hover:scale-[1.01] duration-200"
                  height={500}
                  width={300}
                  src={"/images/splash/demos/about-.jpg"}
                  alt="Inner page image"
                />
                <span className="py-2 pl-4 pr-5 rounded-full bg-primary text-white uppercase flex gap-1 justify-center items-center w-fit absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs">
                  <Image
                    height={18}
                    width={18}
                    src={"/images/splash/icons/hand-emoji.svg"}
                    alt="Icon"
                  />
                  coming soon
                </span>
              </div>
              <h6 className="text-lg text-white font-secondary !leading-[1.33] text-center">
                About (02)
              </h6>
            </div>
          </div>
          {/* about 2 end single card */}

          {/* all posts start single card */}
          <div className="sm:col-6 lg:col-3 xl:col-3">
            <div className="rounded-xl p-3 border border-[#758A7D] bg-white/10 group">
              <div className="flex gap-[6px] items-center">
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
              </div>
              <div className="my-3 relative overflow-hidden rounded-lg">
                <Image
                  className="w-full h-full rounded-lg group-hover:scale-[1.01] duration-200"
                  height={500}
                  width={300}
                  src={"/images/splash/demos/blog-list.jpg"}
                  alt="Inner page image"
                />
                <Link
                  href={"/blog"}
                  className="absolute w-full h-full bg-secondary/70 top-0 left-0 flex justify-center items-center opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto duration-200"
                >
                  <span className="w-12 h-12 rounded-full bg-primary text-white flex justify-center items-center">
                    <Image
                      height={14}
                      width={14}
                      src={"/images/splash/icons/arrow-top-right.svg"}
                      alt="Icon"
                    />
                  </span>
                </Link>
              </div>
              <h6 className="text-lg text-white font-secondary !leading-[1.33] text-center">
                All Posts
              </h6>
            </div>
          </div>
          {/* all posts end single card */}

          {/* post-single start single card */}
          <div className="sm:col-6 lg:col-3 xl:col-3">
            <div className="rounded-xl p-3 border border-[#758A7D] bg-white/10 group">
              <div className="flex gap-[6px] items-center">
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
              </div>
              <div className="my-3 relative overflow-hidden rounded-lg">
                <Image
                  className="w-full h-full rounded-lg group-hover:scale-[1.01] duration-200"
                  height={500}
                  width={300}
                  src={"/images/splash/demos/post-single.jpg"}
                  alt="Inner page image"
                />
                <Link
                  href={"/cloud-native-cybersecurity-raises-60m-funding"}
                  className="absolute w-full h-full bg-secondary/70 top-0 left-0 flex justify-center items-center opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto duration-200"
                >
                  <span className="w-12 h-12 rounded-full bg-primary text-white flex justify-center items-center">
                    <Image
                      height={14}
                      width={14}
                      src={"/images/splash/icons/arrow-top-right.svg"}
                      alt="Icon"
                    />
                  </span>
                </Link>
              </div>
              <h6 className="text-lg text-white font-secondary !leading-[1.33] text-center">
                Post Single
              </h6>
            </div>
          </div>
          {/* post-single end single card */}

          {/* post-single 2 start single card */}
          <div className="sm:col-6 lg:col-3 xl:col-3">
            <div className="rounded-xl p-3 border border-[#758A7D] bg-white/10 group">
              <div className="flex gap-[6px] items-center">
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
              </div>
              <div className="my-3 relative overflow-hidden rounded-lg">
                <Image
                  className="w-full h-full rounded-lg group-hover:scale-[1.01] duration-200"
                  height={500}
                  width={300}
                  src={"/images/splash/demos/post-single-2.jpg"}
                  alt="Inner page image"
                />
                <span className="py-2 pl-4 pr-5 rounded-full bg-primary text-white uppercase flex gap-1 justify-center items-center w-fit absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs">
                  <Image
                    height={18}
                    width={18}
                    src={"/images/splash/icons/hand-emoji.svg"}
                    alt="Icon"
                  />
                  coming soon
                </span>
              </div>
              <h6 className="text-lg text-white font-secondary !leading-[1.33] text-center">
                Post Single (02)
              </h6>
            </div>
          </div>
          {/*post-single 2 end single card */}

          {/* elements start single card */}
          <div className="sm:col-6 lg:col-3 xl:col-3">
            <div className="rounded-xl p-3 border border-[#758A7D] bg-white/10 group">
              <div className="flex gap-[6px] items-center">
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
              </div>
              <div className="my-3 relative overflow-hidden rounded-lg">
                <Image
                  className="w-full h-full rounded-lg group-hover:scale-[1.01] duration-200"
                  height={500}
                  width={300}
                  src={"/images/splash/demos/elements.jpg"}
                  alt="Inner page image"
                />
                <Link
                  href={"/blog/elements"}
                  className="absolute w-full h-full bg-secondary/70 top-0 left-0 flex justify-center items-center opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto duration-200"
                >
                  <span className="w-12 h-12 rounded-full bg-primary text-white flex justify-center items-center">
                    <Image
                      height={14}
                      width={14}
                      src={"/images/splash/icons/arrow-top-right.svg"}
                      alt="Icon"
                    />
                  </span>
                </Link>
              </div>
              <h6 className="text-lg text-white font-secondary !leading-[1.33] text-center">
                Elements
              </h6>
            </div>
          </div>
          {/* elements end single card */}

          {/* Archive start single card */}
          <div className="sm:col-6 lg:col-3 xl:col-3">
            <div className="rounded-xl p-3 border border-[#758A7D] bg-white/10 group">
              <div className="flex gap-[6px] items-center">
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
              </div>
              <div className="my-3 relative overflow-hidden rounded-lg">
                <Image
                  className="w-full h-full rounded-lg group-hover:scale-[1.01] duration-200"
                  height={500}
                  width={300}
                  src={"/images/splash/demos/archive.jpg"}
                  alt="Inner page image"
                />
                <Link
                  href={"/archive"}
                  className="absolute w-full h-full bg-secondary/70 top-0 left-0 flex justify-center items-center opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto duration-200"
                >
                  <span className="w-12 h-12 rounded-full bg-primary text-white flex justify-center items-center">
                    <Image
                      height={14}
                      width={14}
                      src={"/images/splash/icons/arrow-top-right.svg"}
                      alt="Icon"
                    />
                  </span>
                </Link>
              </div>
              <h6 className="text-lg text-white font-secondary !leading-[1.33] text-center">
                Blog Archive
              </h6>
            </div>
          </div>
          {/* Archive end single card */}

          {/* video start single card */}
          <div className="sm:col-6 lg:col-3 xl:col-3">
            <div className="rounded-xl p-3 border border-[#758A7D] bg-white/10 group">
              <div className="flex gap-[6px] items-center">
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
              </div>
              <div className="my-3 relative overflow-hidden rounded-lg">
                <Image
                  className="w-full h-full rounded-lg group-hover:scale-[1.01] duration-200"
                  height={500}
                  width={300}
                  src={"/images/splash/demos/video-posts.jpg"}
                  alt="Inner page image"
                />
                <Link
                  href={"/videos"}
                  className="absolute w-full h-full bg-secondary/70 top-0 left-0 flex justify-center items-center opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto duration-200"
                >
                  <span className="w-12 h-12 rounded-full bg-primary text-white flex justify-center items-center">
                    <Image
                      height={14}
                      width={14}
                      src={"/images/splash/icons/arrow-top-right.svg"}
                      alt="Icon"
                    />
                  </span>
                </Link>
              </div>
              <h6 className="text-lg text-white font-secondary !leading-[1.33] text-center">
                All Video Posts
              </h6>
            </div>
          </div>
          {/* video end single card */}

          {/* Category List start single card */}
          <div className="sm:col-6 lg:col-3 xl:col-3">
            <div className="rounded-xl p-3 border border-[#758A7D] bg-white/10 group">
              <div className="flex gap-[6px] items-center">
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
              </div>
              <div className="my-3 relative overflow-hidden rounded-lg">
                <Image
                  className="w-full h-full rounded-lg group-hover:scale-[1.01] duration-200"
                  height={500}
                  width={300}
                  src={"/images/splash/demos/category.jpg"}
                  alt="Inner page image"
                />
                <Link
                  href={"/category"}
                  className="absolute w-full h-full bg-secondary/70 top-0 left-0 flex justify-center items-center opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto duration-200"
                >
                  <span className="w-12 h-12 rounded-full bg-primary text-white flex justify-center items-center">
                    <Image
                      height={14}
                      width={14}
                      src={"/images/splash/icons/arrow-top-right.svg"}
                      alt="Icon"
                    />
                  </span>
                </Link>
              </div>
              <h6 className="text-lg text-white font-secondary !leading-[1.33] text-center">
                All Category
              </h6>
            </div>
          </div>
          {/* Category List end single card */}

          {/* All Author start single card */}
          <div className="sm:col-6 lg:col-3 xl:col-3">
            <div className="rounded-xl p-3 border border-[#758A7D] bg-white/10 group">
              <div className="flex gap-[6px] items-center">
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
              </div>
              <div className="my-3 relative overflow-hidden rounded-lg">
                <Image
                  className="w-full h-full rounded-lg group-hover:scale-[1.01] duration-200"
                  height={500}
                  width={300}
                  src={"/images/splash/demos/author.jpg"}
                  alt="Inner page image"
                />
                <Link
                  href={"/author"}
                  className="absolute w-full h-full bg-secondary/70 top-0 left-0 flex justify-center items-center opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto duration-200"
                >
                  <span className="w-12 h-12 rounded-full bg-primary text-white flex justify-center items-center">
                    <Image
                      height={14}
                      width={14}
                      src={"/images/splash/icons/arrow-top-right.svg"}
                      alt="Icon"
                    />
                  </span>
                </Link>
              </div>
              <h6 className="text-lg text-white font-secondary !leading-[1.33] text-center">
                All Author
              </h6>
            </div>
          </div>
          {/* All Author end single card */}

          {/* Contact start single card */}
          <div className="sm:col-6 lg:col-3 xl:col-3">
            <div className="rounded-xl p-3 border border-[#758A7D] bg-white/10 group">
              <div className="flex gap-[6px] items-center">
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
              </div>
              <div className="my-3 relative overflow-hidden rounded-lg">
                <Image
                  className="w-full h-full rounded-lg group-hover:scale-[1.01] duration-200"
                  height={500}
                  width={300}
                  src={"/images/splash/demos/contact.jpg"}
                  alt="Inner page image"
                />
                <Link
                  href={"/contact"}
                  className="absolute w-full h-full bg-secondary/70 top-0 left-0 flex justify-center items-center opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto duration-200"
                >
                  <span className="w-12 h-12 rounded-full bg-primary text-white flex justify-center items-center">
                    <Image
                      height={14}
                      width={14}
                      src={"/images/splash/icons/arrow-top-right.svg"}
                      alt="Icon"
                    />
                  </span>
                </Link>
              </div>
              <h6 className="text-lg text-white font-secondary !leading-[1.33] text-center">
                Contact
              </h6>
            </div>
          </div>
          {/* Contact end single card */}

          {/* Maintenance start single card */}
          <div className="sm:col-6 lg:col-3 xl:col-3">
            <div className="rounded-xl p-3 border border-[#758A7D] bg-white/10 group">
              <div className="flex gap-[6px] items-center">
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
              </div>
              <div className="my-3 relative overflow-hidden rounded-lg">
                <Image
                  className="w-full h-full rounded-lg group-hover:scale-[1.01] duration-200"
                  height={500}
                  width={300}
                  src={"/images/splash/demos/maintenance.jpg"}
                  alt="Inner page image"
                />
                <span className="py-2 pl-4 pr-5 rounded-full bg-primary text-white uppercase flex gap-1 justify-center items-center w-fit absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs">
                  <Image
                    height={18}
                    width={18}
                    src={"/images/splash/icons/hand-emoji.svg"}
                    alt="Icon"
                  />
                  coming soon
                </span>
              </div>
              <h6 className="text-lg text-white font-secondary !leading-[1.33] text-center">
                Maintenance
              </h6>
            </div>
          </div>
          {/* Maintenance end single card */}

          {/* cat single start single card */}
          <div className="sm:col-6 lg:col-3 xl:col-3">
            <div className="rounded-xl p-3 border border-[#758A7D] bg-white/10 group">
              <div className="flex gap-[6px] items-center">
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
              </div>
              <div className="my-3 relative overflow-hidden rounded-lg">
                <Image
                  className="w-full h-full rounded-lg group-hover:scale-[1.01] duration-200"
                  height={500}
                  width={300}
                  src={"/images/splash/demos/category-single.jpg"}
                  alt="Inner page image"
                />
                <Link
                  href={"/category/web"}
                  className="absolute w-full h-full bg-secondary/70 top-0 left-0 flex justify-center items-center opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto duration-200"
                >
                  <span className="w-12 h-12 rounded-full bg-primary text-white flex justify-center items-center">
                    <Image
                      height={14}
                      width={14}
                      src={"/images/splash/icons/arrow-top-right.svg"}
                      alt="Icon"
                    />
                  </span>
                </Link>
              </div>
              <h6 className="text-lg text-white font-secondary !leading-[1.33] text-center">
                Category Single
              </h6>
            </div>
          </div>
          {/* cat single end single card */}

          {/* auth single start single card */}
          <div className="sm:col-6 lg:col-3 xl:col-3">
            <div className="rounded-xl p-3 border border-[#758A7D] bg-white/10 group">
              <div className="flex gap-[6px] items-center">
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
              </div>
              <div className="my-3 relative overflow-hidden rounded-lg">
                <Image
                  className="w-full h-full rounded-lg group-hover:scale-[1.01] duration-200"
                  height={500}
                  width={300}
                  src={"/images/splash/demos/author-single.jpg"}
                  alt="Inner page image"
                />
                <Link
                  href={"/author/kathryn-jackson"}
                  className="absolute w-full h-full bg-secondary/70 top-0 left-0 flex justify-center items-center opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto duration-200"
                >
                  <span className="w-12 h-12 rounded-full bg-primary text-white flex justify-center items-center">
                    <Image
                      height={14}
                      width={14}
                      src={"/images/splash/icons/arrow-top-right.svg"}
                      alt="Icon"
                    />
                  </span>
                </Link>
              </div>
              <h6 className="text-lg text-white font-secondary !leading-[1.33] text-center">
                Author Single
              </h6>
            </div>
          </div>
          {/* auth single end single card */}

          {/* video-single start single card */}
          <div className="sm:col-6 lg:col-3 xl:col-3">
            <div className="rounded-xl p-3 border border-[#758A7D] bg-white/10 group">
              <div className="flex gap-[6px] items-center">
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
              </div>
              <div className="my-3 relative overflow-hidden rounded-lg">
                <Image
                  className="w-full h-full rounded-lg group-hover:scale-[1.01] duration-200"
                  height={500}
                  width={300}
                  src={"/images/splash/demos/video-single.jpg"}
                  alt="Inner page image"
                />
                <Link
                  href={"/videos"}
                  className="absolute w-full h-full bg-secondary/70 top-0 left-0 flex justify-center items-center opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto duration-200"
                >
                  <span className="w-12 h-12 rounded-full bg-primary text-white flex justify-center items-center">
                    <Image
                      height={14}
                      width={14}
                      src={"/images/splash/icons/arrow-top-right.svg"}
                      alt="Icon"
                    />
                  </span>
                </Link>
              </div>
              <h6 className="text-lg text-white font-secondary !leading-[1.33] text-center">
                Video Post
              </h6>
            </div>
          </div>
          {/* video-single end single card */}

          {/* Donation start single card */}
          <div className="sm:col-6 lg:col-3 xl:col-3">
            <div className="rounded-xl p-3 border border-[#758A7D] bg-white/10 group">
              <div className="flex gap-[6px] items-center">
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
              </div>
              <div className="my-3 relative overflow-hidden rounded-lg">
                <Image
                  className="w-full h-full rounded-lg group-hover:scale-[1.01] duration-200"
                  height={500}
                  width={300}
                  src={"/images/splash/demos/donation.jpg"}
                  alt="Inner page image"
                />
                <span className="py-2 pl-4 pr-5 rounded-full bg-primary text-white uppercase flex gap-1 justify-center items-center w-fit absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs">
                  <Image
                    height={18}
                    width={18}
                    src={"/images/splash/icons/hand-emoji.svg"}
                    alt="Icon"
                  />
                  coming soon
                </span>
                {/* <span className="inline-block pt-2 pb-1 pr-2 pl-4 rounded-full bg-secondary text-xs md:text-sm !leading-[1.64] uppercase font-semibold font-primary text-white w-fit h-fit absolute top-6 right-6">
                  hot🔥
                </span> */}
              </div>
              <h6 className="text-lg text-white font-secondary !leading-[1.33] text-center">
                Donation
              </h6>
            </div>
          </div>
          {/* Donation end single card */}

          {/* Privacy start single card */}
          <div className="sm:col-6 lg:col-3 xl:col-3">
            <div className="rounded-xl p-3 border border-[#758A7D] bg-white/10 group">
              <div className="flex gap-[6px] items-center">
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
              </div>
              <div className="my-3 relative overflow-hidden rounded-lg">
                <Image
                  className="w-full h-full rounded-lg group-hover:scale-[1.01] duration-200"
                  height={500}
                  width={300}
                  src={"/images/splash/demos/privacy.jpg"}
                  alt="Inner page image"
                />
                <Link
                  href={"/privacy"}
                  className="absolute w-full h-full bg-secondary/70 top-0 left-0 flex justify-center items-center opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto duration-200"
                >
                  <span className="w-12 h-12 rounded-full bg-primary text-white flex justify-center items-center">
                    <Image
                      height={14}
                      width={14}
                      src={"/images/splash/icons/arrow-top-right.svg"}
                      alt="Icon"
                    />
                  </span>
                </Link>
              </div>
              <h6 className="text-lg text-white font-secondary !leading-[1.33] text-center">
                Privacy policy
              </h6>
            </div>
          </div>
          {/* Privacy end single card */}

          {/* Terms start single card */}
          <div className="sm:col-6 lg:col-3 xl:col-3">
            <div className="rounded-xl p-3 border border-[#758A7D] bg-white/10 group">
              <div className="flex gap-[6px] items-center">
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
              </div>
              <div className="my-3 relative overflow-hidden rounded-lg">
                <Image
                  className="w-full h-full rounded-lg group-hover:scale-[1.01] duration-200"
                  height={500}
                  width={300}
                  src={"/images/splash/demos/terms.jpg"}
                  alt="Inner page image"
                />
                <Link
                  href={"/terms"}
                  className="absolute w-full h-full bg-secondary/70 top-0 left-0 flex justify-center items-center opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto duration-200"
                >
                  <span className="w-12 h-12 rounded-full bg-primary text-white flex justify-center items-center">
                    <Image
                      height={14}
                      width={14}
                      src={"/images/splash/icons/arrow-top-right.svg"}
                      alt="Icon"
                    />
                  </span>
                </Link>
              </div>
              <h6 className="text-lg text-white font-secondary !leading-[1.33] text-center">
                Terms And Conditions
              </h6>
            </div>
          </div>
          {/* Terms end single card */}

          {/* Add a Feature start single card */}
          <div className="sm:col-6 lg:col-3 xl:col-3">
            <div className="rounded-xl p-3 border border-[#758A7D] bg-white/10 group">
              <div className="flex gap-[6px] items-center">
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
              </div>
              <div className="my-3 relative overflow-hidden rounded-lg">
                <Image
                  className="w-full h-full rounded-lg group-hover:scale-[1.01] duration-200"
                  height={500}
                  width={300}
                  src={"/images/splash/demos/add-a-feature.jpg"}
                  alt="Inner page image"
                />
                <span className="py-2 pl-4 pr-5 rounded-full bg-primary text-white uppercase flex gap-1 justify-center items-center w-fit absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs">
                  <Image
                    height={18}
                    width={18}
                    src={"/images/splash/icons/hand-emoji.svg"}
                    alt="Icon"
                  />
                  coming soon
                </span>
              </div>
              <h6 className="text-lg text-white font-secondary !leading-[1.33] text-center">
                Add a Feature
              </h6>
            </div>
          </div>
          {/* Add a Feature end single card */}

          {/* 404 start single card */}
          <div className="sm:col-6 lg:col-3 xl:col-3">
            <div className="rounded-xl p-3 border border-[#758A7D] bg-white/10 group">
              <div className="flex gap-[6px] items-center">
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
              </div>
              <div className="my-3 relative overflow-hidden rounded-lg">
                <Image
                  className="w-full h-full rounded-lg group-hover:scale-[1.01] duration-200"
                  height={500}
                  width={300}
                  src={"/images/splash/demos/404.jpg"}
                  alt="Inner page image"
                />
                <Link
                  href={"/404"}
                  className="absolute w-full h-full bg-secondary/70 top-0 left-0 flex justify-center items-center opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto duration-200"
                >
                  <span className="w-12 h-12 rounded-full bg-primary text-white flex justify-center items-center">
                    <Image
                      height={14}
                      width={14}
                      src={"/images/splash/icons/arrow-top-right.svg"}
                      alt="Icon"
                    />
                  </span>
                </Link>
              </div>
              <h6 className="text-lg text-white font-secondary !leading-[1.33] text-center">
                404
              </h6>
            </div>
          </div>
          {/* 404 end single card */}
        </div>
      </div>
    </section>
  );
};

export default InnerPages;
