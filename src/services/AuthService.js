import $api from "../http";

export const logIn = async (username, password) => {
    const data = await $api.post('/api/v1/security/login', { username, password })
    return data
}

export const register = async (username, password) => {
    const data = await $api.post('/api/v1/security/registration', { username, password })
    return data
}

export const editEmail = async (email) => {
    const tokenFromLS = localStorage.getItem('token')
    const data = await $api.patch('/api/v1/security/email', 'refuzeapple10@gmail.com', {
        headers: `Bearer ${tokenFromLS}`
    })
    return data
}