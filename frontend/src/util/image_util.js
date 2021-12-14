import axios from 'axios'

export const getImages = () => {
    return axios.get('/api/images/index',)
}
export const getImage = (filename) => {
    return axios.get(`/api/images/file/${filename}`)
}
export const deleteImage = (id) => {
    return axios.delete(`/api/images/delete/${id}`)
}