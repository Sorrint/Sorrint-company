import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import UsersListPage from '../components/page/usersListPage';
import UserPage from '../components/page/userPage';
import EditUserPage from '../components/page/editUserPage/editUserPage';
import UserProvider from '../hooks/useUsers';
import UsersLoader from '../components/ui/hoc/usersLoader';
import { useSelector } from 'react-redux';
import { getCurrentUserId } from '../store/users';

const Users = () => {
    const { userId, userEdit } = useParams();
    const currentUserId = useSelector(getCurrentUserId());

    const editPage = () => {
        if (userId !== currentUserId) {
            return <Redirect to={`/users/${currentUserId}/edit`} />;
        }
        return <EditUserPage />;
    };

    return (
        <>
            <UsersLoader>
                <UserProvider>
                    {userId ? (
                        userEdit && userEdit === 'edit' ? (
                            editPage()
                        ) : (
                            <UserPage id={userId} />
                        )
                    ) : (
                        <UsersListPage />
                    )}
                </UserProvider>
            </UsersLoader>
        </>
    );
};

export default Users;
