import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Combobox from "../ui/Combobox";
import { options } from "../data/options";

const ComboboxImplementation = () => {
  const [ComboboxValue, setComboboxValue] = useState<Option | null>(null);

  return (
    <Combobox
      options={options}
      value={ComboboxValue}
      placeholder="Combobox"
      setValue={setComboboxValue}
      searchInputPlaceholder="Search..."
      searchInputClassName="p-1.5 text-xs"
      defaultSelectedIconClassName="size-4"
      icon={<ChevronDown className="size-4" />}
      listClassName="w-full max-h-52 border rounded-lg"
      toggleClassName="border px-3 py-1.5 rounded-lg text-sm"
      listItemClassName="w-full text-left px-3 py-1.5 hover:bg-gray-100 text-sm space-x-1.5"
    />
  );
};

export default ComboboxImplementation;
