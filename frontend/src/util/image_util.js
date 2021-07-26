import axios from 'axios'

export const getImages = () => {
    return axios.get('/index',)
}
export const getImage = (filename) => {
    return axios.get(`/file/${filename}`)
}
export const deleteImage = (id) => {
    return axios.delete(`/delete/${id}`)
}