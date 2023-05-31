import React, { useEffect, useState } from 'react';
import styles from './SensorsBar.module.scss';
import { addSensor } from './../../services/SensorService';
import { getController } from '../../services/ConrollersService';
import { setActiveSensor, setSensors } from './../../store/reducer';
import { useSelector, useDispatch } from 'react-redux';

const SensorsBar = () => {
    const [controller, setController] = useState()
    const { leftBarActive, sensors } = useSelector(state => state)
    const dispatch = useDispatch()

    const addSensorHandler = () => {
        const body = {
            name: "Датчик 1",
            min_temperature: 0,
            max_temperature: 0
        }

        addSensor(leftBarActive, body)
            .then(() => dispatch(setSensors([...sensors, body])))
            .catch(err => console.log(err))
    }

    console.log('navigator', navigator.onLine)

    const onClickSensor = (id) => {
        dispatch(setActiveSensor(id))
        getController(leftBarActive, id)
            .then(data => console.log('controller', data))
            .catch(err => console.log(err))
    }

    console.log(controller)

    return (
        <div className={styles['sensors-bar']}>
            <div onClick={addSensorHandler} className={styles['sensors-bar__add']}>
                <span>+</span>
            </div>
            <div className={styles['sensors-bar__content']}>
                {sensors.map((sensor, i) => (
                    <div
                        key={i}
                        onClick={() => onClickSensor(sensor.id)}
                        className={styles['sensor']}
                    >
                        {sensor.name}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SensorsBar