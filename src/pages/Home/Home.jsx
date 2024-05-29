import React from "react";
import { useAlertContext } from "../../contexts/AlertContext/AlertContext";
import { useLoadingIconContext } from "../../contexts/LoadingIconContext/LoadingIconContext";
import config from "../../../config";

const Home = ({ }) => {

    const alertContext = useAlertContext();
    const loadingIconContext = useLoadingIconContext();
        
    return (
        <>
            <button onClick={() => { alertContext({ isOpen: true, text: JSON.stringify(config) }) }}>ALERT</button>
            <button onClick={() => { loadingIconContext(true) }}>LOADING</button>
        </>
    );
};

export default Home;
