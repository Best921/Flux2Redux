import React from 'react';

import * as Actions from '../Actions';
import CounterStore from '../stores/CounterStore';

class Counter extends React.Component{
  constructor(props){
    super(props);

    this.addCount = this.addCount.bind(this);
    this.reduceCount = this.reduceCount.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      count: CounterStore.getCounterValues()[props.caption]
    };
  }
  render(){
    var buttonStyle = {margin:'10px'};
    console.log('render:' + this.props.caption);
    return(
      <div>
        <button style={buttonStyle} onClick={this.addCount}>+</button>
        <button style={buttonStyle} onClick={this.reduceCount}>-</button>
        <span>{this.props.caption} count: {this.state.count}</span>
      </div>
    );
  }
  shouldComponentUpdate(nextProps,nextState){// 避免冗余渲染
    return (nextProps.caption !== this.props.caption) ||
      (nextState.count !== this.state.count);
  }
  componentDidMount(){
    CounterStore.addChangeListener(this.onChange);
  }
  componentWillUnmount(){
    CounterStore.removeListener();
  }
  addCount(){
    Actions.increment(this.props.caption);
  }
  reduceCount(){
    Actions.decrement(this.props.caption);
  }
  onChange(){
    const newCount = CounterStore.getCounterValues()[this.props.caption];
    this.setState({
      count: newCount
    });
  }
}

export default Counter;