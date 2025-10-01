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
    title: "Newsletter",
    rows: [
      {
        id: 1,
        fileName: "26th Issue of Education Newsletter",
        files: 1,
        size: "42.82 MB",
      },
    ],
  },
];

export default function Newsletter() {
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
    <div className="p-8 font-mono">
      <h5 className="font-bold text-2xl">Newsletter</h5>
      <div className="my-6">
        <select
          name="category"
          id="category"
          value={isActive}
          onChange={changeHandle}
          className="border border-gray-300 p-2 rounded-md bg-white w-100"
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
