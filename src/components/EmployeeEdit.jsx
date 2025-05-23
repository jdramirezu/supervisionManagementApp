import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { UserCircleIcon,DocumentArrowUpIcon } from '@heroicons/react/24/solid';
import { useEmployee } from "../contexts/EmployeeContext.jsx";

const EmployeeEdit = () =>{
    const { selectedEmployee, updateEmployee, onEmployeeClick, userRole } = useEmployee();
    const [editedEmployee , setEditedEmployee] = useState(selectedEmployee);
    let newPic = false;
    let newCV = false;
    const navigate = useNavigate();

    if(userRole !== "Admin"){
        navigate('/employees');
        setTimeout( () => onEmployeeClick(null), 1); 
    }

    const handleChange = (event) =>{
        const { name, value, multiple, selectedOptions} = event.target;

        if(multiple){
            const values = Array.from(selectedOptions, option => option.value);
            setEditedEmployee({
                ...editedEmployee,[name]:values
            });
        } else if(name === "picture"){
            setEditedEmployee({
                ...editedEmployee, [name]: event.target.files[0]
            });
            newPic = true;
        }else if (name === "CV"){
            setEditedEmployee({
                ...editedEmployee, [name]: event.target.files[0]
            });
            newCV = true;
        } else{
            setEditedEmployee({
                ...editedEmployee,[name]:value})
        }
    }

    const handleSave = () =>{
        if (!newPic){
            setEditedEmployee({
                ...editedEmployee, ["picture"]: ""
            });
        }
        if (!newCV){
            setEditedEmployee({
                ...editedEmployee, ["CV"]: ""
            });
        }

        updateEmployee(editedEmployee);
    }


    return(
        <>
            <div className="isolate px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-semibold tracking-tight text-balance text-neutral-100 sm:text-5xl">{selectedEmployee.preferredname}</h2>
                    <p className="mt-2 text-lg/8 text-neutral-300">Enter the info for the possible new staff member.</p>
                </div>
                <div className="mx-auto mt-10 max-w-xl sm:mt-20">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="fullname" className="block text-sm/6 font-semibold text-neutral-100">
                            Full name
                            </label>
                            <div className="mt-2.5">
                            <input
                                id="fullname"
                                name="fullname"
                                value={editedEmployee.fullname}
                                onChange={handleChange}
                                type="text"
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-neutral-700 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="preferredname" className="block text-sm/6 font-semibold text-neutral-100">
                            Preferred name
                            </label>
                            <div className="mt-2.5">
                            <input
                                id="preferredname"
                                name="preferredname"
                                value={editedEmployee.preferredname}
                                onChange={handleChange}
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
                                onChange={handleChange}
                                type="email"
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-neutral-700 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            />
                            </div>
                        </div>
                        <div className="sm:col-span-1">
                            <label htmlFor="employerid" className="block text-sm/6 font-semibold text-neutral-100">
                            Employee ID
                            </label>
                            <div className="mt-2.5">
                            <input
                                id="employerid"
                                name="employerid"
                                type="text"
                                value={editedEmployee.employerid}
                                onChange={handleChange}
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-neutral-700 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            />
                            </div>
                        </div>
                        <div className="sm:col-span-1">
                            <label htmlFor="phonenumber" className="block text-sm/6 font-semibold text-neutral-100">
                            Phone number
                            </label>
                            <div className="mt-2.5">
                                <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                                    <input
                                    id="phonenumber"
                                    name="phonenumber"
                                    type="text"
                                    value={editedEmployee.phonenumber}
                                    onChange={handleChange}
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
                                    onChange={handleChange}
                                    className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                >
                                    <option value={"Active"}>Active</option>
                                    <option value={"Inactive"}>Inactive</option>
                                </select>
                                <ChevronDownIcon
                                    aria-hidden="true"
                                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-1">
                            <label htmlFor="workarea" className="block text-sm/6 font-semibold text-neutral-100">
                            Area
                            </label>
                            <div className="mt-2 rounded-md grid shrink-0 grid-cols-1 focus-within:relative outline-1 -outline-offset-1 outline-gray-300 bg-white">
                                <select
                                    id="workarea"
                                    name="workarea"
                                    value={editedEmployee.workarea}
                                    onChange={handleChange}
                                    className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                >
                                    <option value={"Area1"}>Area 1</option>
                                    <option value={"Area2"}>Area 2</option>
                                    <option value={"Area3"}>Area 3</option>
                                </select>
                                <ChevronDownIcon
                                    aria-hidden="true"
                                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-1">
                            <label htmlFor="contracttype" className="block text-sm/6 font-semibold text-neutral-100">
                            Contract Type
                            </label>
                            <div className="mt-2 rounded-md grid shrink-0 grid-cols-1 focus-within:relative outline-1 -outline-offset-1 outline-gray-300 bg-white">
                                <select
                                    id="contracttype"
                                    name="contracttype"
                                    value={editedEmployee.contracttype}
                                    onChange={handleChange}
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
                                <label htmlFor="picture" className="block text-sm/6 font-medium text-neutral-100">
                                    Photo
                                </label>
                                <div className="mt-2 flex items-center gap-x-3">
                                    <UserCircleIcon aria-hidden="true" className="size-12 text-gray-300" />
                                    <label
                                    htmlFor="picture"
                                        className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 cursor-pointer"
                                    >
                                        Upload
                                    </label>
                                    <input
                                        type='file'
                                        accept="image/*"
                                        id='picture'
                                        name='picture'
                                        value={""}
                                        hidden={true}
                                        onChange={handleChange} />
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
                                        value={editedEmployee.availability || []}
                                        onChange={handleChange}
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
                                    <label
                                        htmlFor="CV"
                                        className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 cursor-pointer"
                                    >
                                        Upload
                                    </label>
                                    <input
                                        type='file'
                                        accept='application/pdf'
                                        id='CV'
                                        name='CV'
                                        value={""}
                                        hidden={true}
                                        onChange={handleChange} />
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
                                        onChange={handleChange}
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
                            <label htmlFor="observations" className="block text-sm/6 font-semibold text-neutral-100">
                            Comments
                            </label>
                            <div className="mt-2.5">
                                <textarea
                                    id="observations"
                                    name="observations"
                                    rows={4}
                                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-neutral-700 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                    value={editedEmployee.observations}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 grid grid-cols-3">
                        <button
                            onClick={() => {
                                handleSave();
                                onEmployeeClick(null);
                                navigate('/employees');
                            }}
                            type="submit"
                            className="col-span-1 col-start-1 rounded-md bg-indigo-600 px-3 py-3 text-center text-base font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Save
                        </button>
                        <button
                            onClick={() => {
                                navigate('/employees');
                                setTimeout( () => onEmployeeClick(null), 1); 
                            }}
                            type="button"
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