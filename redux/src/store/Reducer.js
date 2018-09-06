import ActionTypes from './ActionTypes';

export const reducer = function(state,action){
  const { counterCaption } = action.counterCaption;

  switch(action.type){
    case ActionTypes.INCREMENT:
      return {...state, [counterCaption]: state[counterCaption]++};
    case ActionTypes.DECREMENT:
      return {...state, [counterCaption]: state[counterCaption]--};
    default:
      return state;
  }
}