import React from 'react';
import PropTypes from 'prop-types';
import UserCard from '../../ui/userCard';
import QualitiesCard from '../../ui/qualitiesCard';
import MeetingsCard from '../../ui/meetingsCard';
import Comments from '../../ui/comments';
import { CommentsProvider } from '../../../hooks/useComments';
import { useSelector } from 'react-redux';
import { getUserById } from '../../../store/users';

const UserPage = ({ id }) => {
    const user = useSelector(getUserById(id));

    if (user) {
        return (
            <>
                <div className="container">
                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <UserCard user={user} />
                            <QualitiesCard qualities={user.qualities} />
                            <MeetingsCard completedMeetings={user.completedMeetings} />
                        </div>
                        <div className="col-md-8">
                            <CommentsProvider>
                                <Comments />
                            </CommentsProvider>
                        </div>
                    </div>
                </div>
            </>
        );
    } else {
        return <h1>Loading</h1>;
    }
};
UserPage.propTypes = {
    id: PropTypes.string.isRequired
};

export default UserPage;
