import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
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
      <img
        src={props.image}
        alt={props.alt}
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
