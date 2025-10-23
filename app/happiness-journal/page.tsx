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
    title: "Happiness Journal",
    rows: [
      {
        id: 1,
        fileName: "Happiness Journal Vol- 9- issue -1",
        files: 1,
        size: "17.44 MB",
      },
      {
        id: 2,
        fileName: "Happiness Journal Vol- 8- issue -4",
        files: 1,
        size: "20.33 MB",
      },
    ],
  },
];

export default function HappinessJournal() {
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
      <h2>Happiness Journal</h2>
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
