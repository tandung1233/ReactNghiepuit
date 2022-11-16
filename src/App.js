import "./App.css";
import { Component } from "react";
import Header from "./Component/Header";
import Product from "./Component/Product";
class App extends Component {
  //Tạo cái hàm này để in ra nếu status là true
  showInfoProduct(product) {
    if (product.status) {
      return (
        <h1>
          id: {product.id}
          name: {product.name}
          price: {product.price}
          Status: {product.status ? "Active" : "Pending"}
        </h1>
      );
    }
  }
  render() {
    let a = 51;
    let product = {
      id: 1,
      name: "Iphone 7 plus",
      price: 15000000,
      status: true,
    };
    var users = [
      {
        id: 1,
        name: "Nguyen van A",
        age: 18,
      },
      {
        id: 2,
        name: "Nguyen van C",
        age: 18,
      },
      {
        id: 3,
        name: "Nguyen van B",
        age: 18,
      },
    ];
    //củng dễ sử dụng map rồi in ra giá trị nó thôi
    var elements = users.map((user, index) => {
      return (
        <div key={users.id}>
          <h2> Tên: {user.name} </h2>
          <h2> Tuổi: {user.age}</h2>
        </div>
      );
    });
    return (
      //Còn bthuong thì rất là chuối React.createElement
      //Đang sử dụng JSX
      <>
        <div className="App">
          <h1 className="text-primary">App Component</h1>
          <Header />
          <Product />
        </div>
        <nav
          className="navbar navbar-default navbar-static-top"
          role="navigation"
        >
          <a className="navbar-brand" href="#/">
            Title
          </a>
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="#/">Home</a>
            </li>
            <li>
              <a href="#/">Link {a}</a>
            </li>
          </ul>
        </nav>
        {/* Khi gọi thì nhớ cho vào cặp ngoặc và sử dụng this để nó biết lấy hàm hiện tại */}
        {this.showInfoProduct(product)}
        {elements}
      </>
    );
  }
}

export default App;
