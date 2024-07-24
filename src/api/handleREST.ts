import axios from 'axios'

const apiPort = 3500

const authToken = process.env.AUTH_TOKEN

export const handlePOST = async (url: string, data: any) => {

    const response = await axios.post(`http://localhost:${apiPort}/api${url}`, data, {
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
    return response.data
}

export const handleGET = async (url: string) => {
    const response = await axios.get(`http://localhost:${apiPort}/api${url}`, {
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
    return response.data
}