import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const AuthForm = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    const onFormSubmit = async (data) => {
        const { accountIdent, password } = data;

        let isEmail = false;

        if (accountIdent.includes('@')) isEmail = true;
    };

    return (
        <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
            <div>
                <label
                    htmlFor="accountIdent"
                    className="block text-sm font-medium text-gray-700"
                >
                    Email or Username
                </label>
                <div className="mt-1">
                    <input
                        id="accountIdent"
                        name="accountIdent"
                        type="text"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        {...register('accountIdent', {
                            required: true,
                            minLength: 3,
                        })}
                    />
                </div>
                <div className="mt-1">
                    {errors.accountIdent && (
                        <p className="text-sm text-red-500 font-bold">
                            {errors?.accountIdent?.type === 'required' &&
                                'Username/Email is required'}
                            {errors?.accountIdent?.type === 'minLength' &&
                                'Username/Email must be at least 3 characters long'}
                        </p>
                    )}
                </div>
            </div>

            <div>
                <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                >
                    Password
                </label>
                <div className="mt-1">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        {...register('password', {
                            required: true,
                            minLength: 6,
                        })}
                    />
                </div>
                <div className="mt-1">
                    {errors.password && (
                        <p className="text-sm text-red-500 font-bold">
                            {errors.password.type === 'required' && (
                                <span>Password is required</span>
                            )}
                            {errors.password.type === 'minLength' && (
                                <span>
                                    Password must be at least 6 characters
                                </span>
                            )}
                        </p>
                    )}
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="text-sm">
                    <Link
                        to={'/auth/forgot-password'}
                        className="font-medium text-green-600 hover:text-green-500"
                    >
                        Forgot your password?
                    </Link>
                </div>
            </div>

            <div>
                <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                    Sign in
                </button>
            </div>
        </form>
    );
};

export default AuthForm;
