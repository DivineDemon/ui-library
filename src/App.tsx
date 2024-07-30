import { useState } from "react";
import { cn } from "./utils/helpers";
import CodeBlock from "./components/CodeBlock";
import { dropdownTypes, multiselectTypes } from "./data/types";
import { dropDownBlock, multiSelectBlock } from "./data/codeblocks";
import DropdownImplementation from "./implementations/DropdownImplementation";
import MultiselectImplementation from "./implementations/MultiselectImplementation";

const App = () => {
  const elements = [
    {
      id: 1,
      name: "Dropdown",
      codeblock: dropDownBlock,
      typeArray: dropdownTypes,
      implementation: DropdownImplementation,
    },
    {
      id: 2,
      name: "MultiSelect",
      codeblock: multiSelectBlock,
      typeArray: multiselectTypes,
      implementation: MultiselectImplementation,
    },
  ];
  const [preview, setPreview] = useState(true);

  return (
    <div className="w-full flex flex-col items-start justify-start space-y-10 p-10">
      <div className="w-full container mx-auto rounded-3xl bg-gray-100 p-5 flex flex-col items-center justify-center space-y-10">
        <h1 className="w-full text-center font-bold text-4xl">
          UI Library Components
        </h1>
        {elements.map((element) => (
          <div key={element.id} className="w-full grid grid-cols-2 gap-5">
            <div className="col-span-1 w-full h-[500px] flex flex-col items-center justify-between bg-white border rounded-lg overflow-hidden">
              <div className="w-full flex items-center justify-between border-b p-5">
                <h2 className="w-full text-left col-span-2 font-semibold text-2xl">
                  {element.name}
                </h2>
                <div className="flex items-center justify-center border divide-x rounded-md">
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
                {preview ? <element.implementation /> : (
                  <CodeBlock text={element.codeblock} />
                )}
              </div>
            </div>
            <div className="col-span-1 w-full h-[500px] flex flex-col items-start justify-start bg-white border rounded-lg overflow-hidden p-5">
              <h1 className="w-full text-left text-xl font-semibold mb-5">
                Type Definition
              </h1>
              <div className="w-full flex flex-col items-center justify-center divide-y border rounded-lg">
                {element.typeArray.map((type) => (
                  <div
                    key={type.id}
                    className={cn(
                      "w-full grid grid-cols-4 gap-5 text-xs p-1.5",
                      {
                        "bg-gray-100": type.id % 2 === 0,
                      }
                    )}
                  >
                    <div className="col-span-1 font-semibold">{type.name}</div>
                    <div className="col-span-3 code">{type.type}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
