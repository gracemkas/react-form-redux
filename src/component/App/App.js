import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import SnackList from '../SnackList/SnackList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newSnack: ''
    }
  }

  handleSnackChange = (event) => {
    this.setState({
      newSnack: event.target.value
    })
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleSnackChange}/>
        <button onClick={() => this.props.dispatch({type: 'ADD_SNACK', payload: this.state.newSnack})}>Add Snack</button>
        <SnackList />
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  //What this returns appears on this components props
  return {snackList: reduxState.snackReducer}
}

export default connect(mapReduxStateToProps)(App);
