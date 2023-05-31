import $api from "../http"

export const getController = async (controller, sensorId) => {
    const tokenFromLS = localStorage.getItem('token')
    const data = await $api.get(`/api/v1/${controller}/${sensorId}`, {
        headers: {
            Authorization: `Bearer ${tokenFromLS}`
        }
    })
    return data
}