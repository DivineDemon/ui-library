export const dropdownTypes = [
  { id: 1, name: "icon", type: "ReactNode?" },
  { id: 2, name: "placeholder", type: "string" },
  { id: 3, name: "listClassName", type: "string?" },
  { id: 4, name: "selectedIcon", type: "ReactNode?" },
  { id: 5, name: "toggleClassName", type: "string?" },
  { id: 6, name: "listItemClassName", type: "string?" },
  { id: 7, name: "defaultIconClassName", type: "string?" },
  { id: 8, name: "defaultSelectedIconClassName", type: "string?" },
  { id: 9, name: "options", type: "{ id: number; name: string }[]" },
  { id: 10, name: "value", type: "{ id: number; name: string } | null" },
  {
    id: 11,
    name: "setValue",
    type: "Dispatch<React.SetStateAction<{ id: number; name: string } | null>>",
  },
];


export const multiselectTypes = [
  { id: 1, name: "icon", type: "ReactNode?" },
  { id: 2, name: "options", type: "Option[]" },
  { id: 3, name: "placeholder", type: "string" },
  { id: 4, name: "value", type: "Option[] | null" },
  { id: 5, name: "listClassName", type: "string?" },
  { id: 6, name: "removeIcon", type: "ReactNode?" },
  { id: 7, name: "toggleClassName", type: "string?" },
  { id: 8, name: "listItemClassName", type: "string?" },
  { id: 9, name: "defaultIconClassName", type: "string?" },
  { id: 10, name: "selectedBadgeClassName", type: "string?" },
  { id: 11, name: "defaultSelectedIconClassName", type: "string?" },
  {
    id: 12,
    name: "setValue",
    type: "Dispatch<React.SetStateAction<Option[] | null>>",
  },
];