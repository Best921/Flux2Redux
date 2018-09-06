import React from 'react';

class Counter extends React.Component{
  render(){
    var buttonStyle = {margin:'10px'};
    console.log('render:' + this.props.caption);
    return(
      <div>
        <button style={buttonStyle} onClick={this.addCount}>+</button>
        <button style={buttonStyle} onClick={this.reduceCount}>-</button>
        <span>{this.props.caption} count: {}</span>
      </div>
    );
  }
  addCount(){}
  reduceCount(){}
}

export default Counter;