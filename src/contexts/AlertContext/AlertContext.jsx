import React, { createContext, useContext, useState } from 'react';
import Alert from '../../components/Alert/Alert';

const AlertContext = createContext();

const AlertContextProvider = ({ children }) => {

    const [alert, setAlert] = useState({ isOpen: false, text: null });

    const closeAlert = () => {
        setAlert({ isOpen: false, text: null });
    }

    return (
        <AlertContext.Provider value={setAlert}>
            {alert.isOpen && <Alert text={alert.text} onClose={closeAlert} onOk={closeAlert} />}
            {children}
        </AlertContext.Provider>
    );
}

const useAlertContext = () => useContext(AlertContext);

export { AlertContextProvider, useAlertContext };