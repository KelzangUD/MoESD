import Image, { StaticImageData } from "next/image";
import secretary_img from "@/public/images/secretary.jpg";
import yeshi_img from "@/public/images/Yeshi-Wangmo.png";
import sonam_img from "@/public/images/Sonam-Jamtsho.png";

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

export default function SecretaryOffice() {
  return (
    <div className="p-4 lg:p-8 font-mono bg-white py-12">
      <h5 className="font-bold text-2xl">Office of The Secretary</h5>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center my-8">
        <div className="lg:col-span-2 rounded-md overflow-hidden relative h-130">
          <Image
            src={secretary_img}
            alt="secretary"
            className="object-contain"
            fill
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="absolute bottom-5 left-5 text-white z-10">
            <p className="font-bold text-2xl">Tshewang Chophel Dorji</p>
            <p className="font-bold">Secretary</p>
            <p>secretary@moesd.gov.bt</p>
          </div>
        </div>
        <div className="lg:col-span-3 leading-8">
          <p>
            Dasho Tshewang Chophel Dorji serves as the Secretary of the Ministry
            of Education and Skills Development who assumed the new role on
            February 3 following Dhar conferment by His Majesty The King.
          </p>
          <br />
          <p className="my-2">
            Dasho brings a wealth of experience to his new position having
            previously served as the Acting Secretary within the Ministry. His
            distinguished civil service career began in 1991 as a Militia
            Officer in the Royal Bhutan Army. In 1995, he joined the Ministry of
            Foreign Affairs where he held various roles including Director of
            the Department of Economic and Tech Diplomacy, and undertook
            diplomatic assignments in New Delhi and New York.
          </p>
          <br />
          <p>
            Dasho also served as Bhutan’s Ambassador to the Kingdom of Thailand
            from May 2016 to March 2021 with concurrent accreditation to
            Singapore, Myanmar and Australia.
          </p>
        </div>
      </div>
      <div className="my-2">
        <h6 className="font-bold text-xl">Staff</h6>
        <div className="grid lg:grid-cols-4 gap-2 my-4">
          <StaffCard
            image={yeshi_img}
            name="Yeshi Wangmo"
            title="Personal Assistant"
            email="yeshi@moesd.gov.bt"
          />
          <StaffCard
            image={sonam_img}
            name="Sonam Jamtsho"
            title="Driver"
            email=""
          />
        </div>
      </div>
    </div>
  );
}
