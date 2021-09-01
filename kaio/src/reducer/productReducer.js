import {
    CALL_API,
    SUCCESS,
    ERROR,
    POST_PRODUCTS
} from "./type";


export const ProductReducer=(state, action) => {
    // const {type,payload} = action;
    
    switch (action.type) {
        case CALL_API:
            return {
                ...state,
            loading: true
        };
        case SUCCESS: {
                return {
                    ...state,
                    loading: false,
                    productsDetails: action.productsDetails,
                };
            }
        case ERROR: {
                return {
                    ...state,
                    loading: false,
                    error: action.error,
                };
        }
        case POST_PRODUCTS:{
            return state;

        }

         default:
            return state;
    }
}