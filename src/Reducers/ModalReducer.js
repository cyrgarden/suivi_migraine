const INITIAL_STATE = {
    displayModal : false
};

function ModalReducer(state=INITIAL_STATE, action){
    switch(action.type){
        case 'SET_DISPLAY' :{
            return{
                ...state, 
                displayModal : action.new_displayMode
        }
    }
}
    return state;
};

export default ModalReducer