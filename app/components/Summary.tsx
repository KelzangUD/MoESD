import Image, { StaticImageData } from "next/image";
import school_icon from "@/public/images/school.svg";
import teacher_icon from "@/public/images/teacher.svg";
import students_icon from "@/public/images/students.svg";

type SummaryCardProps = {
  title: string;
  number: number;
  gov: number;
  privateCount: number; // can't use 'private' as it's a reserved word
  icon: StaticImageData; // type for imported image
};

const SummaryCard: React.FC<SummaryCardProps> = ({
  title,
  number,
  gov,
  privateCount,
  icon,
}) => {
  return (
    <div className="border rounded-md p-2 md:p-4 flex justify-between">
      <div>
        <p>{title}</p>
        <h4>{new Intl.NumberFormat().format(number)}</h4>
        <div className="flex gap-2">
          <p>
            Government: <span className="font-semibold">{new Intl.NumberFormat().format(gov)}</span>
          </p>{" "}
          <p>
            Private: <span className="font-semibold">{new Intl.NumberFormat().format(privateCount)}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <Image src={icon} alt={`${title} icon`} width="45" height="45" className="w-7/10 h-auto" />
      </div>
    </div>
  );
};

export default function Summary() {
  return (
    <div className="px-4 lg:px-8 mt-4 mb-6 md:mt-8 md:mb-4">
      <h2>Summary as of 2024</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 my-2 md:my-8">
        <SummaryCard
          title="Schools"
          number={566}
          gov={540}
          privateCount={28}
          icon={school_icon}
        />
        <SummaryCard
          title="Teachers"
          number={10096}
          gov={9551}
          privateCount={545}
          icon={teacher_icon}
        />
        <SummaryCard
          title="Students"
          number={156272}
          gov={148472}
          privateCount={7800}
          icon={students_icon}
        />
      </div>
    </div>
  );
}
