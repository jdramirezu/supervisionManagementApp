import React from "react";
import { useNavigate } from "react-router-dom";
import { useEmployee } from "../contexts/EmployeeContext.jsx";

const DeleteConfirmation = ({isOpen, onClose, onConfirm}) =>{
    const { selectedEmployee, onEmployeeClick } = useEmployee();
    const navigate = useNavigate();

    if (!isOpen) return null;

    return (
            <>
                <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center min-h-screen">
                    <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8 sm:mx-auto sm:w-full sm:max-w-md rounded-xl bg-slate-600">
                        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-neutral-100">
                                {`DELETE ALL INFO FOR ${selectedEmployee.fullName}?`}
                            </h2>
                            <label htmlFor="email" className="block text-base font-medium text-neutral-100 mt-5">Email</label>
                            <div className="mt-2">
                                <input 
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-neutral-100 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"    
                                >
                                </input>
                            </div>
                        
                            <label htmlFor="password" className="block text-base font-medium text-neutral-100 mt-10">Password</label>
                            <div className="mt-2">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    required
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-neutral-100 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                >
                                </input>
                            </div>
                            <div className="mt-10">
                                <button
                                    type="submit"
                                    onClick={() => {
                                        navigate('/employees');
                                        onEmployeeClick(null);
                                        onConfirm();
                                    }}
                                    className="flex w-full justify-center rounded-md bg-red-600 px-3 py-3 text-base font-semibold text-white shadow-xs hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    DELETE
                                </button><button
                                    type="submit"
                                    onClick={() => {
                                        onClose();
                                    }}
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-3 text-base font-semibold text-white shadow-xs hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
}

export default DeleteConfirmation;