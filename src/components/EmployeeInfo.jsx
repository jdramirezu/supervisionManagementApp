import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DocumentArrowDownIcon } from '@heroicons/react/24/solid';
import { useEmployee } from '../contexts/EmployeeContext.jsx';
import DeleteConfirmation from "./DeleteConfirmation.jsx";

const EmployeeInfo = () => {
    const {selectedEmployee, onEmployeeClick, userRole} = useEmployee();
    const [isModalOpen,setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    
    return(
        <>
            <div className="isolate px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-semibold tracking-tight text-balance text-neutral-100 sm:text-5xl">{selectedEmployee.preferredname}</h2>
                    <p className="mt-2 text-lg/8 text-neutral-300">{`Current information about ${selectedEmployee.fullname} also known as ${selectedEmployee.preferredname}.`}</p>
                </div>
                <div className="mx-auto mt-10 max-w-xl sm:mt-20">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="first-name" className="block text-sm/6 font-semibold text-neutral-100">
                                Full name
                            </label>
                            <p className="block w-full rounded-md px-3.5 py-2 text-base text-neutral-100 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            >
                                {selectedEmployee.fullname}
                            </p>
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block text-sm/6 font-semibold text-neutral-100">
                                Preferred name
                            </label>
                            <p className="block w-full rounded-md px-3.5 py-2 text-base text-neutral-100 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            >{selectedEmployee.preferredname}
                            </p>
                        </div>
                        <div className="sm:col-span-1">
                            <label htmlFor="company" className="block text-sm/6 font-semibold text-neutral-100">
                                Email
                            </label>
                            <p className="block w-full rounded-md px-3.5 py-2 text-base text-neutral-100 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            >{selectedEmployee.email}
                            </p>
                        </div>
                        <div className="sm:col-span-1">
                            <label htmlFor="email" className="block text-sm/6 font-semibold text-neutral-100">
                                Employer ID
                            </label>
                            <p className="block w-full rounded-md px-3.5 py-2 text-base text-neutral-100 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            >{selectedEmployee.employerid}
                            </p>
                        </div>
                        <div className="sm:col-span-1">
                            <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-neutral-100">
                                Phone number
                            </label>
                            <p className="block w-full rounded-md px-3.5 py-2 text-base text-neutral-100 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600">
                                {selectedEmployee.phonenumber}
                            </p>
                        </div>
                        <div className="sm:col-span-1">
                            <label htmlFor="email" className="block text-sm/6 font-semibold text-neutral-100">
                                Status
                            </label>
                            <p className="block w-full rounded-md px-3.5 py-2 text-base text-neutral-100 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600">
                                {selectedEmployee.status}
                            </p>
                        </div>
                        <div className="sm:col-span-1">
                            <label htmlFor="email" className="block text-sm/6 font-semibold text-neutral-100">
                                Area
                            </label>
                            <p className="block w-full rounded-md px-3.5 py-2 text-base text-neutral-100 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600">
                                {selectedEmployee.workarea}
                            </p>
                        </div>
                        <div className="sm:col-span-1">
                            <label htmlFor="email" className="block text-sm/6 font-semibold text-neutral-100">
                                Contract Type
                            </label>
                            <p className="block w-full rounded-md px-3.5 py-2 text-base text-neutral-100 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600">
                                {selectedEmployee.contracttype}
                            </p>
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="picture" className="block text-sm/6 font-medium text-neutral-100">
                                Photo
                            </label>
                            <div className="mt-2 flex items-center gap-x-3">
                                <img src={selectedEmployee.picture ? `${import.meta.env.VITE_API_BASE_URL}/${selectedEmployee.picture}` : `https://robohash.org/${selectedEmployee.id}?200x200`} alt="Employee's name" className="size-40 rounded-full bg-white"/>
                            </div>
                        </div>
                        <div className="sm:col-span-1">
                            <label htmlFor="availability" className="block text-sm/6 font-semibold text-neutral-100">
                                Availability
                            </label>
                            <div className="block w-full rounded-md px-3.5 py-2 text-base text-neutral-100 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600">
                                {
                                    selectedEmployee.availability.map((schedule,i) => {
                                        return(
                                            <p key={i} className="">
                                                {schedule}
                                            </p>
                                        );
                                    })
                                }
                            </div>
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="CV" className="block text-sm/6 font-medium text-neutral-100">
                                CV
                            </label>
                            <div className="mt-2 flex items-center gap-x-3">   
                                <DocumentArrowDownIcon aria-hidden="true" className="size-12 text-gray-300" />
                                <a href={`${import.meta.env.VITE_API_BASE_URL}/${selectedEmployee.CV}`} target="_blank" rel="noopener noreferrer" ><label
                                    htmlFor="CV"
                                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 cursor-pointer">
                                        Download
                                </label></a>
                            </div>
                        </div>
                        <div className="sm:col-span-1">
                            <label htmlFor="email" className="block text-sm/6 font-semibold text-neutral-100">
                                Stage
                            </label>
                            <p className="block w-full rounded-md px-3.5 py-2 text-base text-neutral-100 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600">
                                {selectedEmployee.stage}
                            </p>
                        </div>                        
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-sm/6 font-semibold text-neutral-100">
                                Comments
                            </label>
                            <p className="block w-full rounded-md px-3.5 py-2 text-base text-neutral-100 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600">
                                {selectedEmployee.observations}
                            </p>
                        </div>
                    </div>
                    <div className="mt-10 grid grid-cols-5">
                        <button
                            onClick={() => navigate('/edit')}
                            type="button"
                            disabled={userRole !== "Admin"}
                            className={`col-span-1 col-start-1 flex justify-center rounded-md px-3 py-3 text-base font-semibold text-white
                                        shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
                                        ${userRole === "Admin" ? "bg-indigo-600 hover:bg-indigo-700" : "bg-gray-400 cursor-not-allowed"} group/forTooltip`}
                        >
                            Edit
                            {userRole !== "Admin" && (
                                <span className="absolute invisible left-1/2 mb-8 -mt-1 -translate-x-40 rounded-md bg-gray-700 px-3 py-1 text-s text-white group-hover/forTooltip:visible">
                                Access Denied
                            </span>)}
                        </button>
                        <button
                            onClick={() => {
                                setIsModalOpen(true);
                            }}
                            type="button"
                            disabled={userRole !== "Admin"}
                            className={`col-span-1 col-start-3 flex justify-center rounded-md px-3 py-3 text-base font-semibold text-white
                                        shadow-xs  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
                                        ${userRole === "Admin" ? "bg-red-600 hover:bg-red-700" : "bg-gray-400 cursor-not-allowed" } group/forTooltip`}
                        >
                            Delete
                            {userRole !== "Admin" &&(
                                <span className="absolute invisible left-1/2 mb-8 -mt-1 -translate-x-40 rounded-md bg-gray-700 px-3 py-1 text-s text-white group-hover/forTooltip:visible">
                                Access Denied
                            </span>)}
                        </button>
                        <button
                            onClick={() => {
                                navigate('/employees')
                                onEmployeeClick(null)
                            }}
                            type="button"
                            className="col-span-1 col-start-5 rounded-md bg-indigo-600 px-3 py-3 text-center text-base font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Accept
                        </button>
                        <DeleteConfirmation isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onConfirm={() => setIsModalOpen(false)} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default EmployeeInfo;