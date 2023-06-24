import React, { useEffect } from 'react';
import CommentsList, { AddCommentsForm } from '../common/comments';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
    createComment,
    getComments,
    getCommentsLoadingStatus,
    loadCommentsList,
    removeComment
} from '../../store/comments';
import { getCurrentUserId } from '../../store/users';

const Comments = () => {
    const dispatch = useDispatch();
    const { userId } = useParams();
    const currentUserId = useSelector(getCurrentUserId());

    useEffect(() => {
        dispatch(loadCommentsList(userId));
    }, [userId]);

    const comments = useSelector(getComments());
    const isLoading = useSelector(getCommentsLoadingStatus());

    const handleSubmit = (data) => {
        dispatch(createComment({ payload: data, userId, currentUserId }));
    };

    const handleCommentRemove = (id) => {
        dispatch(removeComment(id));
    };

    const sortedComments = _.orderBy(comments, ['created_at'], 'desc');
    return (
        <>
            <div className="card mb-2">
                <div className="card-body">
                    <AddCommentsForm onSubmit={handleSubmit} />
                </div>
            </div>
            {sortedComments.length > 0 && (
                <div className="card mb-3">
                    <div className="card-body">
                        <h2>Comments</h2>
                        <hr />
                        {!isLoading ? (
                            <CommentsList comments={sortedComments} onRemove={handleCommentRemove} />
                        ) : (
                            'Loading...'
                        )}
                    </div>
                </div>
            )}
        </>
    );
};
export default Comments;
