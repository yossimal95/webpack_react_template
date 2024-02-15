import React, { createContext, useContext, useState } from 'react';
import LoadingIcon from '../../components/LoadingIcon/LoadingIcon';

const LoadingIconContext = createContext();

const LoadingIconContextProvider = ({ children }) => {

    const [loading, setLoading] = useState(false);

    return (
        <LoadingIconContext.Provider value={setLoading}>
            {loading && <LoadingIcon />}
            {children}
        </LoadingIconContext.Provider>
    );
}

const useLoadingIconContext = () => useContext(LoadingIconContext);

export { LoadingIconContextProvider, useLoadingIconContext };