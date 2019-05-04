import React, { PureComponent } from 'react';
import Product from './Joseph';

//const Products = ['car', 'motorbike', 'land'];
class App extends PureComponent {
  state = {
    property: ['car', 'motorbike', 'land'],
  };

  addProperty(value) {
    const property = this.state.property;
    const newProperty = [...property, value];
    this.setState({ property: newProperty });
  }

  render() {
    return (
      <div>
        <h1>My React App</h1>
        <p>Hello</p>
        {this.state.property.map(value => (
          <Product name={value} />
        ))}

        <button type="button" onClick={() => this.addProperty('Something')}>
          Click me
        </button>
      </div>
    );
  }
}

export default App;
