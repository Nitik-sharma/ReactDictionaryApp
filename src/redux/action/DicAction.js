import {ADD_TO_HISTORY} from './Action.js'

 const  addToHistory=(item)=>{
   return{
    type:ADD_TO_HISTORY,
    payload:item,
   }
};

export default addToHistory;
