import React from 'react';

import * as Actions from '../store/Actions';
import Store from '../store/Store';

class Counter extends React.Component{
  constructor(props){
    super(props);
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
    Store.subscribe(this.onChange);
  }
  componentWillUnmount(){
    Store.unsubscribe(this.onChange);
  }
  onChange(){
    let newCounter = Store.getState()[this.props.caption];
    this.setState({
      counter: newCounter
    });
  }
  addCount(){
    Store.dispatch(Actions.increment(this.props.caption));
  }
  reduceCount(){
    Store.dispatch(Actions.decrement(this.props.caption));
  }
  shouldComponentUpdate(nextProps,nextState){
    return (nextProps.caption !== this.props.caption) ||
      (nextState.counter !== this.state.counter);
  }
}

export default Counter;