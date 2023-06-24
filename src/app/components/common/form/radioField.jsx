import React from 'react';
import PropTypes from 'prop-types';

const RadioField = ({ options, name, label, onChange, value }) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    return (
        <div className="mb-4">
            <label className="form-label">{label}</label>
            <div>
                {options.map((option) => (
                    <div key={option.name + ' ' + option.value} className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name={name}
                            id={option.name + ' ' + option.value}
                            checked={option.value === value}
                            value={option.value}
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor={option.name + ' ' + option.value}>
                            {option.name}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

RadioField.propTypes = {
    options: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    name: PropTypes.string
};

export default RadioField;
