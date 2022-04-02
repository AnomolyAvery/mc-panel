import React from 'react';
import AuthForm from '../elements/auth/AuthForm';
import AuthLayout from '../shared/AuthLayout';

const AuthContainer = () => {
    return (
        <AuthLayout>
            <AuthForm />
        </AuthLayout>
    );
};

export default AuthContainer;
