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
    title: "Polices",
    rows: [
      {
        id: 1,
        fileName: "National Education Policy",
        files: 1,
        size: "901.35 MB",
      },
    ],
  },
];

export default function Publications() {
  const [isActive, setIsActive] = useState<number>(1);
  const [tableContent, setTableContent] = useState<Row[]>([]);

  useEffect(() => {
    setTableContent(data?.find((item) => item.id === isActive)?.rows ?? []);
  }, [isActive]);

  const changeHandle: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setIsActive(Number(event?.target?.value));
  };

  return (
    <div className="p-4 lg:p-8 font-mono">
      <h5 className="font-bold text-2xl">Policies</h5>
      <div className="my-6">
        <select
          name="category"
          id="category"
          value={isActive}
          onChange={changeHandle}
          className="border border-gray-300 p-2 rounded bg-white w-100"
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
