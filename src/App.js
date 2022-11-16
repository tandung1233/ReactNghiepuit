import "./App.css";
import { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [
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
          status: true,
        },
      ],
      isActive: true,
    };
    //Cách 1: cách 2 cứ sài onSetState = () =>{} cho khỏe tại nó kiểu bắt khai báo mới được sử dụng
    // this.onSetState = this.onSetState.bind(this);
  }
  onSetState = () => {
    if (this.state.isActive === true) {
      //Phải sử dụng setState chứ k sử dụng this.state.isActive được mà phải thông qua cái phương thức đó
      this.setState({
        isActive: false,
      });
    } else {
      this.setState({
        isActive: true,
      });
    }
  };
  render() {
    let element = this.state.product.map((product, index) => {
      if (product.status === true)
        return (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{product.name}</td>
            <td>
              <span className="label label-success">{product.price}</span>
            </td>
          </tr>
        );
      else {
        return "";
      }
    });
    return (
      <div className="container">
        <h1 align="center">State</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Tên Sản Phẩm</th>
              <th scope="col">Giá</th>
            </tr>
          </thead>
          <tbody>{element}</tbody>
        </table>
        <button
          type="button"
          className="btn btn-warning"
          onClick={this.onSetState}
        >
          Active: {this.state.isActive === true ? "true" : "false"}
        </button>
      </div>
    );
  }
}

export default App;
