import React, { Component } from 'react';
import ProductStock from './ProductStock';

class Product extends Component {
  
  render() {
    const { item } = this.props;
    return (
      <div>
        <div>Name: {item.name}</div>
        <div>Price: {item.price}</div>
        <div>Company: {item.company}</div>
        <div>Units: {item.units}</div>
        <div>Updated at: {item.updatedAt}</div>
        <ProductStock productId={item.id} onUnitsChanged={(newUnits, productId) => this.props.onUnitsChanged(newUnits, productId)}/>
        <hr/>
      </div>
    );
  }
}

export default Product;