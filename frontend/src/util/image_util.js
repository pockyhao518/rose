import axios from 'axios'

export const getImages = () => {
    return axios.get('/index',)
}
export const getImage = (filename) => {
    return axios.get(`/file/${filename}`)
}