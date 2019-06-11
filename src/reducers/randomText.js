import types from '../types';

let initState={
    
}


export default function (state = initState, action) {
    switch (action.type) {
        case types.GENERATE_RANDOM_TEXT:
            return { ...state }
        case types.GENERATE_RANDOM_TEXT_SUCCESS:
            return { ...state, }
        case types.GENERATE_RANDOM_TEXT_FAILED:
            return { ...state }


        default:
            return state 
    }

}
