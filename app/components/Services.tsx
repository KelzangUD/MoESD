import Image from "next/image";
import arrow_right from "@/public/images/arrow-right.svg";

type ServiceCardProp = {
  title: string;
};

const ServiceCard: React.FC<ServiceCardProp> = ({ title }) => {
  return (
    <div className="bg-white p-4 md:p-6 rounded-md shadow-xl flex items-center justify-between md:h-20 border-1.5 border-[#d9d9d9] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-101 hover:bg-gray-50 hover:cursor-pointer">
      <p>{title}</p>
      <Image src={arrow_right} alt="Arrow Right" width={20} height={20} />
    </div>
  );
};

export default function Services() {
  return (
    <div className="p-4 lg:p-8 bg-[#EEEEEE]">
      <h2>Our Services</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-3 my-4">
        <ServiceCard title="Education Management Information System" />
        <ServiceCard title="EMIS Portal" />
        <ServiceCard title="MySherig (Learning Management System" />
        <ServiceCard title="Content Repository" />
        <ServiceCard title="Bhutan Scouts Association" />
        <ServiceCard title="TVET Management Information System" />
        <ServiceCard title="Sherig E-counselling & Consultation Services" />
        <ServiceCard title="Feeding Schools Daily Menu Entry" />
      </div>
    </div>
  );
}
