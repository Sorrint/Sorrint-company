import React from 'react';
import PropTypes from 'prop-types';

const Bookmark = ({ status, ...rest }) => {
    const renderIcon = (status) => {
        return status ? 'bi bi-bookmark-fill' : 'bi bi-bookmark sm';
    };

    return (
        <>
            <button className="btn btn-outline-secondary" {...rest}>
                <i className={renderIcon(status)}></i>
            </button>
        </>
    );
};
Bookmark.propTypes = {
    status: PropTypes.bool
};

export default Bookmark;
