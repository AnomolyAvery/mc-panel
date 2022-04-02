import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AccountContainer from './componets/account/AccountContainer';
import AuthContainer from './componets/auth/AuthContainer';
import DashboardContainer from './componets/dashboard/DashboardContainer';
import ServerContainer from './componets/server/ServerContainer';
import SubUsersContainer from './componets/subusers/SubUsersContainer';

function App() {
    const [count, setCount] = useState(0);

    return (
        <Routes>
            <Route path="/" element={<DashboardContainer />} />
            <Route path="/subusers" element={<SubUsersContainer />} />
            <Route path="/account" element={<AccountContainer />} />
            <Route path="/auth" element={<AuthContainer />} />
            <Route path="/servers/:id" element={<ServerContainer />} />
        </Routes>
    );
}

export default App;
