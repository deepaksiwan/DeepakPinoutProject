import
    {
        SHOWCASE_GET_REQUEST,
        SHOWCASE_GET_SUCCESS,
        SHOWCASE_GET_FAIL
} from "../constants/showcaseimage";
    
export const showcase = (state={showcase:[], loading:false}, action) =>
{
    switch ( action.type )
    {
        case SHOWCASE_GET_REQUEST:
            return {loading:true, showcase: []}
        case SHOWCASE_GET_SUCCESS:
            return {loading:false, showcase:action.payload}
        case SHOWCASE_GET_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}
