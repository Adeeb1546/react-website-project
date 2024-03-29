import React, { Component } from "react";
import Product from "./Product";
// import { storeProducts } from "../data";
import Title from "./Title";

import { ProductConsumer } from "../context";
export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="product" />
            <div className="row">
              <ProductConsumer>
                {value => {
                  // return <h1>{value}</h1>
                  return value.products.map(product => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
