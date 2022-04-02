import React from 'react';
import ServerList from '../elements/servers/ServerList';
import AppLayout from '../shared/AppLayout';

const DashboardContainer = () => {
    return (
        <AppLayout>
            <div className="mt-10">
                <ServerList />
            </div>
        </AppLayout>
    );
};

export default DashboardContainer;
