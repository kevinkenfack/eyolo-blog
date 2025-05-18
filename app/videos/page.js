import Header from "@/components/home-3/Header";
import LayoutThree from "@/components/home-3/Layout";
import { Suspense } from "react";
import AllVideos from "./AllVideos";

export const metadata = {
  title: "All Video Posts",
  description: "All of Eyolo's Video Posts",
};

const Videos = () => {
  const postsPerPage = 4;

  return (
    <Suspense
      fallback={
        <div className="text-xl text-dark font-primary font-bold fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Loading...
        </div>
      }
    >
      <LayoutThree>
        <Header />

        <AllVideos postsPerPage={postsPerPage} />
      </LayoutThree>
    </Suspense>
  );
};

export default Videos;
