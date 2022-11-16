import { Component } from "react";

//Cách viết theo class khóa này sẽ dùng bằng class thôi
class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <a className="navbar-brand" href="#/">
          Title
        </a>
        <ul className="nav navbar-nav">
          <li className="active">
            <a href="#/">Home</a>
          </li>
          <li>
            <a href="#/">Link</a>
          </li>
        </ul>
      </nav>
    );
  }
}

//Cách viết theo function ít dùng
// function Header() {
//   return (
//     <div>
//       <h1>Header Component Function</h1>
//     </div>
//   );
// }
export default Header;
