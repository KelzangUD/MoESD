"use client";
import { useState, useEffect } from "react";
import DataTable from "../components/DataTable";

type Row = {
  id: number;
  fileName: string;
  files: number;
  size: string;
};
type DataItem = {
  id: number;
  title: string;
  rows: Row[];
};

const data: DataItem[] = [
  {
    id: 1,
    title: "HRD Forms",
    rows: [
      {
        id: 1,
        fileName: "Leave form",
        files: 1,
        size: "295.56 KB",
      },
      {
        id: 2,
        fileName: "Principal, VP, CDEO, ADEO Transfer",
        files: 1,
        size: "100.99 KB",
      },
      {
        id: 3,
        fileName: "Support Staff Transfer",
        files: 1,
        size: "129.61 KB",
      },
      {
        id: 4,
        fileName: "Teacher and Counsellor Transfer",
        files: 1,
        size: "265.26 KB",
      },
      {
        id: 5,
        fileName: "Application Form",
        files: 1,
        size: "308.37 KB",
      },
    ],
  },
];

export default function Forms() {
  const [isActive, setIsActive] = useState<number>(1);
  const [tableContent, setTableContent] = useState<Row[]>([]);

  useEffect(() => {
    if (!data || data.length === 0) return;
    const exists = data.some((item) => item.id === isActive);
    if (!exists) setIsActive(data[0].id);

    setTableContent(data.find((item) => item.id === isActive)?.rows ?? []);
  }, [isActive, data]);

  const changeHandle: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setIsActive(Number(event?.target?.value));
  };

  return (
    <div className="p-4 md:p-8">
      <h2>Forms</h2>
      <div className="my-2 md:my-6">
        <select
          name="category"
          id="category"
          value={isActive}
          onChange={changeHandle}
          className="border border-gray-300 p-2 rounded-md bg-white w-full"
        >
          {data?.map((item) => (
            <option value={item.id} key={item.id} className="px-2">
              {item.title}
            </option>
          ))}
        </select>
      </div>
      <div>
        <DataTable data={tableContent} />
      </div>
    </div>
  );
}
