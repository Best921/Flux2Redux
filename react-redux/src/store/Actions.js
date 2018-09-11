import * as ActionTypes from './ActionTypes';

export const increment = function(counterCaption){
  return {
    type: ActionTypes.INCREMENT,
    counterCaption: counterCaption
  };
}

export const decrement = function(counterCaption){
  return {
    type: ActionTypes.DECREMENT,
    counterCaption: counterCaption
  };
}