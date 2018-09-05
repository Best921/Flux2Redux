import { EventEmitter } from 'events';

import * as ActionTypes from '../ActionTypes';
import Dispatcher from '../Dispatcher';

const CHANGE_EVENT = 'changed';

const counterValues = {
  'First': 0,
  'Second': 10
};

const CounterStore = Object.assign({}, EventEmitter.prototype, {
  getCounterValues: function(){
    return counterValues;
  },
  addChangeListener: function(callback){// 注册回调，让相关的react组件获取新值
    this.on(CHANGE_EVENT,callback);
  },
  removeChangeListener: function(){
    this.removeChangeListener(CHANGE_EVENT);
  },
  emitChange: function(){
    this.emit(CHANGE_EVENT);
  }
});

// 把CounterStore 注册到全局唯一的Dispatcher 上去
// 所有派发给Dispatcher的action 对象，都会传递到这个回调函数中来
// 当一个动作被派发的时候， Dispatcher 就是简单地把所有注册的回调函数全都调用一遍，
// 至于这个动作是不是对方关心的， Flux 的Dispatcher 不关心，要求每个回调函数去鉴别。
CounterStore.dispatchToken = Dispatcher.register(function(action){
  if(action.type === ActionTypes.INCREMENT){
    counterValues[action.counterCaption]++;
    CounterStore.emitChange();
  }else if(action.type === ActionTypes.DECREMENT){
    counterValues[action.counterCaption]--;
    CounterStore.emitChange();
  }
});

export default CounterStore;