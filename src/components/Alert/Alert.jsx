import React from "react";
import styles from './Alert.module.css';
import Popup from "../Popup/Popup";

const Alert = ({ text, onClose, onOk }) => {
    return (
        <Popup MarginTop={'150px'}>
            <div className={styles.contianer}>
                <div className={styles.top}>
                    <div onClick={onClose} className={styles.close_button}>&#10060;</div>
                </div>
                <div className={styles.body}>
                    <div>
                        {text}
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={[styles.ok_button, styles.button].join(' ')}>אישור</div>
                </div>
            </div>
        </Popup>
    );
};

export default Alert;