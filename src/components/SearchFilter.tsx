"use client";

import Select, { PropsValue } from "react-select";
import { GENRES } from "@/constants/genres";
import { MEDIA_FORMATS, MEDIA_SEASONS, MEDIA_SORT, MEDIA_STATUSES } from "@/constants/media";
import { YEARS } from "@/constants/years";
import { Button } from "./ui/Button";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

type Option = { value: string; label: string };

type FilterConfig = {
  title: string;
  options: Option[];
  mode: "multi" | "single";
};

const FILTER_CONFIGS: FilterConfig[] = [
  { title: "Genres", options: GENRES, mode: "multi" },
  { title: "Year", options: YEARS, mode: "single" },
  { title: "Status", options: MEDIA_STATUSES, mode: "single" },
  { title: "Season", options: MEDIA_SEASONS, mode: "single" },
  { title: "Format", options: MEDIA_FORMATS, mode: "single" },
  { title: "Sort", options: MEDIA_SORT, mode: "multi" },
];

export default function SearchFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const filters = Object.fromEntries(searchParams.entries());

  const [selectedFilters, setSelectedFilters] = useState<
    { key: string; selected: PropsValue<Option> }[]
  >([]);

  const handleFilter = ({ key, selected }: { key: string; selected: PropsValue<Option> }) => {
    setSelectedFilters((prev) => {
      const removedOld = prev.filter((f) => f.key !== key);
      if (!selected || selected.length < 1) return removedOld;
      return [...removedOld, { key, selected }];
    });
  };

  // const handleValue = (key: string) => {
  //   console.log("asdasd", filters[key]);
  //   return filters[key];
  // };

  const handleApply = () => {
    const params = new URLSearchParams();
    console.log(selectedFilters);

    if (query) params.set("query", query);
    selectedFilters.forEach((f) => {
      if (Array.isArray(f.selected)) {
        const joined = f.selected.map((x) => x.value).join(",");
        params.set(f.key, joined);
      } else {
        params.set(f.key, f.selected.value);
      }
    });
    router.push(`search?${params.toString()}`);
  };

  const handleReset = () => {
    console.log("Reset");
    setSelectedFilters([]);
    const params = new URLSearchParams();
    if (query) params.append("query", query);
    router.push(`search?${params.toString()}`);
  };

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(254px,1fr))] gap-x-4 gap-y-2">
      {FILTER_CONFIGS.map((conf) => {
        const isMulti = conf.mode === "multi";
        const filterKey = conf.title.toLowerCase();

        return (
          <div key={conf.title} className="flex flex-col gap-1">
            <h3 className="font-bold">{conf.title}</h3>

            <Select
              placeholder={`Select ${conf.title}`}
              options={conf.options}
              isClearable
              isMulti={isMulti}
              closeMenuOnSelect={!isMulti}
              // value={() => handleValue(filterKey)}
              onChange={(selected) => handleFilter({ key: filterKey, selected })}
              className="my-react-select-container"
              classNamePrefix="my-react-select"
            />
          </div>
        );
      })}
      <div className="flex items-end gap-2">
        <Button className="text-xs" onClick={() => handleApply()}>
          Apply
        </Button>
        <Button className="text-xs" variant={"secondary"} onClick={() => handleReset()}>
          Reset
        </Button>
      </div>
    </div>
  );
}
