import React, { Component } from 'react';
import SnackItem from '../SnackItem/SnackItem';
import { connect } from 'react-redux';

class SnackList extends Component {
    
  render() {
    let snackListItemArray = this.props.snackList.map ((item, index) => {
        return <SnackItem 
                    snackData={item} 
                    key={index} />
      })
    return (
        <div>
                {snackListItemArray}
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
    return {snackList: reduxState.snackReducer}
  }
  
export default connect(mapReduxStateToProps)(SnackList);
