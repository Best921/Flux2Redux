import React from 'react';
import PropTypes from 'prop-types';

class Provider extends React.Component{
  render(){
    return this.props.children;
  }
  getChildContext(){
    return{
      store: this.props.store
    };
  }
}

Provider.childContextTypes = {
  store: PropTypes.object
};

export default Provider;