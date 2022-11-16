import "./App.css";
import Product from "./Component/Product";
import { Component } from "react";
class App extends Component {
  onClick() {
    console.log("Đây là component");
  }
  //Sử dụng ref gọi ra để sử dụng lấy giá trị nơi ô input á củng dễ
  onAddProduct = () => {
    console.log(this.refs.name.value);
  };
  render() {
    var product = [
      {
        id: 1,
        name: "Iphone 6 Plus",
        price: 16000000,
        image: "https://www.bootdey.com/img/Content/avatar/avatar7.png",
        status: true,
      },
      {
        id: 2,
        name: "Iphone 10 Plus",
        price: 10000000,
        image: "https://www.bootdey.com/img/Content/avatar/avatar7.png",
        status: true,
      },
      {
        id: 2,
        name: "Iphone 3 Plus",
        price: 13000000,
        image: "https://www.bootdey.com/img/Content/avatar/avatar7.png",
        status: false,
      },
      {
        id: 3,
        name: "Iphone 2 Plus",
        price: 12000000,
        image: "https://www.bootdey.com/img/Content/avatar/avatar7.png",
        status: false,
      },
    ];
    let element = product.map((product, intdex) => {
      if (product.status === true)
        return (
          <Product
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          ></Product>
        );
      else {
        return "";
      }
    });
    return (
      <div className="container">
        <h2>Thêm sản phẩm</h2>
        <label>Tên sản phẩm</label>
        <input type="text" className="form-control" ref="name" />
        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.onAddProduct}
        >
          Lưu
        </button>
        <div className="row">
          {/* Truyền các dữ liệu cha xuống con rồi cái con gọi lại bằng thuộc tính props.name,.. */}
          {element}
        </div>
        <button
          type="button"
          className="btn btn-warning"
          onClick={this.onClick}
        >
          Click me
        </button>
      </div>
    );
  }
}

export default App;
