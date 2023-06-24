import React from 'react';
import PropTypes from 'prop-types';
import Comment from './comment';
const CommentsList = ({ comments, onRemove }) => {
    return comments.map((comment) => <Comment {...comment} key={comment._id} onRemove={onRemove} />);
};

export default CommentsList;

CommentsList.propTypes = {
    comments: PropTypes.array,
    onRemove: PropTypes.func
};
