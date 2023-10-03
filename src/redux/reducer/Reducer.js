import { ADD_TO_HISTORY } from "../action/Action";

const initalState={
    history:[]
}

function historyReducer(state=initalState,action) {
 switch(action.type){
    case ADD_TO_HISTORY:
        return {...state ,history:[...state.history,action.payload]}

        default:
            return state
 }
}

export default historyReducer
