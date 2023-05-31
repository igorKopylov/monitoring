import React, { useEffect, useState } from 'react';
import TextField from '../../components/TextField/TextField';
import styles from './Settings.module.scss';
import Check from '../../assets/Check.svg';
import Button from './../../components/Button/Button';
import { editEmail } from '../../services/AuthService';

const Settings = () => {
    const [email, setEmail] = useState('')
    const [isChecked, setIsChecked] = useState(true)

    const onSubmit = (e) => {
        e.preventDefault()
        editEmail(email)
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }

    return (
        <div className={styles.settings}>
            <form onSubmit={onSubmit} className={styles.settings__content}>
                <TextField
                    value={email}
                    onChange={setEmail}
                    label='Почта'
                />
                <label className={styles['label-checkbox']}>
                    <div className={styles['custom-checkbox']}>
                        {isChecked && <img src={Check} alt='check mark' />}
                    </div>
                    <input
                        onChange={e => setIsChecked(e.target.checked)}
                        type='checkbox'
                    />
                    Включить уведомления
                </label>
                <Button type='submit'>
                    СОХРАНИТЬ
                </Button>
            </form>
        </div>
    )
}

export default Settings