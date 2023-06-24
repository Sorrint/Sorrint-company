import React from 'react';
import PropTypes from 'prop-types';

const TextAreaField = ({ label, name, value, onChange, error, placeholder, rows }) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    const getInputClasses = () => {
        return 'form-control' + (error ? ' is-invalid' : '');
    };
    return (
        <div className="mb-4">
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <textarea
                className={getInputClasses()}
                id={name}
                name={name}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                rows={rows}
            />
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

export default TextAreaField;

TextAreaField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string,
    placeholder: PropTypes.string,
    rows: PropTypes.number
};
