import React, { Component } from 'react'
import { connect } from 'react-redux';
import { onIncrement } from '../action';

class Counter extends Component {
  
  state = {

  }

  increment = () => {
    this.props.onInc(2)
  }
  
  render() {
    return (
      <>
        <div>Counter: {this.props.count}</div>
        <button onClick={this.increment}> + </button>
      </>
    )
  }
}

// Get data from the state
const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInc: (a) => { dispatch(onIncrement(a)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);