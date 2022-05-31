const INITIAL_STATE ={
    all_days :[],
}



function BadDaysReducer(state=INITIAL_STATE, action){
    switch(action.type){
        case'ADD_BAD_DAY' :
            return{
                ...state, 
                all_days: state.all_days.concat(action.new_bad_day)
            }
        default:
            return state;
    }
    
}


export default BadDaysReducer;