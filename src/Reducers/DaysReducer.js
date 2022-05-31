const INITIAL_STATE = {
	id : 0,
	weather : '',
	alcohol : 0,
	cofee:0,
	sport_duration :0,
	sleep : 0,
	cardiac_freq :0,
	};

function DaysReducer(state = INITIAL_STATE, action){
    switch(action.type){

        case 'CHANGE_ID':{
            return{
                ...state,
                id: action.new_id
            }
        }
        case 'CHANGE_WEATHER' :{
            return{
                ...state,
                weather:action.new_weather
            }
        }
        case 'CHANGE_COFEE' :{
            return{
                ...state,
                cofee:action.new_cofee
            }
        }

        case 'CHANGE_ALCOHOL' :{
            return{
                ...state,
                alcohol:action.new_alcohol
            }
        }

        case 'CHANGE_SPORT' :{
            return{
                ...state,
                sport_duration:action.new_sport
            }
        }

        case 'CHANGE_SLEEP' :{
            return{
                ...state,
                sleep:action.new_sleep
            }
        }

        case 'CHANGE_CARDIAC' :{
            return{
                ...state,
                cardiac_freq:action.new_cardiac
            }
        }


    }
    return state;
};


export default DaysReducer;