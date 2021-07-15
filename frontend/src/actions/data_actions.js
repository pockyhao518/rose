import * as DataUtil from '../util/datas_api_util';

export const RECEIVE_ALL_DATAS = 'RECEIVE_ALL_DATAS';

export const reciveDatas = (datas) => ({
    type: RECEIVE_ALL_DATAS,
    datas,
})

export const fetchDatas = () => (dispatch) => {
    return DataUtil.getDatas()
        .then((datas) => dispatch(reciveDatas(datas)))
}