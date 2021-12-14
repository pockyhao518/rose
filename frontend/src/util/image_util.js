import axios from 'axios'

export const getImages = () => {
    return axios.get('/api/image/index',)
}
export const getImage = (filename) => {
    return axios.get(`/api/image/file/${filename}`)
}
export const deleteImage = (id) => {
    return axios.delete(`/api/image/delete/${id}`)
}