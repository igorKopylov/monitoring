import $api from "../http"

export const getUsersList = async () => {
    const tokenFromLS = localStorage.getItem('token')
    const data = await $api.get('/api/v1/security/all', {
        headers: {
            Authorization: `Bearer ${tokenFromLS}`
        }
    })
    return data
}

export const getUsers = async () => {
    const tokenFromLS = localStorage.getItem('token')
    const data = await $api.get('/api/v1/security', {
        headers: {
            Authorization: `Bearer ${tokenFromLS}`
        }
    })
    return data
}

export const editUser = async () => {
    const tokenFromLS = localStorage.getItem('token')
    const data = await $api.get('/api/v1/security', {
        headers: {
            Authorization: `Bearer ${tokenFromLS}`
        }
    })
    return data
}


export const deleteUser = async (userId) => {
    const tokenFromLS = localStorage.getItem('token')
    const data = await $api.delete(`/api/v1/security/${userId}`, {
        headers: {
            Authorization: `Bearer ${tokenFromLS}`
        }
    })
    return data
}