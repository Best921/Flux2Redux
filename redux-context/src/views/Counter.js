import React from 'react';
import PropsTypes from 'prop-types';

import * as Actions from '../store/Actions';

class Counter extends React.Component{
  constructor(props,context){
    super(props,context);

    this.onChange = this.onChange.bind(this);
    this.addCount = this.addCount.bind(this);
    this.reduceCount = this.reduceCount.bind(this);
    this.state = {
      counter: 0
    }
  }
  render(){
    var buttonStyle = {margin:'10px'};
    console.log('render:' + this.props.caption);
    return(
      <div>
        <button style={buttonStyle} onClick={this.addCount}>+</button>
        <button style={buttonStyle} onClick={this.reduceCount}>-</button>
        <span>{this.props.caption} count: {this.state.counter}</span>
      </div>
    );
  }
  componentDidMount(){
    this.onChange();
    this.context.store.subscribe(this.onChange);
  }
  componentWillUnmount(){
    this.context.store.unsubscribe(this.onChange);
  }
  onChange(){
    let newCounter = this.context.store.getState()[this.props.caption];
    this.setState({
      counter: newCounter
    });
  }
  addCount(){
    this.context.store.dispatch(Actions.increment(this.props.caption));
  }
  reduceCount(){
    this.context.store.dispatch(Actions.decrement(this.props.caption));
  }
  shouldComponentUpdate(nextProps,nextState){
    return (nextProps.caption !== this.props.caption) ||
      (nextState.counter !== this.state.counter);
  }
}

Counter.contextTypes = {
  store: PropsTypes.object
};

export default Counter;