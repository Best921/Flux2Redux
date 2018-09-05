import * as ActionTypes from './ActionTypes';
import Dispatcher from './Dispatcher';
// 以下是action对象的构造函数
// 创建一个increment action对象，并利用dispatcher分发出去
export const increment = function(counterCaption){
  Dispatcher.dispatch({ // action
    type: ActionTypes.INCREMENT,
    counterCaption: counterCaption
  });
};

export const decrement = function(counterCaption){
  Dispatcher.dispatch({ // action
    type: ActionTypes.DECREMENT,
    counterCaption: counterCaption
  });
};