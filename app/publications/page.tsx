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
    title: "Annual Education Statistics (AES)",
    rows: [
      {
        id: 1,
        fileName: "Annual Education Statistics 2024",
        files: 1,
        size: "16.47 MB",
      },
      {
        id: 2,
        fileName: "Annual Education Statistics 2023",
        files: 1,
        size: "15.22 MB",
      },
      {
        id: 3,
        fileName: "Annual Education Statistics 2022",
        files: 1,
        size: "6.09 MB",
      },
      {
        id: 4,
        fileName: "Annual Education Statistics 2021",
        files: 1,
        size: "4.02 MB",
      },
      {
        id: 5,
        fileName: "Annual Education Statistics 2020",
        files: 1,
        size: "21.84 MB",
      },
    ],
  },
  {
    id: 2,
    title: "Publications",
    rows: [
      {
        id: 1,
        fileName: "ESCP [HCRRP] [2025.02.10]",
        files: 1,
        size: "241.79 MB",
      },
      {
        id: 2,
        fileName: "TVET Climate Responsive Strategy 2025-2029",
        files: 1,
        size: "5.80 MB",
      },
      {
        id: 3,
        fileName: "Textbook Printing Specifications for 2025 Academic session",
        files: 1,
        size: "4.00 MB",
      },
      {
        id: 4,
        fileName: "Client satisfaction survey report by BQPCA.",
        files: 1,
        size: "3.13 MB",
      },
      {
        id: 5,
        fileName: "12th Plan Review Report for MoESD 2018-2023",
        files: 1,
        size: "23.24 MB",
      },
    ],
  },
  {
    id: 3,
    title: "Bhutan Scouts Association",
    rows: [
      {
        id: 1,
        fileName: "Institutional Identity- Bhutan Scouts Association",
        files: 1,
        size: "5.33 MB",
      },
    ],
  },
  {
    id: 4,
    title: "Publications By DEP",
    rows: [
      {
        id: 1,
        fileName: "12th Plan Review Report for MoESD 2018-2023",
        files: 1,
        size: "23.24 MB",
      },
    ],
  },
  {
    id: 5,
    title: "Career Education and Counselling Division",
    rows: [
      {
        id: 1,
        fileName: "Anti-bullying Interventions in Schools",
        files: 1,
        size: "867.60 MB",
      },
    ],
  },
];

export default function Publications() {
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
      <h5 className="font-bold text-2xl">Publications</h5>
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
