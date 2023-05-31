import React from 'react';
import styles from './TextField.module.scss';

const TextField = ({ label, value, onChange, ...restProps }) => {
    return (
        <div className={styles['text-field-wrapper']}>
            <label className={styles['text-label']}>
                <span>{label}</span>
                <input
                    value={value}
                    onChange={e => onChange(e.target.value)}
                    {...restProps}
                />
            </label>
        </div>
    )
}

export default TextField