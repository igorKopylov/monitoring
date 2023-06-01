import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSensors } from './../../services/SensorService';
import { setSensors } from './../../store/reducer';
import styles from './Conrollers.module.scss';
import darkGear from '../../assets/darkGear.svg';
import AreaChart from './../Chart/AreaChart';

const Controllers = () => {
    const leftBarActive = useSelector(state => state.leftBarActive)
    const dispatch = useDispatch()

    useEffect(() => {
        // getSensors(leftBarActive)
        //     .then(data => {
        //         console.log('sensors', data)
        //         dispatch(setSensors(data.data))
        //     })
        //     .catch(err => console.log(err))
    }, [leftBarActive])

    return (
        <div className={styles.controllers}>
            <div className={styles.controllers__image}>
                <img src={darkGear} alt='settings' />
            </div>
            <div className={styles['chart-container']}>
                <div className={styles['chart-container__top']}>
                    <div className={styles['chart-container__title']}>
                        <h2>Датчик 1</h2>
                        <p>(данные за последний час)</p>
                    </div>
                    <div className={styles['chart-container__tooltips']}>
                        <div className={styles['chart-container__tooltip']}>
                            <hr className={styles['red-line']} />
                            Ограничения
                        </div>
                        <div className={styles['chart-container__tooltip']}>
                            <hr className={styles['black-line']} />
                            Значения
                        </div>
                    </div>
                </div>
                <div className={styles['chart']}>
                    <AreaChart />
                </div>
            </div>
        </div>
    )
}

export default Controllers