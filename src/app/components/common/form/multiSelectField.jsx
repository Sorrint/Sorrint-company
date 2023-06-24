import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const MultiSelectField = ({ options, onChange, name, label, defaultValue }) => {
    const optionsArray = !Array.isArray(options) && typeof options === 'object' ? Object.values(options) : options;
    const handleChange = (value) => {
        onChange({ name, value });
    };
    return (
        <div className="mb-4">
            <label className="form-label">{label}</label>
            <Select
                isMulti
                closeMenuOnSelect={false}
                defaultValue={defaultValue}
                options={optionsArray}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={handleChange}
                name={name}
            />
        </div>
    );
};

MultiSelectField.propTypes = {
    name: PropTypes.string,
    options: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    label: PropTypes.string,
    onChange: PropTypes.func,
    defaultValue: PropTypes.array
};

export default MultiSelectField;
