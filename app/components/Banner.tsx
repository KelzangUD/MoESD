import Image from "next/image";
import rgob_logo from "@/public/images/rgob-logo 1.svg";
import banner_img from "@/public/images/moesd_banner.svg";
import sherig_logo from "@/public/images/sherig_logo.svg";

export default function Banner() {
  return (
    <div className="px-4 pt-2 md:pt-0 lg:px-8 flex justify-between items-center align-middle bg-white">
      <Image src={rgob_logo} alt="rgob logo" className="w-1/10 lg:w-1/20 h-auto" />
      <Image src={banner_img} alt="banner image" className="w-1/2 lg:w-2/10 h-auto" />
      <Image src={sherig_logo} alt="sherig logo" className="w-1/10 lg:w-1/20 h-auto" />
    </div>
  );
}
