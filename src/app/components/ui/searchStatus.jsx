import React from 'react';
import PropTypes from 'prop-types';

const SearchStatus = ({ length }) => {
    const renderPhrase = (number) => {
        if (number % 100 >= 11 && number % 100 <= 20) {
            return `${number} человек тусанет с тобой сегодня`;
        } else {
            const lastDigit = number.toString().split('').pop();
            switch (lastDigit) {
                case '1':
                    return `${number} человек тусанет с тобой сегодня`;
                case '2':
                case '3':
                case '4':
                    return `${number} человека тусанут с тобой сегодня`;
                default:
                    return `${number} человек тусанут с тобой сегодня`;
            }
        }
    };

    return (
        <>
            <h2>
                {length === 0 ? (
                    <span className="badge bg-danger">Никто с тобой не тусанет</span>
                ) : (
                    <span className="badge bg-primary">{renderPhrase(length)}</span>
                )}
            </h2>
        </>
    );
};

SearchStatus.propTypes = {
    length: PropTypes.number.isRequired
};
export default SearchStatus;
