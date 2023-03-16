import React from "react";
import "../views/forgot_pass.css";
import logo from "../img/vcpmc_logo.jpg";
import vn from "../img/vn.jpg";
import eng from "../img/eng.jpg";

const ForgotPass = () => {
  return (
    <>
      <div className="dropdown">
        <div className="dropbtn">
          <a className="a-top">Tiếng Việt</a>
          <img src={vn} className="logo2" />
        </div>
        <div className="dropdown-content">
          <div className="drop-title">
            <a className="a-top">Tiếng Việt</a>
            <img src={vn} className="vn" />
          </div>
          <div className="drop-title">
            <a className="a-top">English</a>
            <img src={eng} className="eng" />
          </div>
        </div>
      </div>

      <div>
        <img src={logo} className="logo" />
      </div>
      <form className="login-container">
        <p>Khôi phục mật khẩu</p>
        <a className="title">
          Vui lòng nhập địa chỉ email đã đăng ký để yêu cầu khôi phục mật khẩu
        </a>
        <label>Email</label>

        <input className="input-email" type="text" />

        <input className="button" type="submit" value="Xác nhận" />
      </form>
      <div>
        <a className="a-bot">Quay lại đăng nhập</a>
      </div>
    </>
  );
};

export default ForgotPass;
