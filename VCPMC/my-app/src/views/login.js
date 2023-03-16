import React from "react";
import "./login.css";
import logo from "../img/vcpmc_logo.jpg";
import logo2 from "../img/vn.jpg";
import eng from "../img/eng.jpg";
function Login() {
  return (
    <div>
      <div className="dropdown">
        <div className="dropbtn">
          <a className="a-top">Tiếng Việt</a>
          <img src={logo2} className="logo2" />
        </div>
        <div className="dropdown-content">
          <div className="drop-title">
            <a className="a-top">Tiếng Việt</a>
            <img src={logo2} className="vn" />
          </div>
          <div className="drop-title">
            <a className="a-top">English</a>
            <img src={eng} className="eng" />
          </div>
        </div>
      </div>
      <form className="modal-content animate ">
        <div className="imgcontainer">
          <img
            style={{ width: "100px" }}
            src={logo}
            alt="Avatar"
            className="avatar"
          />
        </div>

        <h2 style={{ textAlign: "center" }}>Đăng nhập</h2>
        <div className="container">
          <label for="uname">
            <b>Username</b>
          </label>
          <input className="border" type="text" name="uname" required />

          <label for="psw">
            <b>Password</b>
          </label>
          <input className="border" type="password" name="psw" required />
          <button
            style={{ marginLeft: "170px" }}
            type="submit"
            className="buttonl"
          >
            Đăng nhập
          </button>
          <label>
            <input type="checkbox" name="remember" /> Remember me
          </label>
        </div>

        <div className="container1">
          <span className="psw">
            <a style={{ color: "orangered" }} href="#">
              Quên mật khẩu
            </a>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Login;
