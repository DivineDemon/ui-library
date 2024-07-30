import { cn, isValueFound } from "../utils/helpers";
import { useOnClickOutside } from "../hooks/useOnClickOutside";

import { ReactNode, useRef, useState } from "react";
import { Check, ChevronsUpDown, X } from "lucide-react";

interface MultiselectProps {
  icon?: ReactNode;
  options: Option[];
  placeholder: string;
  value: Option[] | null;
  listClassName?: string;
  removeIcon?: ReactNode;
  toggleClassName?: string;
  listItemClassName?: string;
  defaultIconClassName?: string;
  selectedBadgeClassName?: string;
  defaultSelectedIconClassName?: string;
  setValue: React.Dispatch<React.SetStateAction<Option[] | null>>;
}

const MultiSelect = ({
  icon,
  value,
  options,
  setValue,
  removeIcon,
  placeholder,
  listClassName,
  toggleClassName,
  listItemClassName,
  defaultIconClassName,
  selectedBadgeClassName,
  defaultSelectedIconClassName,
}: MultiselectProps) => {
  const [toggle, setToggle] = useState(false);
  const multiselectRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(multiselectRef, () => setToggle(false));

  const select = (item: Option) => {
    if (!value) {
      setValue([item]);
      return;
    }

    const found = value.find((t) => t.id === item.id);
    if (!found) {
      setValue([...value, item]);
    }
  };

  const remove = (id: number) => {
    const filtered = value?.filter((item) => item.id !== id);
    setValue(filtered!);
  };

  return (
    <div
      ref={multiselectRef}
      className="relative flex flex-col items-start justify-start"
    >
      <div
        onClick={() => setToggle(true)}
        className={cn(
          "relative w-full min-h-[38px] flex flex-wrap items-center justify-start",
          toggleClassName
        )}
      >
        {value && value.length > 0 ? (
          value?.map((item) => (
            <p
              key={item.id}
              className={cn(
                "flex items-center justify-center space-x-1.5",
                selectedBadgeClassName
              )}
            >
              <span>{item.name}</span>
              <button
                type="button"
                onClick={() => remove(item.id)}
                className="hover:text-red-500"
              >
                {removeIcon ? removeIcon : <X className="size-3" />}
              </button>
            </p>
          ))
        ) : (
          <p className="text-xs w-full text-left">{placeholder}</p>
        )}
        <button className="absolute top-2.5 right-2.5 flex items-center justify-center">
          {icon ? (
            icon
          ) : (
            <ChevronsUpDown className={cn(defaultIconClassName)} />
          )}
        </button>
      </div>
      <div
        className={cn(
          "absolute -bottom-[215px] overflow-auto flex flex-col items-start justify-start transition-all ease-linear",
          listClassName,
          {
            "opacity-0 h-0": !toggle,
            "opacity-100 h-fit": toggle,
          }
        )}
      >
        {options.map((item) => (
          <div
            key={item.id}
            onClick={() => select(item)}
            className={cn(
              "cursor-pointer flex items-center justify-start",
              listItemClassName
            )}
          >
            {isValueFound(item.name, value!) ? (
              <Check className={cn(defaultSelectedIconClassName)} />
            ) : null}
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiSelect;
