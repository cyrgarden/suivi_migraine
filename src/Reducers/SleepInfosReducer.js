const INITIAL_STATE = {
    average_duration: 0,
    light_sleep:0,
    deep_sleep:0,
    rem_phase :0
};

function SleepInfosReducer(state=INITIAL_STATE, action){
    switch(action.type){
        case 'SET_AVERAGE' :{
            console.log(action.new_average);
            return{
                ...state, 
                average_duration : action.new_average
        }
    }
        case 'SET_LIGHT' :{
            return{
                ...state, 
                light_sleep : action.new_light
        }
    }
        case 'SET_DEEP' :{
            return{
                ...state, 
                deep_sleep : action.new_deep
        }
    }
        case 'SET_REM' :{
            return{
                ...state, 
                rem_phase : action.new_rem
        }
    }
    default:
            return state;
    
}};

export default SleepInfosReducer