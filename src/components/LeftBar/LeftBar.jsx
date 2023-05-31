import React, { useEffect, useState } from 'react';
import styles from './LeftBar.module.scss';
import { getLefBarItems } from './../../constants';
import { getSecurity, getSensors } from './../../services/SensorService';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { setIsAuth, setLefBarActive } from '../../store/reducer';
import { setSensors } from './../../store/reducer';

const LeftBar = () => {
    const [isAdmin, setIsAdmin] = useState(null)
    const leftBarItems = getLefBarItems(isAdmin)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        getSecurity()
            .then(data => {
                console.log(data)
                setIsAdmin(data.data.authorities.includes('ADMIN'))
            })
            .catch(err => console.log(err))
    }, [])

    const onClickTopItem = (value) => {
        dispatch(setLefBarActive(value))
        navigate('/')
    }

    const onClickBottomItem = (value, pageUrl) => {
        // if click on logout button
        if (value === 'logout') {
            localStorage.removeItem('token')
            dispatch(setIsAuth(false))
            return
        }
        navigate(pageUrl)
    }

    return (
        <div>
            <div className={styles['left-bar']}>
                <div className={styles['left-bar__top']}>
                    {leftBarItems.slice(0, 4).map((item, i) => {
                        return (
                            <div
                                key={i}
                                onClick={() => onClickTopItem(item.value)}
                                className={styles['item']}
                            >
                                <img src={item.svg} alt='icon' />
                                <span>{item.title}</span>
                            </div>
                        )
                    })}
                </div>
                <div className={styles['left-bar__bottom']}>
                    {leftBarItems.slice(4).map((item, i) => {
                        return (
                            <div
                                key={i}
                                onClick={() => onClickBottomItem(item.value, item.pageUrl)}
                                className={styles['item']}
                            >
                                <img src={item.svg} alt='icon' />
                                <span>{item.title}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default LeftBar