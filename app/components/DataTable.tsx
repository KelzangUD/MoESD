"use client";
import { useState, useEffect } from "react";

import Image from "next/image";
import search_icon from "@/public/images/search_icon.svg";
import download_icon from "@/public/images/download.svg";

type Row = {
  id: number;
  fileName: string;
  files: number;
  size: string;
};

export default function DataTable({ data }: { data: Row[] }) {
  const [tableData, setTableData] = useState<Row[]>(data);
  useEffect(() => {
    setTableData(data);
  }, [data]);
  const searchHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setTableData(
      data?.filter((item) => item?.fileName.toLowerCase().includes(query))
    );
  };
  return (
    <div>
      <div className="relative flex justify-end my-3 mb-4">
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
          className="w-xs pl-5 pr-10 py-2 border rounded-md focus:outline-none focus:ring-1 bg-white"
          onChange={searchHandle}
        />
      </div>
      <div className="mt-2 overflow-x-auto w-full border border-gray-400 bg-white text-left">
        <div className="min-w-[1000px]">
          <table className="overflow-x-auto min-w-100 border border-gray-400 bg-white text-left">
            <thead>
              <tr>
                <th className="w-1/14 border-y border-gray-300 py-4 px-3">
                  Sl.No
                </th>
                <th className="w-12/14 border-y border-gray-300 py-4 px-3">
                  Description
                </th>
                <th className="w-1/14 border-y border-gray-300 py-4 px-3 text-right">
                  Download
                </th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {tableData?.length > 0 ? (
                tableData?.map((item) => (
                  <tr key={item?.id} className="h-12">
                    <td className="border-y border-gray-300 px-3 text-left">
                      {item?.id}
                    </td>
                    <td className="border-y border-gray-300 px-3">
                      <div className="flex gap-2 h-full">
                        <span className="font-semibold">{item?.fileName}</span>
                        <span className="text-sm text-gray-500">
                          ({item?.files} file(s), {item?.size})
                        </span>
                      </div>
                    </td>
                    <td className="border-y border-gray-300 px-3">
                      <div className="flex justify-end items-center h-full">
                        <button className="hover:bg-gray-100 rounded-sm p-2 flex items-center justify-center">
                          <Image
                            src={download_icon}
                            alt="download icon"
                            width={20}
                            height={20}
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="h-12 text-center">
                  <td
                    colSpan={11}
                    className="w-full border-y border-gray-300 px-3"
                  >
                    No Data
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
