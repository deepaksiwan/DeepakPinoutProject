import
    {
        CAREER_GET_SUCCESS,
        CAREER_GET_REQUEST,
        CAREER_GET_FAIL
} from "../constants/careerConstants";
    
export const career = (state={career:[], loading:false}, action) =>
{
    switch ( action.type )
    {
        case CAREER_GET_REQUEST:
            return {loading:true, career: []}
        case CAREER_GET_SUCCESS:
            return {loading:false, career:action.payload}
        case CAREER_GET_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}