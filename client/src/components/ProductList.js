import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      filterString: '',
    }
  }

  componentDidMount() {
    this.fetchProducts();
  }

  async fetchProducts() {
    try {
      const response = await fetch('/api/products');
      const result = await response.json();
      this.setState({ products: result });
    } catch (err) {
      alert(err);
    }
  }

  filterStringChanged(e) {
    this.setState({ filterString: e.target.value });
  }

  onUnitsChanged(newUnits, productId) {
    const products = this.state.products;
    const index = products.findIndex(p=>p.id === productId);
    const productToUpdate = products[index];
    productToUpdate.units = newUnits;
    this.setState({products});
  }

  render() {
    const filteredProducts = this.state.products.filter(p => p.name.indexOf(this.state.filterString) >= 0);
    return (
      <div>
        <input type="text" onChange={(event) => this.filterStringChanged(event)} />
        <hr />
        {filteredProducts
          .sort((p1, p2) => p1.units - p2.units)
          .map(p =>
            <Product key={p.id} item={p} onUnitsChanged={(newUnits, productId) => this.onUnitsChanged(newUnits, productId)}/>
          )}

      </div>
    );
  }
}

export default ProductList;