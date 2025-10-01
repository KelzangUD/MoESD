import Image, { StaticImageData } from "next/image";
import dep_image from "@/public/images/dep.jpg";
import dse_image from "@/public/images/dse.jpg";
import bcsea_image from "@/public/images/bcsea.jpg";
import bq_image from "@/public/images/bq.jpg";
import dw_image from "@/public/images/dw.jpg";
import ss_image from "@/public/images/ss.png";
import esws_image from "@/public/images/esws.png";
import arrow_right from "@/public/images/arrow-right.svg";

type DepartmentCardProps = {
  image: StaticImageData;
  department: string;
  description: string;
};

const DepartmentCard: React.FC<DepartmentCardProps> = ({
  image,
  department,
  description,
}) => {
  return (
    <div className="flex flex-col rounded-md overflow-hidden border-1 border-[#d6d6d6] bg-white shadow-sm">
      <div className="relative h-90 w-full">
        <Image src={image} alt={department} className="object-cover" fill />
      </div>
      <div className="p-6">
        <p className="font-bold text-xl">{department}</p>
        <p className="mt-6">{description}</p>
      </div>
      <div className="mt-auto px-6 py-3 mb-3">
        <button className="flex gap-2 font-bold transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:cursor-pointer">
          Visit <Image src={arrow_right} alt="arrow" width="20" height="10" />
        </button>
      </div>
    </div>
  );
};

export default function Department() {
  return (
    <div className="p-4 lg:p-8 font-mono">
      <h5 className="font-bold text-2xl">Departments</h5>
      <div className="grid  grid-cols-1 lg:grid-cols-3 gap-3 my-6">
        <DepartmentCard
          image={dep_image}
          department="Department of Education (DEP)"
          description="Provides youth health and development programmes to nurture and empower youth with necessary values and skills to enable them to cope with emerging challenges and provide avenues for their positive growth."
        />
        <DepartmentCard
          image={dse_image}
          department="Department of School Education (DSE)"
          description="Providing a wholesome education to students through various provisions that emphasize academic excellence, curriculum integration, pedagogy, and assessments that meet the diverse needs of the students."
        />
        <DepartmentCard
          image={bcsea_image}
          department="Bhutan Council for School Examinations and Assessment (BCSEA)"
          description="Focus and support the education ministry in bringing about implementations in schooling so that students not only fulfill their potentials and meet the international learning standards, but are also better prepared for the world of work."
        />
        <DepartmentCard
          image={bq_image}
          department="Bhutan Qualifications and Professionals Certification Authority (BQPCA)"
          description="Monitoring the quality of education and training, awarding and recognition of qualifications in the country, and also certifying and monitoring the practices of the professionals."
        />
        <DepartmentCard
          image={dw_image}
          department="Department of Workforce Planning & Skills Development (DWPSD)"
          description="Build and sustain a TVET system that produces a work-ready, world ready and future-ready workforce. Plan and coordinate the development of a skilled workforce catering to the current and future needs for the economy."
        />
        <DepartmentCard
          image={ss_image}
          department="Secretariat Services"
          description="Ensures efficient administration within the Ministry of Education. It manages human resources, policy planning, education monitoring, ICT, and legal services to support the ministry’s goals and enhance the education system."
        />
        <DepartmentCard
          image={esws_image}
          department="Education Staff Welfare Scheme (ESWS)"
          description="Strengthen comradeship among its members. Provide cash grants (Semso) to assist members in times of emergencies and distress. Encourage members to save money. Provide small Welfare loans to members requiring such assistance. Invest surplus funds wisely in financially sound projects."
        />
      </div>
    </div>
  );
}
