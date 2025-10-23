import Image from "next/image";
import Organizational_Chart from "@/public/images/Organogram.jpg";

export default function OrganizationalChart() {
  return (
    <div className="p-4 lg:p-8 bg-white lg:pb-12">
      <h5 className="font-bold text-2xl">Organizational Chart</h5>
      <div className="w-full relative h-60 lg:h-200">
        <Image
          src={Organizational_Chart}
          alt="chart"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
