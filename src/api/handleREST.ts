import axios from 'axios'

const apiPort = 3500

const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzIxODIyNTk3fQ.YczEnnOq1pxaUh_RuQQxYPn7lrlwhizZgp36WO7y-0Q"

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