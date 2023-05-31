import $api from "../http"

export const getSensors = async (controller) => {
    const tokenFromLS = localStorage.getItem('token')
    console.log('token', tokenFromLS)
    const data = await $api.get(`/api/v1/sensor/${controller}/all`, {
        headers: {
            Authorization: `Bearer ${tokenFromLS}`
        }
    })
    return data
}

export const addSensor = async (controller, body) => {
    const tokenFromLS = localStorage.getItem('token')
    const data = await $api.post(`/api/v1/sensor/${controller}`, body, {
        headers: {
            Authorization: `Bearer ${tokenFromLS}`
        }
    })
    return data
}

export const deleteSensor = async (controller, sensorId) => {
    const tokenFromLS = localStorage.getItem('token')
    const data = await $api.delete(`/api/v1/${controller}/${sensorId}`, {
        headers: {
            Authorization: `Bearer ${tokenFromLS}`
        }
    })
    return data
}

export const getSecurity = async () => {
    const tokenFromLS = localStorage.getItem('token')
    const data = await $api.get(`/api/v1/security`, {
        headers: {
            Authorization: `Bearer ${tokenFromLS}`
        }
    })
    return data
}