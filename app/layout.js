import DeviceSizeIndicator from "@/components/essential/DeviceSizeIndicator";
import { fontLexendDeca, fontPrata } from "@/components/essential/Fonts";
import config from "@/config/site.config.json";
import NextTopLoader from "nextjs-toploader";

import "@/styles/styles.scss";

export const metadata = {
  title: config.metaData.title,
  description: config.metaData.description,
  url: config.siteURL,
  siteName: config.metaData.title,
  type: "website",

  icons: {
    icon: "/images/favicon.png",
  },

  metadataBase: new URL("https://eyolo-nextjs.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: "/images/ogimage.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${fontPrata.variable} ${fontLexendDeca.variable}`}
    >
      <body className="font-secondary">
        <NextTopLoader
          color="#ff4848"
          shadow="none"
          showSpinner={false}
          zIndex={9999999}
          height={2}
        />
        <DeviceSizeIndicator />
        {children}
      </body>
    </html>
  );
}
