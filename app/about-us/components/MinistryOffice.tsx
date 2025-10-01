import Image, { StaticImageData } from "next/image";
import minister_image from "@/public/images/minister.jpeg";
import tandin_img from "@/public/images/tandin.png";
import chimi_img from "@/public/images/chimi.jpg";
import tashi_img from "@/public/images/tashi.png";

type StaffCardProps = {
  image: StaticImageData;
  name: string;
  title: string;
  email: string;
};

const StaffCard: React.FC<StaffCardProps> = ({ image, name, title, email }) => {
  return (
    <div className="rounded-md overflow-hidden border-2 border-[#d6d6d6] bg-white">
      <div className="relative h-90 w-full">
        <Image src={image} alt={name} className="object-cover" fill />
      </div>
      <div className="p-6">
        <p className="font-bold text-xl">{name}</p>
        <p className="font-bold">{title}</p>
        {email !== "" && <p>{email}</p>}
      </div>
    </div>
  );
};

export default function MinistryOffice() {
  return (
    <div className="p-4 lg:p-8 font-mono bg-[#eee] py-12">
      <h5 className="font-bold text-2xl">Office of The Minister</h5>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center my-8">
        <div className="lg:col-span-2 rounded-md overflow-hidden relative h-130">
          <Image
            src={minister_image}
            alt="ministry"
            className="object-cover"
            fill
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="absolute bottom-5 left-5 text-white z-10">
            <p className="font-bold text-2xl">Yeezang De Thapa</p>
            <p className="font-bold">Minister</p>
            <p>minister@moesd.gov.bt</p>
          </div>
        </div>
        <div className="lg:col-span-3 leading-8">
          <p>
            Her Excellency Yeezang De Thapa serves as the Minister for the
            Ministry of Education and Skills Development who assumed the new
            role on 28 January 2024 following the Dakyen conferment by His
            Majesty The King.
          </p>
          <br />
          <p className="my-2">
            Before assuming this significant role, Lyonpo held the position of
            Chief Forestry Officer for the Territorial Divisional Office in
            Tsirang. Her civil service journey began as a Forestry Officer in
            2005 and she has since held various dedicated roles within the
            Department of Forests and Park Services until April 2022.
          </p>
          <br />
          <p>
            Hailing from Yoeseltse, Samtse, Lyonpo holds a Master of Science in
            Mountain Forestry from the University of BOKU, Austria and a
            Bachelor of Science in Forestry from Dr. Y.S. Parmar University of
            Horticulture & Forestry, India.
          </p>
        </div>
      </div>
      <div className="my-2">
        <h6 className="font-bold text-xl">Staff</h6>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 my-4">
          <StaffCard
            image={tandin_img}
            name="Tandin Wangmo"
            title="PS to Minister"
            email="tandinwagmo@moesd.gov.bt"
          />
          <StaffCard
            image={chimi_img}
            name="Chimi Yuden"
            title="PA to Minister"
            email="chimiyuden@moesd.gov.bt"
          />
          <StaffCard
            image={tashi_img}
            name="Tashi"
            title="Driver"
            email="tashi@moe.gov.bt"
          />
        </div>
      </div>
    </div>
  );
}
