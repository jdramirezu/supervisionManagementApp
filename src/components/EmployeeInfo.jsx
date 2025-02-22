import React from "react";
import { DocumentArrowDownIcon } from '@heroicons/react/24/solid';

const EmployeeInfo = ({ employee }) => {
    return(
        <>
            <div className="isolate px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-semibold tracking-tight text-balance text-neutral-100 sm:text-5xl">{employee.preferredName}</h2>
                    <p className="mt-2 text-lg/8 text-neutral-300">{`Current information about ${employee.fullName} also known as ${employee.preferredName}.`}</p>
                </div>
                <div className="mx-auto mt-10 max-w-xl sm:mt-20">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="first-name" className="block text-sm/6 font-semibold text-neutral-100">
                            Full name
                            </label>
                            <p className="block w-full rounded-md px-3.5 py-2 text-base text-neutral-100 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            >
                            {employee.fullName}
                            </p>
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block text-sm/6 font-semibold text-neutral-100">
                            Preferred name
                            </label>
                            <p className="block w-full rounded-md px-3.5 py-2 text-base text-neutral-100 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            >{employee.preferredName}
                            </p>
                        </div>
                        <div className="sm:col-span-1">
                            <label htmlFor="company" className="block text-sm/6 font-semibold text-neutral-100">
                            Email
                            </label>
                            <p className="block w-full rounded-md px-3.5 py-2 text-base text-neutral-100 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            >{employee.email}
                            </p>
                        </div>
                        <div className="sm:col-span-1">
                            <label htmlFor="email" className="block text-sm/6 font-semibold text-neutral-100">
                            Employer ID
                            </label>
                            <p className="block w-full rounded-md px-3.5 py-2 text-base text-neutral-100 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            >{employee.employeeID}
                            </p>
                        </div>
                        <div className="sm:col-span-1">
                            <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-neutral-100">
                            Phone number
                            </label>
                            <p className="block w-full rounded-md px-3.5 py-2 text-base text-neutral-100 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600">
                                {employee.phoneNumber}
                            </p>
                        </div>
                        <div className="sm:col-span-1">
                            <label htmlFor="email" className="block text-sm/6 font-semibold text-neutral-100">
                            Status
                            </label>
                            <p className="block w-full rounded-md px-3.5 py-2 text-base text-neutral-100 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600">
                                {employee.status}
                            </p>
                        </div>
                        <div className="sm:col-span-1">
                            <label htmlFor="email" className="block text-sm/6 font-semibold text-neutral-100">
                            Area
                            </label>
                            <p className="block w-full rounded-md px-3.5 py-2 text-base text-neutral-100 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600">
                                {employee.area}
                            </p>
                        </div>
                        <div className="sm:col-span-1">
                            <label htmlFor="email" className="block text-sm/6 font-semibold text-neutral-100">
                            Contract Type
                            </label>
                            <p className="block w-full rounded-md px-3.5 py-2 text-base text-neutral-100 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600">
                                {employee.contractType}
                            </p>
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="photo" className="block text-sm/6 font-medium text-neutral-100">
                                Photo
                            </label>
                            <div className="mt-2 flex items-center gap-x-3">
                                <img src={`https://robohash.org/${employee.employeeID}?200x200`} alt="Employee's name" className="size-40 rounded-full bg-white"/>
                            </div>
                        </div>
                        <div className="sm:col-span-1">
                            <label htmlFor="email" className="block text-sm/6 font-semibold text-neutral-100">
                                Availability
                            </label>
                            <div className="block w-full rounded-md px-3.5 py-2 text-base text-neutral-100 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600">
                                {
                                    employee.availability.map(schedule => {
                                        return(
                                            <p className="">
                                                {schedule}
                                            </p>
                                        );
                                    })
                                }
                            </div>
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="photo" className="block text-sm/6 font-medium text-neutral-100">
                                CV
                            </label>
                            <div className="mt-2 flex items-center gap-x-3">   
                                <DocumentArrowDownIcon aria-hidden="true" className="size-12 text-gray-300" />
                                <button
                                    type="button"
                                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
                                    Download
                                </button>
                            </div>
                        </div>
                        <div className="sm:col-span-1">
                            <label htmlFor="email" className="block text-sm/6 font-semibold text-neutral-100">
                                Stage
                            </label>
                            <p className="block w-full rounded-md px-3.5 py-2 text-base text-neutral-100 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600">
                                {employee.stage}
                            </p>
                        </div>
                        
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-sm/6 font-semibold text-neutral-100">
                                Comments
                            </label>
                            <p className="block w-full rounded-md px-3.5 py-2 text-base text-neutral-100 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600">
                                {employee.comments}
                            </p>
                        </div>
                    </div>
                    <div className="mt-10">
                        <button
                            type=""
                            className="block w-full rounded-md bg-indigo-600 px-3 py-3 text-center text-base font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Accept
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EmployeeInfo;