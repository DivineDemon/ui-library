import { cn } from "../utils/helpers";
import { useOnClickOutside } from "../hooks/useOnClickOutside";

import { ReactNode, useRef, useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";

interface DropdownProps {
  icon?: ReactNode;
  placeholder: string;
  listClassName?: string;
  selectedIcon?: ReactNode;
  toggleClassName?: string;
  listItemClassName?: string;
  defaultIconClassName?: string;
  defaultSelectedIconClassName?: string;
  options: { id: number; name: string }[];
  value: { id: number; name: string } | null;
  setValue: React.Dispatch<
    React.SetStateAction<{ id: number; name: string } | null>
  >;
}

const Dropdown = ({
  icon,
  value,
  options,
  setValue,
  placeholder,
  selectedIcon,
  listClassName,
  toggleClassName,
  listItemClassName,
  defaultIconClassName,
  defaultSelectedIconClassName,
}: DropdownProps) => {
  const [toggle, setToggle] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(dropdownRef, () => setToggle(false));

  return (
    <div
      ref={dropdownRef}
      className="relative flex flex-col items-start justify-start"
    >
      <button
        type="button"
        onClick={() => setToggle(!toggle)}
        className={cn(
          "flex items-center justify-between space-x-3",
          toggleClassName
        )}
      >
        <span>{value ? value.name : placeholder}</span>
        {icon ? icon : <ChevronsUpDown className={cn(defaultIconClassName)} />}
      </button>
      <div
        className={cn(
          "absolute mt-10 overflow-auto flex flex-col items-start justify-start transition-all ease-linear",
          listClassName,
          {
            "opacity-0 h-0": !toggle,
            "opacity-100 h-fit": toggle,
          }
        )}
      >
        {options.map((item) => (
          <p
            key={item.id}
            onClick={() => setValue(item)}
            className={cn(
              "cursor-pointer flex items-center justify-start",
              listItemClassName
            )}
          >
            {value?.id === item.id ? (
              selectedIcon ? (
                selectedIcon
              ) : (
                <Check className={cn(defaultSelectedIconClassName)} />
              )
            ) : null}
            <span>{item.name}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
