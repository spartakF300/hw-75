import {REQUEST_START, REQUEST_SUCCESS_DECODED, REQUEST_SUCCESS_ENCODED} from "../actions/actions";

const initialState = {
    encoded: '',
    decoded: '',
    loading:false
};
const reducerOrders = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_START:
            return {
                ...state,
                loading:true
            };
        case REQUEST_SUCCESS_ENCODED:
            return {
                ...state,
                encoded: action.data.encoded,
                loading:false
            };
        case REQUEST_SUCCESS_DECODED:
            return {
                ...state,
                decoded: action.data.decoded,
                loading:false
            };
        default:
            return state
    }

};
export default reducerOrders;