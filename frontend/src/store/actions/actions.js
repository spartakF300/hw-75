import{axiosApi} from '../../axiosApi'

export const REQUEST_START = 'REQUEST_START';
export const REQUEST_SUCCESS_ENCODED = 'REQUEST_SUCCESS_ENCODED';
export const REQUEST_SUCCESS_DECODED = 'REQUEST_SUCCESS_DECODED';
export const REQUEST_ERROR = 'REQUEST_ERROR';
export const request = ()=>{
    return{type:REQUEST_START}
};
export const requestSuccessEncoded = (data)=>{
    return{type:REQUEST_SUCCESS_ENCODED,data}
};
export const requestSuccessDecoded = (data)=>{
    return{type:REQUEST_SUCCESS_DECODED,data}
};
export const requestError = (error)=>{
    return{type:REQUEST_ERROR,error }
};
export const postEncoded =  (data)=>{
    return async (dispatch)=> {
        dispatch(request());
      await  axiosApi.post('encode',data).then(res => {
            dispatch(requestSuccessEncoded(res.data))
        }, error => {
            dispatch(requestError(error))
        })
    }
};
export const postDecoded = (data)=>{
    console.log(data);
    return async (dispatch)=> {
        dispatch(request());
      await  axiosApi.post('decode',data).then(res => {
          console.log(res.data);
          dispatch(requestSuccessDecoded(res.data))
        }, error => {
            dispatch(requestError(error))
        })
    }
};