const INITIAL_STATE = {
    id :'',
    name:'',
    email:'',
    access_token:'',
    all_days :[],
    health :''
}

function InfoReducer(state = INITIAL_STATE, action){

    switch(action.type){

        case 'CHANGE_PERSON_ID' :{
            console.log(action.new_id);
            return{
                ...state,
                id:action.new_id
            }
        }
        case 'CHANGE_NAME' :{
            return{
                ...state,
                name:action.new_name
            }
        }
        case 'CHANGE_EMAIL' :{
            return{
                ...state,
                email:action.new_email
            }
        }
        
        case 'SET_DAYS' :{
            return{
                ...state,
                all_days :state.all_days.concat(action.new_days)
            }
        }
    }
    return state;
}

export default InfoReducer;