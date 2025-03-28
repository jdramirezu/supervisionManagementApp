import React from "react";
import { useNavigate } from "react-router-dom";
import { useEmployee } from '../contexts/EmployeeContext.jsx';

const Login = () =>{
    const { onEmailChange, onPasswordChange, onLoginSubmit, errorMessage } = useEmployee();
    const navigate = useNavigate();
    return (
            <>
                <div className="flex items-center justify-center min-h-screen">
                    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 sm:mx-auto sm:w-full sm:max-w-md rounded-xl bg-slate-600">
                        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                            <img
                                alt="icon"
                                src="../../icons8-boss-64.png"
                                className="mx-auto h-20 w-auto"
                            />
                            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-neutral-100">
                                SUPERVISOR ACCESS
                            </h2>
                            <label htmlFor="email" className="block text-base font-medium text-neutral-100 mt-5">Email</label>
                            <div className="mt-2">
                                <input 
                                    type="email"
                                    id="email"
                                    name="email"
                                    onChange={onEmailChange}
                                    required
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-neutral-700 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"    
                                >
                                </input>
                            </div>
                        
                            <label htmlFor="password" className="block text-base font-medium text-neutral-100 mt-10">Password</label>
                            <div className="mt-2">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    onChange={onPasswordChange}
                                    required
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-neutral-700 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                >
                                </input>
                            </div>
                            <div className="mt-10">
                                <button
                                    type="submit"
                                    onClick={() => {
                                        onLoginSubmit(navigate);
                                    }}
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-3 text-base font-semibold text-white shadow-xs hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Log in
                                </button>
                                <p className="text-red-500">{errorMessage}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
}

export default Login;