import { Component } from "react";
import Header from "./Header";
class Product extends Component {
  render() {
    return (
      <div>
        <Header />
        <ul class="thumbnails">
          <li class="span4">
            <img
              src="https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645.jpg"
              class="img-fluid img-thumbnail"
              alt="..."
            />
            Iphone 6<p>16.000.000 VNĐ</p>
            <button type="buton">Mua hàng</button>
          </li>
          <li class="span4">
            <img
              src="https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645.jpg"
              class="img-fluid img-thumbnail"
              alt="..."
            />
            Iphone 6<p>16.000.000 VNĐ</p>
            <button type="buton">Mua hàng</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Product;
