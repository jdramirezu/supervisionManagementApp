import React from 'react';
import { useEmployee } from '../contexts/EmployeeContext';

const Card = ({ employee }) =>{
    const {onEmployeeClick} = useEmployee();

    return (
        <>
            <div className="transition delay-150 duration-300 ease-in-out hover:scale-110 cursor-pointer"
                onClick={ () => {
                    onEmployeeClick(employee);
                }
                }>
                <div className="grid justify-items-center bg-slate-600 rounded-xl py-12 lg:px-8 sm:mx-auto sm:w-full sm:max-w-md">
                    {
                        employee.employerid ?
                            <img src={`https://robohash.org/${employee.employerid}?200x200`} alt="Employee's name" className="size-40 rounded-full bg-white"/>
                            :
                            <img src={`https://robohash.org/${employee.id}?200x200`} alt="Employee's name" className="size-40 rounded-full bg-white"/>
                    }
                    <div className='text-neutral-100 grid grid-cols-4 grid-rows-3 px-auto mt-6'>
                        <h2 className='col-span-4 col-start-1 underline decoration-4 text-2xl text-center'>{employee.fullname}</h2>
                        <p className='italic proportional-nums col-span-4 col-start-1 font-light text-center'>{employee.employerid}</p>
                        <p className='col-span-1 text-center'>{employee.workarea}</p>
                        <p className='col-span-2 text-center italic'>{employee.status}</p>
                        <p className='col-span-1 col-end-5 text-right'>{employee.contracttype}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;