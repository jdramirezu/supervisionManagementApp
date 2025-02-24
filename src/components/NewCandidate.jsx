import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { UserCircleIcon,DocumentArrowUpIcon } from '@heroicons/react/24/solid';

const NewCandidate = ({onRouteChange}) => {
    return(
        <>
            <div className="isolate px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-semibold tracking-tight text-balance text-neutral-100 sm:text-5xl">New Candidate</h2>
                    <p className="mt-2 text-lg/8 text-neutral-300">Enter the info for the possible new staff member.</p>
                </div>
                <div className="mx-auto mt-10 max-w-xl sm:mt-20">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="first-name" className="block text-sm/6 font-semibold text-neutral-100">
                            Full name
                            </label>
                            <div className="mt-2.5">
                            <input
                                id="first-name"
                                name="first-name"
                                type="text"
                                autoComplete="given-name"
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-neutral-100 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block text-sm/6 font-semibold text-neutral-100">
                            Preferred name
                            </label>
                            <div className="mt-2.5">
                            <input
                                id="last-name"
                                name="last-name"
                                type="text"
                                autoComplete="family-name"
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-neutral-100 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            />
                            </div>
                        </div>
                        <div className="sm:col-span-1">
                            <label htmlFor="company" className="block text-sm/6 font-semibold text-neutral-100">
                            Email
                            </label>
                            <div className="mt-2.5">
                            <input
                                id="company"
                                name="company"
                                type="text"
                                autoComplete="organization"
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-neutral-100 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            />
                            </div>
                        </div>
                        <div className="sm:col-span-1">
                            <label htmlFor="email" className="block text-sm/6 font-semibold text-neutral-100">
                            Employer ID
                            </label>
                            <div className="mt-2.5">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-neutral-100 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            />
                            </div>
                        </div>
                        <div className="sm:col-span-1">
                            <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-neutral-100">
                            Phone number
                            </label>
                            <div className="mt-2.5">
                                <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                                    <input
                                    id="phone-number"
                                    name="phone-number"
                                    type="text"
                                    placeholder="123-456-7890"
                                    className="block min-w-0 grow py-2 pr-3 pl-1 text-base text-neutral-100 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="sm:col-span-1">
                            <label htmlFor="email" className="block text-sm/6 font-semibold text-neutral-100">
                            Status
                            </label>
                            <div className="mt-2 rounded-md grid shrink-0 grid-cols-1 focus-within:relative outline-1 -outline-offset-1 outline-gray-300 bg-white">
                                <select
                                    id="country"
                                    name="country"
                                    autoComplete="country"
                                    aria-label="Country"
                                    className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                >
                                    <option>Active</option>
                                    <option>Inactive</option>
                                </select>
                                <ChevronDownIcon
                                    aria-hidden="true"
                                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-1">
                            <label htmlFor="email" className="block text-sm/6 font-semibold text-neutral-100">
                            Area
                            </label>
                            <div className="mt-2 rounded-md grid shrink-0 grid-cols-1 focus-within:relative outline-1 -outline-offset-1 outline-gray-300 bg-white">
                                <select
                                    id="country"
                                    name="country"
                                    autoComplete="country"
                                    aria-label="Country"
                                    className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                >
                                    <option>Area 1</option>
                                    <option>Area 2</option>
                                    <option>Area 3</option>
                                </select>
                                <ChevronDownIcon
                                    aria-hidden="true"
                                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-1">
                            <label htmlFor="email" className="block text-sm/6 font-semibold text-neutral-100">
                            Contract Type
                            </label>
                            <div className="mt-2 rounded-md grid shrink-0 grid-cols-1 focus-within:relative outline-1 -outline-offset-1 outline-gray-300 bg-white">
                                <select
                                    id="country"
                                    name="country"
                                    autoComplete="country"
                                    aria-label="Country"
                                    className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                >
                                    <option>Full time</option>
                                    <option>Part time</option>
                                </select>
                                <ChevronDownIcon
                                    aria-hidden="true"
                                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                />
                            </div>
                        </div>
                            <div className="col-span-1">
                                <label htmlFor="photo" className="block text-sm/6 font-medium text-neutral-100">
                                    Photo
                                </label>
                                <div className="mt-2 flex items-center gap-x-3">
                                    <UserCircleIcon aria-hidden="true" className="size-12 text-gray-300" />
                                    <button
                                        type="button"
                                        className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
                                    >
                                        Upload
                                    </button>
                                </div>
                            </div>
                            <div className="sm:col-span-1">
                                <label htmlFor="email" className="block text-sm/6 font-semibold text-neutral-100">
                                Availability
                                </label>
                                <div className="mt-2 rounded-md grid shrink-0 grid-cols-1 focus-within:relative outline-1 -outline-offset-1 outline-gray-300">
                                    <select
                                        multiple
                                        id="country"
                                        name="country"
                                        autoComplete="country"
                                        aria-label="Country"
                                        className="bg-white col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    >
                                        <option>07:00-08:20</option>
                                        <option>08:30-09:50</option>
                                        <option>10:00-11:20</option>
                                        <option>11:30-12:50</option>
                                        <option>13:00-14:20</option>
                                        <option>14:30-15:50</option>
                                        <option>16:00-17:20</option>
                                        <option>17:30-18:50</option>
                                    </select>
                                    <ChevronDownIcon
                                        aria-hidden="true"
                                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                    />
                                </div>
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="photo" className="block text-sm/6 font-medium text-neutral-100">
                                    CV
                                </label>
                                <div className="mt-2 flex items-center gap-x-3">
                                    
                                    <DocumentArrowUpIcon aria-hidden="true" className="size-12 text-gray-300" />
                                    <button
                                        type="button"
                                        className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
                                    >
                                        Upload
                                    </button>
                                </div>
                            </div>
                            <div className="sm:col-span-1">
                                <label htmlFor="email" className="block text-sm/6 font-semibold text-neutral-100">
                                Stage
                                </label>
                                <div className="mt-2 rounded-md grid shrink-0 grid-cols-1 focus-within:relative outline-1 -outline-offset-1 outline-gray-300">
                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country"
                                        aria-label="Country"
                                        className="bg-white col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    >
                                        <option>Applied</option>
                                        <option>Interview</option>
                                        <option>Accepted</option>
                                        <option>Rejected</option>
                                    </select>
                                    <ChevronDownIcon
                                        aria-hidden="true"
                                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                    />
                                </div>
                            </div>
                        
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-sm/6 font-semibold text-neutral-100">
                            Comments
                            </label>
                            <div className="mt-2.5">
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-neutral-100 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                    defaultValue={''}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <button
                            onClick={() => onRouteChange("viewport")}
                            type="submit"
                            className="block w-full rounded-md bg-indigo-600 px-3 py-3 text-center text-base font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NewCandidate;