import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div className='m-8 bg-white rounded-md p-10'>
            <h1 className='text-2xl md:text-3xl font-bold p-4 custom-bg text-white rounded-md text-center'>Chocolate Management System</h1>

            <div className="my-6">
                <Link to='/add-chocolate'>
                    <button className='flex gap-2'>
                       
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Main;