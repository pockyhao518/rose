import * as DataUtil from '../util/datas_api_util';

export const RECEIVE_ALL_DATAS = 'RECEIVE_ALL_DATAS';
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const reciveDatas = (datas) => ({
    type: RECEIVE_ALL_DATAS,
    datas,
})

export const reciveData = (data) => ({
    type: RECEIVE_DATA,
    data
})

export const fetchDatas = () => (dispatch) => {
    return DataUtil.getDatas()
        .then((datas) => dispatch(reciveDatas(datas)))
}

export const fetchData = (Id) => (dispatch) => {
    return DataUtil.getData(Id)
        .then((data) => dispatch(reciveData(data)))
}