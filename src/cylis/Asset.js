import React from 'react';

class Asset extends React.Component{
    render() {
        // console.log('props', this.props.name)
        return(
            <li>{this.props.name}</li>
        );
    }
}

export default Asset;