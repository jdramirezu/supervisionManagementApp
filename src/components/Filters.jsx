import React, { useState } from "react";
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/16/solid';
import { CheckIcon } from '@heroicons/react/20/solid';

const Filters = () => {
    const people = [
        {
            id: 0,
            name: 'Whole Department',
            avatar:'',
        },
        {
          id: 1,
          name: 'Area 1',
          avatar:
            'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: 2,
          name: 'Area 2',
          avatar:
            'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: 3,
          name: 'Area 3',
          avatar:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
        }
    ];
    const [selected, setSelected] = useState(people[0]);

    return(
        <> 
            <h1 className='text-slate-100 text-6xl text-center pt-4'>Department Team</h1>
            <Listbox value={selected} onChange={setSelected}>
                <Label className="block text-3xl font-medium text-slate-100 text-center">Area</Label>
                <div className="relative mt-2 flex items-center justify-center pb-2">
                    <ListboxButton className="grid cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                        <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                            {selected.avatar ?
                                <>
                                    <img alt="" src={selected.avatar} className="size-5 shrink-0 rounded-full" />
                                    <span className="block truncate text-xl">{selected.name}</span>
                                </>
                            :
                                <span className="block truncate text-xl">{selected.name}</span>
                            }
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
                        {people.map((person) => (
                            <ListboxOption
                                key={person.id}
                                value={person}
                                className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden"
                                >
                                <div className="flex items-center">
                                    <img alt="" src={person.avatar} className="size-5 shrink-0 rounded-full" />
                                    <span className="ml-3 block truncate font-normal group-data-selected:font-semibold">{person.name}</span>
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
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Search"
                    className="block w-128 rounded-md bg-white px-3 py-1.5 text-base text-neutral-100 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"    
                    >
                </input>
            </div>
        </>
    );
}

export default Filters;