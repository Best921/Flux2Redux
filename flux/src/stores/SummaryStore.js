import { EventEmitter } from 'events';

import Dispatcher from '../Dispatcher';
import * as ActionTypes from '../ActionTypes';
import CounterStore from './CounterStore';

const CHANGE_EVENT = 'changed';

function computeSummary(counterValues){
  var sum = 0;
  for(var x in counterValues){
    sum += counterValues[x];
  }
  return sum;
}

const SummaryStore = Object.assign({}, EventEmitter.prototype, {
  getSummary: function(){
    return computeSummary(CounterStore.getCounterValues());
  },
  addChangeListener: function(callback){
    this.on(CHANGE_EVENT,callback);
  },
  removeChangeListener: function(){
    this.removeListener(CHANGE_EVENT);
  },
  emitChange: function(){
    this.emit(CHANGE_EVENT);
  }
});

SummaryStore.dispatchToken = Dispatcher.register(function(action){
  if(action.type === ActionTypes.INCREMENT || action.type === ActionTypes.DECREMENT){
    // 等待 CounterStore 上的回调都处理完
    Dispatcher.waitFor([CounterStore.dispatchToken]);
    SummaryStore.emitChange();
  }
});

export default SummaryStore;