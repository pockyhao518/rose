import * as DataUtil from '../util/datas_api_util';
import * as ImageUtil from '../util/image_util';
export const RECEIVE_ALL_DATAS = 'RECEIVE_ALL_DATAS';
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const RECEIVE_ALL_IMAGE = 'RECEIVE_ALL_IMAGE';
export const RECEIVE_IMAGE = 'RECEIVE_IMAGE';
export const reciveDatas = (datas) => ({
    type: RECEIVE_ALL_DATAS,
    datas,
})

export const reciveData = (data) => ({
    type: RECEIVE_DATA,
    data
})
export const reciveImages = (images) => ({
    type: RECEIVE_ALL_IMAGE,
    images
})
export const reciveImage = (image) => ({
    type: RECEIVE_IMAGE,
    image
})
export const fetchDatas = () => (dispatch) => {
    return DataUtil.getDatas()
        .then((datas) => dispatch(reciveDatas(datas)))
}

export const fetchData = (Id) => (dispatch) => {
    return DataUtil.getData(Id)
        .then((data) => dispatch(reciveData(data)))
}
export const fetchImages = () => (dispatch) => {
    return ImageUtil.getImages()
        .then((images) => dispatch(reciveImages(images)))
}

export const fetchImage = (filename) => (dispatch) => {
    return ImageUtil.getImage(filename)
        .then((image) => dispatch(reciveImage(image)))
}