import React, { useEffect, useState } from 'react';
import svg from '../../assets/image.svg';
import styles from './Login.module.scss';
import { logIn } from './../../services/AuthService';
import TextField from '../../components/TextField/TextField';
import { setIsAuth } from './../../store/reducer';
import { useDispatch } from 'react-redux';
import Button from './../../components/Button/Button';

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isError, setIsError] = useState(false)
    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()
        logIn(username, password)
            .then(data => {
                localStorage.setItem('token', data.data)
                dispatch(setIsAuth(true))
            })
            .catch(() => setIsError(true))
    }

    return (
        <div className={styles['log-in']}>
            <form onSubmit={onSubmit} className={styles['log-in__form']}>
                <TextField
                    placeholder='Введите логин...'
                    className={styles['log-in__text-field']}
                    label='Логин'
                    value={username}
                    onChange={setUsername}
                />
                <TextField
                    placeholder='Введите пароль...'
                    label='Пароль'
                    type='password'
                    value={password}
                    onChange={setPassword}
                />
                <Button type='submit'>
                    ВОЙТИ
                </Button>
                {isError && <span className={styles['log-in__err']}>
                    Введите корректные данные
                </span>}
            </form>
            <img src={svg} alt='picture' />
        </div>
    )
}

export default Login