"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import search_icon from "@/public/images/search_icon.svg";
import menu_icon from "@/public/images/menu.svg";

export default function Navigation() {
  const [showMenu, setShowMenu] = useState(false);
  const [showPublicationsSubMenu, setShowPublicationsSubMenu] = useState(false);
  const [showDownloadsSubMenu, setShowDownloadsSubMenu] = useState(false);
  return (
    <div className="py-1 px-2 lg:py-4 lg:px-8 flex justify-between items-center bg-white shadow-lg font-mono z-100">
      <nav className="relative">
        <ul className="font-semibold hidden xl:flex xl:gap-6">
          <li className="hover:text-blue-600 cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <Link href="about-us">About Us</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <Link href="department">Department</Link>
          </li>
          {/* Publications Menu - Fixed */}
          <li className="relative group">
            <button className="flex gap-1 hover:text-blue-600 cursor-pointer">
              Publications{" "}
              <svg
                className="w-6 h-6 transition duration-300 ease-in-out transform group-hover:rotate-180"
                fill="none"
                stroke="currentColor" // 👈 Inherit the current text color
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {/* Invisible bridge to prevent hover gap */}
            <div className="absolute top-full left-0 w-full h-4 bg-transparent group-hover:block"></div>
            <div
              className="bg-gray-100 w-screen absolute left-0 top-full mt-4 p-8 opacity-0 invisible translate-y-2 transition duration-300 ease-in-out group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 shadow-lg z-40"
              style={{ left: "-20rem" }}
            >
              <ul className="flex gap-8">
                <li className="hover:text-blue-600">
                  <Link href="/policies">Policies</Link>
                </li>
                <li className="hover:text-blue-600">
                  <Link href="/publications">Publications</Link>
                </li>
                <li className="hover:text-blue-600">
                  <Link href="/guidelines">Guidelines</Link>
                </li>
              </ul>
            </div>
          </li>
          {/* Downloads Menu - Fixed */}
          <li className="relative group">
            <button className="flex gap-1 hover:text-blue-600 cursor-pointer">
              Downloads{" "}
              <svg
                className="w-6 h-6 transition duration-300 ease-in-out transform group-hover:rotate-180"
                fill="none"
                stroke="currentColor" // 👈 Inherit the current text color
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {/* Invisible bridge to prevent hover gap */}
            <div className="absolute top-full left-0 w-full h-5 bg-transparent group-hover:block"></div>
            <div
              className="bg-gray-100 w-screen absolute left-0 top-full mt-5 p-8 opacity-0 invisible translate-y-2 transition duration-300 ease-in-out group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 shadow-lg z-50"
              style={{ left: "-30rem" }}
            >
              <ul className="flex gap-8">
                <li className="hover:text-blue-600">
                  <Link href="/forms">Forms</Link>
                </li>
                <li className="hover:text-blue-600">
                  <Link href="/newsletter">Newsletter</Link>
                </li>
                <li className="hover:text-blue-600">
                  <Link href="/annual-performance-agreement">
                    Annual Performance Agreement (APA)
                  </Link>
                </li>
                <li className="hover:text-blue-600">
                  <Link href="/happiness-journal">Happiness Journal</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link href="/contact-us">
              <button className="hover:text-blue-600 cursor-pointer">
                Contact Us
              </button>
            </Link>
          </li>
        </ul>
        <button
          onClick={() => setShowMenu((prev) => !prev)}
          className="block pl-4 xl:hidden"
        >
          <Image src={menu_icon} alt="menu icon" width="20" height="20" />
        </button>
        <ul
          className={`fixed top-0 left-0 z-50
              bg-black text-white
              h-screen w-screen
              p-4 shadow-lg font-semibold
              flex flex-col gap-2
              transform transition-transform duration-300 ease-in-out
              ${showMenu ? "translate-x-0" : "-translate-x-full"}`}
        >
          <li>
            <button onClick={() => setShowMenu(false)}>
              <Link href="/">Home</Link>
            </button>
          </li>
          <li>
            <button onClick={() => setShowMenu(false)}>
              <Link href="about-us">About Us</Link>
            </button>
          </li>
          <li>
            <button onClick={() => setShowMenu(false)}>
              <Link href="/department">Department</Link>
            </button>
          </li>
          <li>
            <button
              className="flex gap-1"
              onClick={() => setShowPublicationsSubMenu((prev) => !prev)}
            >
              Publications{" "}
              <svg
                className={`w-6 h-6 transition duration-300 ease-in-out transform ${
                  showPublicationsSubMenu ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </li>
          {showPublicationsSubMenu && (
            <>
              <li className="ml-4">
                <button
                  onClick={() => {
                    setShowMenu(false);
                    setShowPublicationsSubMenu(false);
                  }}
                >
                  <Link href="/policies">Policies</Link>
                </button>
              </li>
              <li className="ml-4">
                <button
                  onClick={() => {
                    setShowMenu(false);
                    setShowPublicationsSubMenu(false);
                  }}
                >
                  <Link href="/publications">Publications</Link>
                </button>
              </li>
              <li className="ml-4">
                <button
                  onClick={() => {
                    setShowMenu(false);
                    setShowPublicationsSubMenu(false);
                  }}
                >
                  <Link href="/guidelines">Guidelines</Link>
                </button>
              </li>
            </>
          )}
          <li>
            <button
              className="flex gap-1"
              onClick={() => setShowDownloadsSubMenu((prev) => !prev)}
            >
              Download{" "}
              <svg
                className={`w-6 h-6 transition duration-300 ease-in-out transform ${
                  showDownloadsSubMenu ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </li>
          {showDownloadsSubMenu && (
            <>
              <li className="ml-4">
                <button
                  onClick={() => {
                    setShowDownloadsSubMenu(false);
                    setShowMenu(false);
                  }}
                >
                  <Link href="/forms">Forms</Link>
                </button>
              </li>
              <li className="ml-4">
                <button
                  onClick={() => {
                    setShowDownloadsSubMenu(false);
                    setShowMenu(false);
                  }}
                >
                  <Link href="/newsletter">Newsletter</Link>
                </button>
              </li>
              <li className="ml-4">
                <button
                  onClick={() => {
                    setShowDownloadsSubMenu(false);
                    setShowMenu(false);
                  }}
                >
                  <Link href="/annual-performance-agreement">
                    Annual Performance Agreement (APA)
                  </Link>
                </button>
              </li>
              <li className="ml-4">
                <button
                  onClick={() => {
                    setShowDownloadsSubMenu(false);
                    setShowMenu(false);
                  }}
                >
                  <Link href="/happiness-journal">Happiness Journal</Link>
                </button>
              </li>
            </>
          )}
          <li>
            <button onClick={() => setShowMenu(false)}>
              <Link href="contact-us">Contact Us</Link>
            </button>
          </li>
        </ul>
      </nav>
      <div className="relative">
        <Image
          src={search_icon}
          alt="search icon"
          width="20"
          height="20"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
        />
        <input
          type="text"
          placeholder="Search"
          className="w-0.5 lg:w-full pl-5 pr-10 py-2 lg:border rounded-md focus:outline-none focus:ring-1"
        />
      </div>
    </div>
  );
}
