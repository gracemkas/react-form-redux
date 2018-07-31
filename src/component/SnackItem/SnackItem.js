import React, {Component} from 'react';

class SnackItem extends Component {

    render() {
        return(
        <div>
            <li> Name: {this.props.snackData.name} Snack: {this.props.snackData.snack}</li>
        </div>
        )  
    }
}

export default SnackItem;