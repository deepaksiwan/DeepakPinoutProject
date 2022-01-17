import
    {
        APPLICANT_GET_REQUEST,
        APPLICANT_GET_SUCCESS,
        APPLICANT_GET_FAIL
} from "../constants/applicantsConstants";
    
export const asApplicant = (state={asApplicant:[], loading: false}, action) =>
{
    switch ( action.type )
    {
        case APPLICANT_GET_REQUEST:
            return {loading:true, asApplicant: []}
        case APPLICANT_GET_SUCCESS:
            return {loading:false, asApplicant:action.payload}
        case APPLICANT_GET_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}