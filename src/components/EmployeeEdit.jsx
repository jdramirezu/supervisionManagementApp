import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { UserCircleIcon,DocumentArrowUpIcon } from '@heroicons/react/24/solid';
import { useEmployee } from "../contexts/EmployeeContext.jsx";

const EmployeeEdit = () =>{
    const { selectedEmployee, updateEmployee } = useEmployee();
    const [editedEmployee , setEditedEmployee] = useState(selectedEmployee);
    const navigate = useNavigate();

    const handleChange = (field, value) =>{
        setEditedEmployee( prev => ({...prev, [field]:value}));
    }

    const handleSave = () =>{
        updateEmployee(editedEmployee);
    }

    return(
        <>
            <div className="isolate px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-semibold tracking-tight text-balance text-neutral-100 sm:text-5xl">{selectedEmployee.preferredName}</h2>
                    <p className="mt-2 text-lg/8 text-neutral-300">Enter the info for the possible new staff member.</p>
                </div>
                <div className="mx-auto mt-10 max-w-xl sm:mt-20">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="fullName" className="block text-sm/6 font-semibold text-neutral-100">
                            Full name
                            </label>
                            <div className="mt-2.5">
                            <input
                                id="fullName"
                                name="fullName"
                                value={editedEmployee.fullName}
                                onChange={(e) => handleChange("fullName",e.target.value)}
                                type="text"
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-neutral-700 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="preferredName" className="block text-sm/6 font-semibold text-neutral-100">
                            Preferred name
                            </label>
                            <div className="mt-2.5">
                            <input
                                id="preferredName"
                                name="preferredName"
                                value={editedEmployee.preferredName}
                                onChange={(e) => handleChange("preferredName",e.target.value)}
                                type="text"
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-neutral-700 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            />
                            </div>
                        </div>
                        <div className="sm:col-span-1">
                            <label htmlFor="email" className="block text-sm/6 font-semibold text-neutral-100">
                            Email
                            </label>
                            <div className="mt-2.5">
                            <input
                                id="email"
                                name="email"
                                value={editedEmployee.email}
                                onChange={(e) => handleChange("email",e.target.value)}
                                type="email"
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-neutral-700 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            />
                            </div>
                        </div>
                        <div className="sm:col-span-1">
                            <label htmlFor="employeeID" className="block text-sm/6 font-semibold text-neutral-100">
                            Employee ID
                            </label>
                            <div className="mt-2.5">
                            <input
                                id="employeeID"
                                name="employeeID"
                                type="text"
                                value={editedEmployee.employeeID}
                                onChange={(e) => handleChange("employeeID",e.target.value)}
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-neutral-700 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            />
                            </div>
                        </div>
                        <div className="sm:col-span-1">
                            <label htmlFor="phoneNumber" className="block text-sm/6 font-semibold text-neutral-100">
                            Phone number
                            </label>
                            <div className="mt-2.5">
                                <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                                    <input
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    type="text"
                                    value={editedEmployee.phoneNumber}
                                    onChange={(e) => handleChange("phoneNumber",e.target.value)}
                                    className="block min-w-0 grow py-2 pr-3 pl-1 text-base text-neutral-700 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="sm:col-span-1">
                            <label htmlFor="status" className="block text-sm/6 font-semibold text-neutral-100">
                            Status
                            </label>
                            <div className="mt-2 rounded-md grid shrink-0 grid-cols-1 focus-within:relative outline-1 -outline-offset-1 outline-gray-300 bg-white">
                                <select
                                    id="status"
                                    name="status"
                                    value={editedEmployee.status}
                                    onChange={(e) => handleChange("status",e.target.value)}
                                    className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                >
                                    <option value={"active"}>Active</option>
                                    <option value={"inactive"}>Inactive</option>
                                </select>
                                <ChevronDownIcon
                                    aria-hidden="true"
                                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-1">
                            <label htmlFor="area" className="block text-sm/6 font-semibold text-neutral-100">
                            Area
                            </label>
                            <div className="mt-2 rounded-md grid shrink-0 grid-cols-1 focus-within:relative outline-1 -outline-offset-1 outline-gray-300 bg-white">
                                <select
                                    id="area"
                                    name="area"
                                    value={editedEmployee.area}
                                    onChange={(e) => handleChange("area",e.target.value)}
                                    className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                >
                                    <option value={"Area 1"}>Area 1</option>
                                    <option value={"Area 2"}>Area 2</option>
                                    <option value={"Area 3"}>Area 3</option>
                                </select>
                                <ChevronDownIcon
                                    aria-hidden="true"
                                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-1">
                            <label htmlFor="contractType" className="block text-sm/6 font-semibold text-neutral-100">
                            Contract Type
                            </label>
                            <div className="mt-2 rounded-md grid shrink-0 grid-cols-1 focus-within:relative outline-1 -outline-offset-1 outline-gray-300 bg-white">
                                <select
                                    id="contractType"
                                    name="contractType"
                                    value={editedEmployee.contractType}
                                    onChange={(e) => handleChange("contractType",e.target.value)}
                                    className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                >
                                    <option value={"Full time"}>Full time</option>
                                    <option value={"Part time"}>Part time</option>
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
                                <label htmlFor="availability" className="block text-sm/6 font-semibold text-neutral-100">
                                Availability
                                </label>
                                <div className="mt-2 rounded-md grid shrink-0 grid-cols-1 focus-within:relative outline-1 -outline-offset-1 outline-gray-300">
                                    <select
                                        multiple
                                        id="availability"
                                        name="availability"
                                        value={editedEmployee.availability}
                                        onChange={(e) => handleChange("availability",e.target.value)}
                                        className="bg-white col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    >
                                        <option value={"07:00-08:20"}>07:00-08:20</option>
                                        <option value={"08:30-09:50"}>08:30-09:50</option>
                                        <option value={"10:00-11:20"}>10:00-11:20</option>
                                        <option value={"11:30-12:50"}>11:30-12:50</option>
                                        <option value={"13:00-14:20"}>13:00-14:20</option>
                                        <option value={"14:30-15:50"}>14:30-15:50</option>
                                        <option value={"16:00-17:20"}>16:00-17:20</option>
                                        <option value={"17:30-18:50"}>17:30-18:50</option>
                                    </select>
                                    <ChevronDownIcon
                                        aria-hidden="true"
                                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                    />
                                </div>
                            </div>
                            <div className="col-span-1">
                                <label htmlFor="CV" className="block text-sm/6 font-medium text-neutral-100">
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
                                <label htmlFor="stage" className="block text-sm/6 font-semibold text-neutral-100">
                                Stage
                                </label>
                                <div className="mt-2 rounded-md grid shrink-0 grid-cols-1 focus-within:relative outline-1 -outline-offset-1 outline-gray-300">
                                    <select
                                        id="stage"
                                        name="stage"
                                        value={editedEmployee.stage}
                                        onChange={(e) => handleChange("stage",e.target.value)}
                                        className="bg-white col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    >
                                        <option value={"Applied"}>Applied</option>
                                        <option value={"Interview"}>Interview</option>
                                        <option value={"Accepted"}>Accepted</option>
                                        <option value={"Rejected"}>Rejected</option>
                                    </select>
                                    <ChevronDownIcon
                                        aria-hidden="true"
                                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                    />
                                </div>
                            </div>
                        
                        <div className="sm:col-span-2">
                            <label htmlFor="comments" className="block text-sm/6 font-semibold text-neutral-100">
                            Comments
                            </label>
                            <div className="mt-2.5">
                                <textarea
                                    id="comments"
                                    name="comments"
                                    rows={4}
                                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-neutral-700 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                    value={editedEmployee.comments}
                                    onChange={(e) => handleChange("comments",e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 grid grid-cols-3">
                        <button
                            onClick={() => {
                                navigate('/employees');
                                onEmployeeClick(null);
                                // handleSave();
                            }}
                            type="submit"
                            className="col-span-1 col-start-1 rounded-md bg-indigo-600 px-3 py-3 text-center text-base font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Save
                        </button>
                        <button
                            onClick={() => {
                                navigate('/employees');
                                onEmployeeClick(null)
                            }}
                            type=""
                            className="col-span-1 col-start-3 flex justify-center rounded-md bg-red-600 px-3 py-3 text-base font-semibold text-white shadow-xs hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EmployeeEdit;