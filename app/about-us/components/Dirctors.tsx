import Image, { StaticImageData } from "next/image";
import dir_tashi from "@/public/images/dir-tashi.jpg";
import dir_sangay from "@/public/images/dir-sangay.jpg";
import dir_ugyen from "@/public/images/dir-ugyen.jpg";

type DirectorCardProps = {
  image: StaticImageData;
  name: string;
  title: string;
  department: string;
  email: string;
};

const DirectorCard: React.FC<DirectorCardProps> = ({
  image,
  name,
  title,
  department,
  email,
}) => {
  return (
    <div className="rounded-md overflow-hidden relative h-90 md:h-100">
      <Image src={image} alt={name} className="object-cover" fill />
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="absolute bottom-5 left-5 text-white z-10">
        <p className="font-bold text-base md:text-xl">{name}</p>
        <p>{title}</p>
        <p>{department}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default function Directors() {
  return (
    <div className="p-4 md:p-8 bg-[#eee] md:py-12">
      <h5 className="font-bold text-2xl">Directors</h5>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 items-center my-8">
        <DirectorCard
          image={dir_tashi}
          name="Tashi Namgyel"
          title="Director"
          department="Department of School Education (DSE)"
          email="director.dse@moesd.gov.bt"
        />
        <DirectorCard
          image={dir_sangay}
          name="Sangay Choden"
          title="Director"
          department="Department of Education Programs (DEP)"
          email="director.dep@moesd.gov.bt"
        />
        <DirectorCard
          image={dir_ugyen}
          name="Dr. Ugyen Tshewang"
          title="Director"
          department="Bhutan Qualifications & Professionals Certificate Authority (BQPCA)"
          email="utshewang@bqpca.gov.bt"
        />
      </div>
    </div>
  );
}
