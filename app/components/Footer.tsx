import Image from "next/image";
import twitter from "@/public/images/twitter-alt-square.svg";
import facebook from "@/public/images/facebook-square.svg";
import instagram from "@/public/images/instagram-square.svg";
import youtube from "@/public/images/youtube-square.svg";
import tiktok from "@/public/images/tiktok-square.svg";

export default function Footer() {
  return (
    <div className="p-4 lg:p-8 bg-white">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="w-full">
          <h2>ICT Services</h2>
          <hr className="my-2 border-t-2 border-[#d6d6d6]" />
          <ul className="leading-7">
            <li className="hover:text-blue-500 hover:cursor-pointer hover:font-semibold hover:underline text-xs md:text-base">
              Apply for ESWS Loan
            </li>
            <li className="hover:text-blue-500 hover:cursor-pointer hover:font-semibold hover:underline text-xs md:text-base">
              ESWS new member registration form
            </li>
            <li className="hover:text-blue-500 hover:cursor-pointer hover:font-semibold hover:underline text-xs md:text-base">
              ESWS Semso form
            </li>
            <li className="hover:text-blue-500 hover:cursor-pointer hover:font-semibold hover:underline text-xs md:text-base">
              ESWS Refund form
            </li>
            <li className="hover:text-blue-500 hover:cursor-pointer hover:font-semibold hover:underline text-xs md:text-base">
              Request for Media Coverage
            </li>
            <li className="hover:text-blue-500 hover:cursor-pointer hover:font-semibold hover:underline text-xs md:text-base">
              Booking form for National Scouts Center, Paro
            </li>
          </ul>
        </div>
        <div className="w-full">
          <h2>Important Links</h2>
          <hr className="my-2 border-t-2 border-[#d6d6d6]" />
          <ul className="leading-7">
            <li className="hover:text-blue-500 hover:cursor-pointer hover:font-semibold hover:underline text-xs md:text-base">
              RENEW
            </li>
            <li className="hover:text-blue-500 hover:cursor-pointer hover:font-semibold hover:underline text-xs md:text-base">
              G2C Services
            </li>
            <li className="hover:text-blue-500 hover:cursor-pointer hover:font-semibold hover:underline text-xs md:text-base">
              Ministry of Health
            </li>
            <li className="hover:text-blue-500 hover:cursor-pointer hover:font-semibold hover:underline text-xs md:text-base">
              Ministry of Finance
            </li>
            <li className="hover:text-blue-500 hover:cursor-pointer hover:font-semibold hover:underline text-xs md:text-base">
              Audit Clearance System
            </li>
            <li className="hover:text-blue-500 hover:cursor-pointer hover:font-semibold hover:underline text-xs md:text-base">
              Assets Declaration System
            </li>
            <li className="hover:text-blue-500 hover:cursor-pointer hover:font-semibold hover:underline text-xs md:text-base">
              Zhiyog Electronics System (ZESt)
            </li>
            <li className="hover:text-blue-500 hover:cursor-pointer hover:font-semibold hover:underline text-xs md:text-base">
              Security Clearance System
            </li>
            <li className="hover:text-blue-500 hover:cursor-pointer hover:font-semibold hover:underline text-xs md:text-base">
              Department of Revenue & Custom
            </li>
            <li className="hover:text-blue-500 hover:cursor-pointer hover:font-semibold hover:underline text-xs md:text-base">
              Government Inventory Management System
            </li>
            <li className="hover:text-blue-500 hover:cursor-pointer hover:font-semibold hover:underline text-xs md:text-base">
              Ministry of Agriculture and Livestock
            </li>
            <li className="hover:text-blue-500 hover:cursor-pointer hover:font-semibold hover:underline text-xs md:text-base">
              Ministry of Industry, Commerce and Employment
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-2 md:my-6 border-t-2 border-[#d6d6d6]" />
      <div className="my-2">
        <div className="flex justify-center gap-2 mb-4">
          <Image
            src={twitter}
            alt="twitter"
            width="24"
            height="24"
            className="rounded hover:cursor-pointer"
          />
          <Image
            src={facebook}
            alt="facebook"
            width="24"
            height="24"
            className="rounded hover:cursor-pointer"
          />
          <Image
            src={instagram}
            alt="instagram"
            width="24"
            height="24"
            className="rounded hover:cursor-pointer"
          />
          <Image
            src={youtube}
            alt="youtube"
            width="24"
            height="24"
            className="rounded hover:cursor-pointer"
          />
          <Image
            src={tiktok}
            alt="tiktok"
            width="24"
            height="24"
            className="rounded hover:cursor-pointer"
          />
        </div>
        <p className="text-center text-xs md:text-sm">
          Copyright © 2025 - Ministry of Education & Skills Development (MoESD)
        </p>
      </div>
    </div>
  );
}
