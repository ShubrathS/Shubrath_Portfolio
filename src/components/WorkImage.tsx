import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
  /** Intrinsic pixel size; every project image is exported at 1024×1024. */
  width?: number;
  height?: number;
}

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);

  const handleMouseEnter = () => {
    if (props.video) setIsVideo(true);
  };

  const inner = (
    <>
      {props.link && (
        <div className="work-link">
          <MdArrowOutward />
        </div>
      )}
      {/* width/height reserve the box before the lazy image arrives, so the
          page height doesn't grow under the scroller (Lenis clamps to the
          height it last measured) and the sections below don't shift. */}
      <img
        src={props.image}
        alt={props.alt}
        width={props.width ?? 1024}
        height={props.height ?? 1024}
        loading="lazy"
        decoding="async"
      />
      {isVideo && props.video && (
        <video src={props.video} autoPlay muted playsInline loop preload="none" />
      )}
    </>
  );

  return (
    <div className="work-image">
      {props.link ? (
        <a
          className="work-image-in"
          href={props.link}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={() => setIsVideo(false)}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor={"disable"}
        >
          {inner}
        </a>
      ) : (
        <div
          className="work-image-in"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={() => setIsVideo(false)}
          data-cursor={"disable"}
        >
          {inner}
        </div>
      )}
    </div>
  );
};

export default WorkImage;
