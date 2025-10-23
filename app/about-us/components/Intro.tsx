import Image from "next/image";
import marker_icon from "@/public/images/marker.svg";
import city_icon from "@/public/images/city.svg";
import mailbox_icon from "@/public/images/mailbox.svg";

export default function Intro() {
  return (
    <div className="p-4 lg:p-8 bg-gray-50 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center py-2 lg:py-20">
      <div className="space-y-4">
        <h2>
          The Ministry of Education and Skill Development (MoESD)
        </h2>
        <p>
          The Ministry of Education and Skill Development (MoESD) leads Bhutan’s
          education and skills sector, guided by Gross National Happiness and
          rooted in Bhutanese values. It works to provide quality learning that
          balances academic achievement with well-being, culture, and
          responsible citizenship, while also preparing young people with skills
          and training for the opportunities of the 21st century.
        </p>
      </div>
      <div>
        <div className="w-full md:h-100 rounded-md overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4198.689650062765!2d89.63040697598615!3d27.481089835433426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e19422e4466181%3A0x7fc4f4cc33fd3faa!2sMinistry%20of%20Education%20and%20Skills%20Development!5e1!3m2!1sen!2sbt!4v1757922371499!5m2!1sen!2sbt"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center mt-6 lg:text-sm">
          <span className="flex gap-2">
            <Image src={marker_icon} alt="marker" width="20" height="20" />
            <p>MoESD, Peling Lam, Kawajangsa, Thimphu, Bhutan</p>
          </span>
          <span className="flex gap-2">
            <Image src={city_icon} alt="city" width="20" height="20" />
            <p>Postal Code: 11001</p>
          </span>
          <span className="flex gap-2">
            <Image src={mailbox_icon} alt="mail box" width="20" height="20" />
            <p>P.O. Box: 112</p>
          </span>
        </div>
      </div>
    </div>
  );
}
