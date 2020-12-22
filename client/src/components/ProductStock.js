import React, { Component } from 'react';

class ProductStock extends Component {
  constructor() {
    super();
    this.unitsInput = React.createRef();
  }

  updateUnits() {
    const units = this.unitsInput.current.value;
    const productId = this.props.productId;
    fetch(`/api/products/${productId}/units`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: 'POST',
      body: JSON.stringify({ units }),
    }).then(() => this.props.onUnitsChanged(units, productId));
  }

  render() {
    return (
      <div>
        <input type="number" ref={this.unitsInput} />
        <button onClick={() => this.updateUnits()}>Update</button>
      </div>
    );
  }
}

export default ProductStock;