import React, { useEffect, useState, useContext } from 'react';
import professionsService from '../services/profession.service';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

const ProfessionContext = React.createContext();

export const useProfessions = () => {
    return useContext(ProfessionContext);
};

export const ProfessionProvider = ({ children }) => {
    const [professions, setProfessions] = useState();
    const [isLoading, setLodaing] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getProfessionsList();
    }, []);

    useEffect(() => {
        if (error !== null) {
            toast(error);
            setError(null);
        }
    }, [error]);

    function getProfession(id) {
        return professions.find((p) => p._id === id);
    }

    async function getProfessionsList() {
        try {
            const { content } = await professionsService.get();
            setProfessions(content);
            setLodaing(false);
        } catch (error) {
            errorCathcer(error);
        }
    }
    function errorCathcer(error) {
        const { message } = error.response.data;
        setError(message);
    }

    return (
        <ProfessionContext.Provider value={{ isLoading, professions, getProfession }}>
            {children}
        </ProfessionContext.Provider>
    );
};

ProfessionProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
