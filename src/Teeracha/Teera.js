import React from "react";

class Teera extends React.Component {
  render() {
    return <div>Hello World, my name is Teera {this.props.surname}</div>;
  }
}

export class Product extends React.Component {
  render() {
    return <div>This product is {this.props.name}</div>;
  }
}

export default Teera;
