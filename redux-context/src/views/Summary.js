import React from 'react';
import PropTypes from 'prop-types';

class Summary extends React.Component{
  constructor(props,context){
    super(props,context);
    this.getSum = this.getSum.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      sum: 0
    };
  }
  render(){
    return(
      <div style={{marginLeft:'10px'}}>Sum: {this.state.sum}</div>
    );
  }
  componentDidMount(){
    this.onChange();
    this.context.store.subscribe(this.onChange);
  }
  componentWillUnmount(){
    this.context.store.unsubscribe(this.onChange);
  }
  getSum(){
    const storeState = this.context.store.getState();
    let sum = 0;
    for(let x in storeState){
      sum += parseInt(storeState[x],10);
    }
    return sum;
  }
  onChange(){
    this.setState({
      sum: this.getSum()
    });
  }
}

Summary.contextTypes = {
  store: PropTypes.object
};

export default Summary;