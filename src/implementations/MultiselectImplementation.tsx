import { useState } from "react";
import { options } from "../data/options";
import MultiSelect from "../ui/MultiSelect";

const MultiselectImplementation = () => {
  const [multiselectValue, setMultiselectValue] = useState<Option[] | null>(
    null
  );

  return (
    <MultiSelect
      options={options}
      value={multiselectValue}
      defaultIconClassName="size-4"
      setValue={setMultiselectValue}
      placeholder="Please Select Values"
      listClassName="max-h-52 border rounded-lg w-full bg-white"
      listItemClassName="w-full px-3 py-1.5 hover:bg-gray-100 space-x-3"
      selectedBadgeClassName="bg-gray-100 rounded-full px-2 py-1 text-xs"
      toggleClassName="gap-1.5 border w-52 p-1.5 rounded-lg cursor-pointer"
    />
  );
};

export default MultiselectImplementation;
