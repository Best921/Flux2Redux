import React from 'react';
import { connect } from 'react-redux';

class Summary extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div style={{marginLeft:'10px'}}>Sum: {this.props.sum}</div>
    );
  }
}

function mapStateToProps(state,ownProps){
  let sum = 0;
  for(let key in state){
    if(state.hasOwnProperty(key)){
      sum += state[key];
    }
  }
  return {
    sum: sum
  };
}

export default connect(mapStateToProps)(Summary);