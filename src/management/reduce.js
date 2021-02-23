import {combineReducers} from 'redux';

const Is = {
    name:"rishi",
    email:"rishistack17@gmail.com"
};



const reduce = (state = Is,action)=>{
      if (action.type === "CHANGE_IT"){
        return action.payload
      };
    return state
};
// const rootreducer = combineReducers({
//     user:reduce
// });

export default reduce;