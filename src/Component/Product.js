import { Component } from "react";
class Product extends Component {
  
  onAddToCart(text) {
    console.log(text);
  }
  render() {
    return (
      <div className="col-md-6 col-lg-4 g-mb-30">
        <article className="u-shadow-v18 g-bg-white text-center rounded g-px-20 g-py-40 g-mb-5">
          <img src={this.props.image} alt="BigCo Inc. logo" />
          <h4 className="h5 g-color-black g-font-weight-600 g-mb-10">
            {this.props.name}
          </h4>
          <p> {this.props.price}</p>
          <span className="d-block g-color-primary g-font-size-16">
            ${this.props.price}
          </span>
          <a
            className="btn btn-primary"
            onClick={() => {
              this.onAddToCart("Mua thành công");
            }}
            href="#/"
          >
            Mua ngay
          </a>
        </article>
      </div>
    );
  }
}

export default Product;
