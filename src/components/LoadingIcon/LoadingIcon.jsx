import React from "react";
import styles from './LoadingIcon.module.css';

const LoadingIcon = ({ }) => {
    return (
        <div className={styles.contianer}>
            <div className={styles.loader}></div>
        </div>
    );
};

export default LoadingIcon;