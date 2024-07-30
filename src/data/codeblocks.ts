export const dropDownBlock = `<Dropdown\n\t\toptions={options}\n\t\tvalue={dropdownValue}\n\t\tplaceholder="Dropdown"\n\t\tsetValue={setDropdownValue}\n\t\tdefaultSelectedIconClassName="size-4"\n\t\ticon={<ChevronDown className="size-4" />}\n\t\tlistClassName="w-full max-h-52 border rounded-lg"\n\t\ttoggleClassName="border px-3 py-1.5 rounded-lg text-sm"\n\tlistItemClassName="w-full text-left px-3 py-1.5 hover:bg-gray-100 text-sm space-x-1.5"\n/>`;

export const multiSelectBlock = `<MultiSelect\n\t\toptions={options}\n\t\tvalue={multiselectValue}\n\t\tdefaultIconClassName="size-4"\n\t\tsetValue={setMultiselectValue}\n\t\tplaceholder="Please Select Values"\n\t\tlistClassName="max-h-52 border rounded-lg w-full bg-white"\n\t\tlistItemClassName="w-full px-3 py-1.5 hover:bg-gray-100 space-x-3"\n\t\tselectedBadgeClassName="bg-gray-100 rounded-full px-2 py-1 text-xs"\n\ttoggleClassName="gap-1.5 border w-52 p-1.5 rounded-lg cursor-pointer"\n/>`;