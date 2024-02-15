import React from "react";
import { useAlertContext } from "../../contexts/AlertContext/AlertContext";
import { useLoadingIconContext } from "../../contexts/LoadingIconContext/LoadingIconContext";

const Home = ({ }) => {

    const alertContext = useAlertContext();
    const loadingIconContext = useLoadingIconContext();
        
    return (
        <>
            <button onClick={() => { alertContext({ isOpen: true, text: 'ניסוי' }) }}>ALERT</button>
            <button onClick={() => { loadingIconContext(true) }}>LOADING</button>
        </>
    );
};

export default Home;