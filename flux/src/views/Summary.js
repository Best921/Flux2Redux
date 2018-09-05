import React from 'react';

import SummaryStore from '../stores/SummaryStore';

class Summary extends React.Component{
  constructor(props){
    super(props);

    this.onChange = this.onChange.bind(this);

    this.state = {
      sum : SummaryStore.getSummary()
    };
  }
  render(){
    return(
      <div style={{marginLeft:'10px'}}>Sum: {this.state.sum}</div>
    );
  }
  componentDidMount(){
    SummaryStore.addChangeListener(this.onChange);
  }
  componentWillUnmount(){
    SummaryStore.removeChangeListener();
  }
  onChange(){
    var newSum = SummaryStore.getSummary();
    this.setState({
      sum: newSum
    });
  }
}

export default Summary;