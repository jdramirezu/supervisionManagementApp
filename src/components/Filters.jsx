import React, { useState } from "react";
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/16/solid';
import { CheckIcon } from '@heroicons/react/20/solid';
import { useEmployee } from "../contexts/EmployeeContext";

const Filters = () => {
    
    const { onSearchInfo, areas } = useEmployee();
    const [selected, setSelected] = useState(areas[0].name);
    const areaSelection = event => {
        setSelected(event);
    }

    return(
        <> 
            <h1 className='text-slate-100 text-6xl text-center pt-4'>Department Team</h1>
            <Listbox value={selected} onChange={(areaSelection)}>
                <Label className="block text-3xl font-medium text-slate-100 text-center">Area</Label>
                <div className="relative mt-2 flex items-center justify-center pb-2">
                    <ListboxButton className="grid cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                        <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                            <span className="block truncate text-xl">{selected}</span>
                        </span>
                        <ChevronUpDownIcon
                            aria-hidden="true"
                            className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                        />
                    </ListboxButton>

                    <ListboxOptions
                        transition
                        className="absolute z-10 mt-1 max-h-56 overflow-auto rounded-md bg-white py-1 text-base ring-1 shadow-lg ring-black/5 focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
                        >
                        {areas.map((area) => (
                            <ListboxOption
                                key={area.id}
                                value={area.name}
                                className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden"
                                >
                                <div className="flex items-center">
                                    {/* <img alt="" src={area.avatar} className="size-5 shrink-0 rounded-full" /> */}
                                    <span className="ml-3 block truncate font-normal group-data-selected:font-semibold">{area.name}</span>
                                </div>

                                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-not-data-selected:hidden group-data-focus:text-white">
                                    <CheckIcon aria-hidden="true" className="size-5" />
                                </span>
                            </ListboxOption>
                        ))}
                    </ListboxOptions>
                </div>
            </Listbox>
            
            <div className="mt-2 flex items-center justify-center pb-3">
                <input 
                    type="search"
                    id="search"
                    name="search"
                    placeholder="Search"
                    onChange={onSearchInfo}
                    className="block w-128 rounded-md bg-white px-3 py-1.5 text-base text-neutral-700 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"    
                    >
                </input>
            </div>
        </>
    );
}

export default Filters;