import React from 'react';
import { Link } from 'react-router-dom';

const EmptyBookmarksState = ({message, address, label}) => {
    return (
        <div className="min-h-[calc(100vh-290px)] border-2 flex flex-col gap-8 justify-center items-center">
            <h1 className="text-4xl font-bold text-gray-600">{message}</h1>
            <Link
              to={address}
              className='relative inline-block px-4 py-2 font-medium group'
            >
              <span className='absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
              <span className='absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary'></span>
              <span className='relative text-gray-800 text-xl font-extrabold group-hover:text-white'>
                {label}
              </span>
            </Link>
        </div>
    );
};

export default EmptyBookmarksState;