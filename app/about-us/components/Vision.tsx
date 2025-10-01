import Image, { StaticImageData } from "next/image";
import policy_icon from "@/public/images/policy-development.svg";
import equitable_icon from "@/public/images/equitable.svg";
import future_ready_icon from "@/public/images/future-ready.svg";

type ObjectiveProps = {
  image: StaticImageData;
  title: string;
  description: string;
  size: number;
};

const Objective: React.FC<ObjectiveProps> = ({
  image,
  title,
  description,
  size=30,
}) => {
  return (
    <div className="my-6 flex gap-4 lg:gap-6 items-center">
      <div
        style={{ width: size, height: size }}
        className="relative flex-shrink-0"
      >
        <Image
          src={image}
          alt={title}
          className="object-contain w-full h-full"
          fill
        />
      </div>
      <div>
        <h6 className="font-bold">{title}</h6>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default function Vision() {
  return (
    <div className="p-4 lg:p-8 font-mono">
      <h5 className="font-bold text-2xl">Vision</h5>
      <p className="my-2">
        “An Educated and enlightened society of GNH, built and sustained on the
        unique Bhutanese values of tha dam-tsig ley gju-drey.”
      </p>
      <div className="mt-8">
        <h6 className="font-bold">Our Objectives</h6>
        <Objective
          image={policy_icon}
          title="Policy Development"
          description="To develop sound educational policies that enable the creation of a knowledge-based GNH society."
          size={30}
        />
        <Objective
          image={equitable_icon}
          title="Equitable & Inclusive Learning"
          description="To provide equitable, inclusive and quality education and lifelong learning opportunities to all children and harness their full potential to become productive citizens."
          size={30}
        />
        <Objective
          image={future_ready_icon}
          title="Future-Ready Skills"
          description="To equip all learners with appropriate knowledge, skills and values to cope with the challenges of the 21st century and beyond."
          size={30}
        />
      </div>
    </div>
  );
}
