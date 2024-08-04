import { cn } from "../utils/helpers";
import { useOnClickOutside } from "../hooks/useOnClickOutside";

import { ReactNode, useRef, useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";

interface ComboboxProps {
  icon?: ReactNode;
  options: Option[];
  placeholder: string;
  value: Option | null;
  listClassName?: string;
  selectedIcon?: ReactNode;
  toggleClassName?: string;
  listItemClassName?: string;
  defaultIconClassName?: string;
  searchInputClassName?: string;
  searchInputPlaceholder: string;
  defaultSelectedIconClassName?: string;
  setValue: React.Dispatch<React.SetStateAction<Option | null>>;
}

const Combobox = ({
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
  searchInputClassName,
  searchInputPlaceholder,
  defaultSelectedIconClassName,
}: ComboboxProps) => {
  const [toggle, setToggle] = useState(false);
  const [query, setQuery] = useState<string>("");
  const ComboboxRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(ComboboxRef, () => setToggle(false));

  return (
    <div
      ref={ComboboxRef}
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
        <input
          type="text"
          value={query}
          placeholder={searchInputPlaceholder}
          onChange={(e) => setQuery(e.target.value)}
          className={cn(
            "sticky top-0 left-0 w-full border-b",
            searchInputClassName
          )}
        />
        {query ? (
          options.filter((item) =>
            item.name.toLowerCase().includes(query.toLowerCase())
          ).length === 0 ? (
            <p className="w-full py-1.5 font-semibold text-center text-xs">
              No Results
            </p>
          ) : (
            options
              .filter((item) =>
                item.name.toLowerCase().includes(query.toLowerCase())
              )
              .map((item) => (
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
              ))
          )
        ) : (
          options.map((item) => (
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
          ))
        )}
      </div>
    </div>
  );
};

export default Combobox;
