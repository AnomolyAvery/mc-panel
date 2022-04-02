import React from 'react';

const AuthLayout = ({ children }) => {
    return (
        <>
            <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <img
                        className="mx-auto h-20 w-auto"
                        src={
                            'https://i.pinimg.com/originals/d7/c8/22/d7c822375e53d05e290d862402b8f806.png'
                        }
                        alt="Workflow"
                    />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Login to your account
                    </h2>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AuthLayout;
