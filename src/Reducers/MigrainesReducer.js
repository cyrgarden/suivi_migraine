const INITIAL_STATE = {
    type:'',
    intensity : 0,
    frontal_localisation :'',
    lateral_localisation:'',	
	declencheurs:[],
	soulagements:[],
    duration:0,

};



function MigrainesReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case 'CHANGE_INTENSITY' :{
            console.log(action.new_intensity)
            return{
                ...state,
                intensity:action.new_intensity
            }
        }
        case 'CHANGE_FRONTAL' :{
            return{
                ...state,
                frontal_localisation :action.new_frontal
            }
        }

        case 'CHANGE_LATERAL' :{
            return{
                ...state,
                lateral_localisation:action.new_lateral
            }
        }

        case 'CHANGE_DURATION' :{
            return{
                ...state,
                duration: action.new_duration
            }
        }

        case 'CHANGE_DECLENCHEURS' :{
            console.log(action.new_declencheurs);
            return{
                ...state,
                declencheurs: action.new_declencheurs
            }
        }

        case 'CHANGE_SOULAGEMENT' :{
            console.log(action.new_soulagements);
            return{
                ...state,
                soulagements: action.new_soulagements
            }
        }

        case 'CHANGE_TYPE' :{
            return{
                ...state,
                type:action.new_type
            }
        }
    }
    return state;
};



export default MigrainesReducer;