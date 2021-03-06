import React from 'react';

const UserCard = () => {
    return (
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="sm:flex sm:items-center px-6 lg:py-4 py-2">
                <img
                    className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24 rounded-full"
                    src="https://randomuser.me/api/portraits/women/14.jpg"
                    alt="Woman's Face"
                />
                <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
                    <p className="text-xl leading-tight">Erin Lindford</p>
                    <p className="text-sm leading-tight text-gray-600">Customer Support Specialst</p>
                    <div className="mt-4">
                        <button
                            type="button"
                            className="focus:outline-none active:outline-none text-purple-500 hover:text-white hover:bg-purple-500 border border-purple-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal"
                        >
                            Message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
