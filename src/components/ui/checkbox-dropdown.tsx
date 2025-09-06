import { FC, useState } from "react";
import { Input } from "./input";
import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Search } from "lucide-react";

interface CheckboxDropdownProps {
  title: string;
  options: {
    label: string;
    value: string;
  }[];
  selectedOptions: string[];
  setSelectedOptions: (options: string[]) => void;
}
const CheckboxDropdown: FC<CheckboxDropdownProps> = ({
  title = "Dropdown search",
  options,
  selectedOptions,
  setSelectedOptions,
}) => {
  const [search, setSearch] = useState("");
  const handleCheckboxChange = (value: string) => {
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((v) => v !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            id="dropdownSearchButton"
            variant={"outline"}
            size="sm"
            className="w-[200px] overflow-hidden"
          >
            {selectedOptions?.length > 0
              ? selectedOptions.join(", ")
              : "Select " + title}
            <ChevronDown className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          id="dropdownSearch"
          className="z-10  bg-white rounded-lg shadow-sm w-60 dark:bg-gray-700"
        >
          <div className="p-3">
            <label htmlFor="input-group-search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 end-3 flex items-center ps-3 pointer-events-none">
                <Search className="w-4 h-4" />
              </div>
              <Input
                type="text"
                id="input-group-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <ul
            className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownSearchButton"
          >
            {options
              .filter((option) =>
                option.label.toLowerCase().includes(search.toLowerCase())
              )
              .map((option, index) => (
                <li key={option.value}>
                  <div className="flex items-center p-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                    <Input
                      id={"checkbox-item-" + index}
                      type="checkbox"
                      value={option.value}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      onChange={(e) => handleCheckboxChange(e.target.value)}
                      checked={selectedOptions.includes(option.value)}
                    />
                    <label
                      htmlFor={"checkbox-item-" + index}
                      className="w-full ms-2 text-sm font-medium text-gray-900 rounded-sm dark:text-gray-300"
                    >
                      {option.label}
                    </label>
                  </div>
                </li>
              ))}
          </ul>
          {/* <a
          href="#"
          className="flex items-center p-3 text-sm font-medium text-red-600 border-t border-gray-200 rounded-b-lg bg-gray-50 dark:border-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-red-500 hover:underline"
        >
          <svg
            className="w-4 h-4 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-6a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2Z" />
          </svg>
          Delete user
        </a> */}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default CheckboxDropdown;
