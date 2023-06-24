import React, { useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import qualityService from '../services/quality.service';
import PropTypes from 'prop-types';

const QualitiesContext = React.createContext();

export const useQualities = () => {
    return useContext(QualitiesContext);
};

export const QualitiesProvider = ({ children }) => {
    const [qualities, setQualities] = useState();
    const [isLoading, setLodaing] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getQualities = async () => {
            try {
                const { content } = await qualityService.fetchAll();
                setQualities(content);
                setLodaing(false);
            } catch (error) {
                errorCatcher(error);
            }
        };
        getQualities();
    }, []);
    const getQuality = (id) => {
        return qualities.find((q) => q._id === id);
    };
    useEffect(() => {
        if (error !== null) {
            toast(error);
            setError(null);
        }
    }, [error]);

    function errorCatcher(error) {
        const { message } = error.response.data;
        setError(message);
    }
    return (
        <QualitiesContext.Provider value={{ qualities, getQuality }}>
            {!isLoading ? children : 'Loading'}
        </QualitiesContext.Provider>
    );
};

QualitiesProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
