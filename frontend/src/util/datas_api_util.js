import axios from 'axios'

export const getDatas = () => {
    return axios.get('/api/datas',)
}
export const getData = (id) => {
    return axios.get(`/api/datas/${id}`)
}