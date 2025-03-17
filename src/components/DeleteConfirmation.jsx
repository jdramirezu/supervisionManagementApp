import React from "react";
import { useNavigate } from "react-router-dom";
import { useEmployee } from "../contexts/EmployeeContext.jsx";

const DeleteConfirmation = ({isOpen, onClose, onConfirm}) =>{
    const { selectedEmployee, onEmployeeClick, deleteEmployee, userRole } = useEmployee();
    const navigate = useNavigate();

    if (!isOpen) return null;

    return (
            <>
                <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center min-h-screen">
                    <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8 sm:mx-auto sm:w-full sm:max-w-md rounded-xl bg-slate-600">
                        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-neutral-100">
                                {`DELETE ALL INFO FOR ${selectedEmployee.fullname}?`}
                            </h2>
                            <div className="mt-10">
                                <button
                                    type="button"
                                    onClick={() => {
                                        deleteEmployee(selectedEmployee);
                                        onEmployeeClick(null);
                                        navigate('/employees');
                                        onConfirm();
                                    }}
                                    className="flex w-full justify-center rounded-md bg-red-600 px-3 py-3 text-base font-semibold text-white shadow-xs hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    DELETE
                                </button><button
                                    type="button"
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