import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  DefaultVideoLayout,
  defaultLayoutIcons,
} from "@vidstack/react/player/layouts/default";
import "@vidstack/react/player/styles/default/layouts/video.css";
import "@vidstack/react/player/styles/default/theme.css";

const CustomVideo = ({ title, type, video_id }) => {
  return (
    <>
      <MediaPlayer
        title={title}
        src={`${type}/${video_id}`}
        className="rounded-md cursor-pointer !border-0 [&_iframe]:!h-full"
      >
        <MediaProvider />
        <DefaultVideoLayout icons={defaultLayoutIcons} />
      </MediaPlayer>
    </>
  );
};

export default CustomVideo;
