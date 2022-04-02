import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppLayout from '../shared/AppLayout';
import ServerConsole from './ServerConsole';

const ServerContainer = () => {
    return (
        <AppLayout>
            <Routes>
                <Route path="/" element={<ServerConsole />} />
            </Routes>
        </AppLayout>
    );
};

export default ServerContainer;
