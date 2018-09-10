import React from 'react';

import Store from '../store/Store';

class Summary extends React.Component{
  constructor(props){
    super(props);
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
    Store.subscribe(this.onChange);
  }
  componentWillUnmount(){
    Store.unsubscribe(this.onChange);
  }
  getSum(){
    const storeState = Store.getState();
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

export default Summary;