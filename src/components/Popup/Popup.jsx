import React, { useEffect, useState } from "react";
import styles from './Popup.module.css';

const Popup = ({ children, MarginTop }) => {

    return (
        <div style={MarginTop ? { alignItems: 'unset', paddingTop: MarginTop } : {}} className={styles.contianer}>
            <div className={styles.body}>
                {children}
            </div>
        </div>
    );
};

export default Popup;