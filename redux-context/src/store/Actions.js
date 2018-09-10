import * as ActionTypes from './ActionTypes';
// 直接返回 action 对象
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