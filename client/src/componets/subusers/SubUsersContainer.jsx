import React from 'react';
import UsersTable from '../elements/subusers/UsersTable';
import AppLayout from '../shared/AppLayout';

const SubUsersContainer = () => {
    return (
        <AppLayout pageTitle={'Sub Users'}>
            <div className="mt-10">
                <UsersTable />
            </div>
        </AppLayout>
    );
};

export default SubUsersContainer;
