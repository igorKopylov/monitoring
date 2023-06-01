const initialState = {
    isAuth: null,
    leftBarActive: 'temperature',
    sensors: [{
        name: "Датчик 1",
        min_temperature: 0,
        max_temperature: 0,
    }, {
        name: "Датчик 2",
        min_temperature: 0,
        max_temperature: 0,
    }],
    sensorId: 0
}

const SET_IS_AUTH = 'SET_IS_AUTH'
const SET_LEFT_BAR_ACTIVE = 'SET_LEFT_BAR_ACTIVE'
const SET_SENSORS = 'SET_SENSORS'
const SET_ACTIVE_SENSOR = 'SET_ACTIVE_SENSOR'

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_AUTH:
            return { ...state, isAuth: action.payload }
        case SET_LEFT_BAR_ACTIVE:
            return { ...state, leftBarActive: action.payload }
        case SET_SENSORS:
            return { ...state, sensors: action.payload }
        case SET_ACTIVE_SENSOR:
            console.log('payload', action.payload)
            return { ...state, sensorId: action.payload }
        default:
            return state
    }
}

export const setIsAuth = payload => ({ type: SET_IS_AUTH, payload })
export const setLefBarActive = payload => ({ type: SET_LEFT_BAR_ACTIVE, payload })
export const setSensors = payload => ({ type: SET_SENSORS, payload })
export const setActiveSensor = payload => ({ type: SET_ACTIVE_SENSOR, payload })

export default reducer