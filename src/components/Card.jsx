import React from 'react';

const Card = ({ name, id, area, status, contract, employeeID }) =>{
    return (
        <>
            <div className="">
                <div className="grid justify-items-center bg-slate-600 rounded-xl py-12 lg:px-8 sm:mx-auto sm:w-full sm:max-w-md">
                    {
                        employeeID ==="N/A" ?
                            <img src={`https://robohash.org/${id}?200x200`} alt="Employee's name" className="size-40 rounded-full bg-white"/> :
                            <img src={`https://robohash.org/${employeeID}?200x200`} alt="Employee's name" className="size-40 rounded-full bg-white"/>
                    }
                    <div className='text-neutral-100 grid grid-cols-4 grid-rows-3 px-auto mt-6'>
                        <h2 className='col-span-4 col-start-1 underline decoration-4 text-2xl text-center'>{name}</h2>
                        <p className='italic proportional-nums col-span-4 col-start-1 font-light text-center'>{employeeID}</p>
                        <p className='col-span-1 text-center'>{area}</p>
                        <p className='col-span-2 text-center italic'>{status}</p>
                        <p className='col-span-1 col-end-5 text-right'>{contract}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;