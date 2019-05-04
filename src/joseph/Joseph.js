import React from 'react';

class Product extends React.Component {
  render() {
    return (
      <div>
        <h2>The Product is: {this.props.name}</h2>
      </div>
    );
  }
}

export default Product;
