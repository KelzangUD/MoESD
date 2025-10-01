import Image, { StaticImageData } from "next/image";
import jica_img from "@/public/images/jica.jpg";
import earth_moving_img from "@/public/images/earth_moving.jpg";
import out_of_school_img from "@/public/images/out_of_school.png";
import notification_img from "@/public/images/public notification.jpg";
import visit_img from "@/public/images/visit.jpg";
import tender_img from "@/public/images/tender.jpg";
import arrow_right from "@/public/images/arrow-right.svg";

type UpdateCardProps = {
  image: StaticImageData;
  title: string;
  date: string;
  category: string[];
  description: string;
};

const UpdateCard: React.FC<UpdateCardProps> = ({
  image,
  title,
  date,
  category,
  description,
}) => {
  return (
    <div className="flex flex-col rounded-md border border-[#D9D9D9] overflow-hidden">
      {/* Image Section */}
      <div className="w-full relative h-70">
        <Image src={image} alt={title} fill className="object-cover" priority />
      </div>

      {/* Content Section */}
      <div className="flex flex-col p-8 flex-1">
        <h5 className="font-bold text-md">{title}</h5>
        <p className="my-2">{date}</p>

        <div className="flex gap-2">
          {category?.map((item) => (
            <span
              className="bg-[#d9d9d9] rounded-2xl px-3 py-0.5 text-sm"
              key={item}
            >
              {item}
            </span>
          ))}
        </div>

        <p className="my-8">{description}</p>

        {/* Push this button to the bottom */}
        <button className="mt-auto flex gap-4 font-bold transition delay-150 duration-300 ease-in-out hover:-translate-y-1">
          Read More
          <Image src={arrow_right} alt="arrow_right" width={20} height={10} />
        </button>
      </div>
    </div>
  );
};

export default function Updates() {
  return (
    <div className="p-4 lg:p-8 font-mono">
      <h5 className="font-bold text-2xl">Latest Updates</h5>
      <div className="grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 gap-3 my-4">
        <UpdateCard
          image={jica_img}
          title="JICA Scholarship 2025"
          date="September 3, 2025"
          category={["Notification", "Scholarship", "Vacancies"]}
          description="JDS  Bhutan announces the scholarship 2025 for Masters and PhD degrees applicable to both civil servants and RUB Faculty."
        />
        <UpdateCard
          image={earth_moving_img}
          title="Coming Soon-Earthmoving Equipment Mechanic Training"
          date="September 1, 2025"
          category={["Notification", "Vacancies"]}
          description="We’re pleased to share that preparations are underway for the next intake of the Earthmoving Equipent Mechanic BQFC2 prgram scheduled ..."
        />
        <UpdateCard
          image={out_of_school_img}
          title="Out-of-School Youth attends CSE training in Samdrupjongkhar"
          date="September 1, 2025"
          category={["News"]}
          description="A three-day Comprehensive Sexuality Education (CSE) training was conducted from August 25-27 in Samdrupjongkhar through the youth center ..."
        />
        <UpdateCard
          image={notification_img}
          title="Public Notification for Service Provider"
          date="August 29, 2025"
          category={["Notification"]}
          description="The Bhutan Qualifications and Professionals Certification Authority (BQPCA) reminds ..."
        />
        <UpdateCard
          image={visit_img}
          title="Hon’ble Lyonpo visits Dagana to engage with teachers and students"
          date="August 29, 2025"
          category={["News"]}
          description="The Hon’ble Lyonpo for Education and Skills Development is currently on a tour of Dagana Dzongkhag visiting schools and engaging with ..."
        />
        <UpdateCard
          image={tender_img}
          title="Quotation for Procurement of Goods and equipment for Schools Providing Special Needs Education"
          date="August 29, 2025"
          category={["Quotation and Tenders"]}
          description="The Project Management Unit, PESJP Department of Workforce Planning and Skills Development, MoESD (Purchaser) hereby requests you to submit ..."
        />
      </div>
    </div>
  );
}
