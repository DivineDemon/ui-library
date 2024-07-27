import { cn } from "./utils/helpers";
import Dropdown from "./ui/Dropdown";
import { dropdownTypes } from "./data/types";
import CodeBlock from "./components/CodeBlock";
import { dropDownBlock } from "./data/codeblocks";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const App = () => {
  const options = [
    {
      id: 1,
      name: "Option 1",
    },
    {
      id: 2,
      name: "Option 2",
    },
    {
      id: 3,
      name: "Option 3",
    },
    {
      id: 4,
      name: "Option 4",
    },
    {
      id: 5,
      name: "Option 5",
    },
    {
      id: 6,
      name: "Option 6",
    },
    {
      id: 7,
      name: "Option 7",
    },
    {
      id: 8,
      name: "Option 8",
    },
    {
      id: 9,
      name: "Option 9",
    },
    {
      id: 10,
      name: "Option 10",
    },
  ];
  const [preview, setPreview] = useState(true);
  const [dropdownValue, setDropdownValue] = useState<{
    id: number;
    name: string;
  } | null>(null);

  return (
    <div className="w-full flex flex-col items-start justify-start space-y-10 p-10">
      <div className="w-full container mx-auto rounded-3xl bg-gray-100 p-5 flex flex-col items-center justify-center space-y-10">
        <h1 className="w-full text-center font-bold text-4xl">
          UI Library Components
        </h1>
        {/* Dropdown */}
        <div className="w-full grid grid-cols-2 gap-5">
          <div className="col-span-1 w-full h-[500px] flex flex-col items-center justify-between bg-white border rounded-lg overflow-hidden">
            <div className="w-full flex items-center justify-between border-b p-5">
              <h2 className="w-full text-left col-span-2 font-semibold text-2xl">
                Dropdown
              </h2>
              <div className="flex items-center justify-center border divide-x rounded-md">
                <p
                  onClick={() => setDropdownValue(null)}
                  className="text-xs px-2 py-1 hover:bg-gray-100 cursor-pointer"
                >
                  Reset
                </p>
                <p
                  onClick={() => setPreview(true)}
                  className="text-xs px-2 py-1 hover:bg-gray-100 cursor-pointer"
                >
                  Preview
                </p>
                <p
                  onClick={() => setPreview(false)}
                  className="text-xs px-2 py-1 hover:bg-gray-100 cursor-pointer"
                >
                  Code
                </p>
              </div>
            </div>
            <div
              className={cn("w-full h-full flex items-start justify-center", {
                "p-5": preview,
              })}
            >
              {preview ? (
                <Dropdown
                  options={options}
                  value={dropdownValue}
                  placeholder="Dropdown"
                  setValue={setDropdownValue}
                  defaultSelectedIconClassName="size-4"
                  icon={<ChevronDown className="size-4" />}
                  listClassName="w-full max-h-52 border rounded-lg"
                  toggleClassName="border px-3 py-1.5 rounded-lg text-sm"
                  listItemClassName="w-full text-left px-3 py-1.5 hover:bg-gray-100 text-sm space-x-1.5"
                />
              ) : (
                <CodeBlock text={dropDownBlock} />
              )}
            </div>
          </div>
          <div className="col-span-1 w-full h-[500px] flex flex-col items-start justify-start bg-white border rounded-lg overflow-hidden p-5">
            <h1 className="w-full text-left text-xl font-semibold mb-5">
              Type Definition
            </h1>
            <div className="w-full flex flex-col items-center justify-center divide-y border rounded-lg">
              {dropdownTypes.map((type) => (
                <div
                  key={type.id}
                  className={cn("w-full grid grid-cols-4 gap-5 text-xs p-1.5", {
                    "bg-gray-100": type.id % 2 === 0,
                  })}
                >
                  <div className="col-span-1 font-semibold">{type.name}</div>
                  <div className="col-span-3 code">{type.type}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
