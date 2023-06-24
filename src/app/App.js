import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import NavBar from './components/ui/navBar';
import Main from './layouts/main';
import Login from './layouts/login';
import Users from './layouts/users';
import { ToastContainer } from 'react-toastify';
import AuthProvider from './hooks/useAuth';
import ProtectedRoute from './components/common/protectedRoute';
import LogOut from './layouts/logOut';
import AppLoader from './components/ui/hoc/appLoader';

function App() {
    return (
        <>
            <AppLoader>
                <AuthProvider>
                    <NavBar />
                    <Switch>
                        <ProtectedRoute
                            path="/fast-company/users/:userId?/:userEdit?"
                            component={Users}
                        ></ProtectedRoute>
                        <Route path="/fast-company/" exact component={Main}></Route>
                        <Route path="/fast-company/login/:type?" component={Login}></Route>
                        <Route path="/fast-company/logout" component={LogOut}></Route>
                        <Redirect to="/fast-company/" />
                    </Switch>
                </AuthProvider>
            </AppLoader>
            <ToastContainer />
        </>
    );
}

export default App;
