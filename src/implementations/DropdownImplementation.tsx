import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Dropdown from "../ui/Dropdown";
import { options } from "../data/options";

const DropdownImplementation = () => {
  const [dropdownValue, setDropdownValue] = useState<Option | null>(null);

  return (
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
  );
};

export default DropdownImplementation;
