import React from 'react';
import PropTypes from 'prop-types';

const TableHeader = ({ onSort, selectedSort, columns }) => {
    const handleSort = (item) => {
        if (selectedSort.path === item) {
            onSort((selectedSort) => ({ ...selectedSort, order: selectedSort.order === 'asc' ? 'desc' : 'asc' }));
        } else {
            onSort({ path: item, order: 'asc' });
        }
    };
    const renderArrow = (selectedSort, column) => {
        if (selectedSort.path === columns[column].path) {
            return selectedSort.order === 'asc' ? (
                <i className="bi bi-caret-up-fill"></i>
            ) : (
                <i className="bi bi-caret-down-fill"> </i>
            );
        }
    };
    return (
        <thead>
            <tr>
                {Object.keys(columns).map((column) => (
                    <th
                        key={column}
                        onClick={columns[column].path ? () => handleSort(columns[column].path) : undefined}
                        {...{ role: columns[column].path && 'button' }}
                        scope="col"
                    >
                        {columns[column].name} {renderArrow(selectedSort, column)}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

TableHeader.propTypes = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired
};

export default TableHeader;
