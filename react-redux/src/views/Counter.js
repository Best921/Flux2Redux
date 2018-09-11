import React from 'react';
import { connect } from 'react-redux';

import * as Actions from '../store/Actions';

class Counter extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    var buttonStyle = {margin:'10px'};
    console.log('render:' + this.props.caption);
    return(
      <div>
        <button style={buttonStyle} onClick={this.props.increment}>+</button>
        <button style={buttonStyle} onClick={this.props.decrement}>-</button>
        <span>{this.props.caption} count: {this.props.count}</span>
      </div>
    );
  }
  shouldComponentUpdate(nextProps,nextState){
    return (nextProps.caption !== this.props.caption) ||
      (nextProps.count !== this.props.count);
  }
}

function mapStateToProps(state,ownProps){
  return{
    count: state[ownProps.caption]
  }
}

function mapDispatchToProps(dispatch,ownProps){
  return{
    increment: function(){
      dispatch(Actions.increment(ownProps.caption));
    },
    decrement: function(){
      dispatch(Actions.decrement(ownProps.caption));
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);