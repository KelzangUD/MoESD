import Image from "next/image";
import arrow_right from "@/public/images/arrow-right.svg";

type VideoProps = {
  source: string;
};

const Video: React.FC<VideoProps> = ({ source }) => {
  return (
    <div className="relative w-full overflow-hidden rounded-md">
      <div className="aspect-video">
        <iframe
          src={source}
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default function Videos() {
  return (
    <div className="p-4 lg:p-8 bg-[#eee]">
      <h2>Videos</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 my-8">
        <Video source="https://www.youtube.com/embed/dhBfd4_JQRM" />
        <Video source="https://www.youtube.com/embed/ToMAMpuvQus" />
        <Video source="https://www.youtube.com/embed/8THGX_N7gCY" />
        <Video source="https://www.youtube.com/embed/eUEJChwenMs" />
        <Video source="https://www.youtube.com/embed/muazBgehQqw" />
        <Video source="https://www.youtube.com/embed/UXyQ6I5tMcI" />
      </div>
      <button className="flex gap-2 items-center text-xs md:text-base transition delay-150 duration-300 ease-in-out hover:-translate-y-1">
        More Videos{" "}
        <Image src={arrow_right} alt="arrow" width="20" height="10" />{" "}
      </button>
    </div>
  );
}
