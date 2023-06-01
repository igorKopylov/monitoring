import React, { useEffect, useState } from 'react';
import styles from './LeftBar.module.scss';
import { getLefBarItems } from './../../constants';
import { getSecurity, getSensors } from './../../services/SensorService';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveSensor, setIsAuth, setLefBarActive, setSensors } from '../../store/reducer';
import ArrowRight from '../../assets/ArrowRight.svg';

const LeftBar = () => {
    const [isAdmin, setIsAdmin] = useState(null)
    const leftBarItems = getLefBarItems(isAdmin);
    const { sensors, leftBarActive, sensorId } = useSelector(state => state)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        getSecurity()
            .then(data => {
                console.log(data)
                setIsAdmin(data.data.authorities.includes('ADMIN'))
            })
            .catch(err => console.log(err))
        setActiveSensor(1)
    }, [])
    console.log(setActiveSensor(1))
    console.log(leftBarItems)
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
    console.log('sensorId', sensorId)
    return (
        <div>
            <div className={styles['left-bar']}>
                <div className={styles['left-bar__top']}>
                    {leftBarItems.slice(0, 4).map((item, i) => {
                        return (
                            <>
                                <div
                                    key={i}
                                    onClick={() => onClickTopItem(item.value)}
                                    className={styles['item']}
                                >
                                    <span>{item.title}</span>
                                    {leftBarActive === item.value && <img
                                        src={ArrowRight}
                                        alt='arrow down'
                                        style={{ transform: 'rotate(90deg)' }}
                                    />}
                                </div>
                                {leftBarActive === item.value && sensors.map((obj, i) => {
                                    console.log('i', i)
                                    return (
                                        <div className={styles['sensors']}>
                                            <div className={styles.sensors__item} onClick={() => setActiveSensor(i)}>
                                                <h4>{obj.name}</h4>
                                                {sensorId === i && <img width={12} height={12} src={ArrowRight} alt='arrow right' />}
                                            </div>
                                        </div>
                                    )
                                })}
                            </>
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