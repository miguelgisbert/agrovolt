import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

type Props = {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  options: string[];
};

export default function FieldSelect({
  id,
  name,
  label,
  placeholder,
  options,
}: Props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (!open || active < 0) return;
    listRef.current?.children[active]?.scrollIntoView({ block: "nearest" });
  }, [open, active]);

  const openAt = (index: number) => {
    setActive(index);
    setOpen(true);
  };

  const choose = (index: number) => {
    setValue(options[index]);
    setOpen(false);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key) && !open) {
      e.preventDefault();
      openAt(value ? options.indexOf(value) : 0);
      return;
    }
    if (!open) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, options.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Home") {
      e.preventDefault();
      setActive(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setActive(options.length - 1);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      choose(active);
    }
  };

  return (
    <div ref={rootRef} className="relative">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1.5"
      >
        {label}
      </label>

      <button
        type="button"
        id={id}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={`${id}-listbox`}
        aria-activedescendant={
          open ? `${id}-option-${active}` : undefined
        }
        onClick={() => (open ? setOpen(false) : openAt(value ? options.indexOf(value) : 0))}
        onKeyDown={onKeyDown}
        className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-lg border bg-white text-left text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${
          value ? "text-gray-900 border-gray-300" : "text-gray-400 border-gray-300"
        } ${open ? "ring-2 ring-green-500 border-transparent" : ""}`}
      >
        <span className="truncate">{value || placeholder}</span>
        <ChevronDown
          className={`w-4 h-4 shrink-0 text-gray-500 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <ul
          id={`${id}-listbox`}
          ref={listRef}
          role="listbox"
          aria-label={label}
          className="field-listbox absolute left-0 right-0 top-full z-[60] mt-1.5 max-h-56 overflow-y-auto rounded-lg border border-gray-200 bg-white py-1 shadow-xl"
        >
          {options.map((option, index) => {
            const selected = value === option;
            return (
              <li
                key={option}
                id={`${id}-option-${index}`}
                role="option"
                aria-selected={selected}
                onMouseEnter={() => setActive(index)}
                onClick={() => choose(index)}
                className={`flex items-center justify-between gap-3 px-4 py-2.5 text-sm cursor-pointer ${
                  index === active ? "bg-green-50" : ""
                } ${
                  selected
                    ? "text-green-700 font-medium"
                    : "text-gray-700"
                }`}
              >
                <span>{option}</span>
                {selected && (
                  <Check className="w-4 h-4 shrink-0 text-green-600" />
                )}
              </li>
            );
          })}
        </ul>
      )}

      <input type="hidden" name={name} value={value} />
    </div>
  );
}
