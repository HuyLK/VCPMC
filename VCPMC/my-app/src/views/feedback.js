import React from "react";
import "./feedback.css";
import vn from "../img/vn.jpg";
import eng from "../img/eng.jpg";
import Menu from "../views/menu";

const Feedback = () => {
  return (
    <>
      <div className="kbg-container">
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
          <h3>Feedback</h3>
        </div>
      </div>

      <div className="container">
        <label className="label">Tên người dùng</label>
        <label className="name">Nguyễn Văn A</label>
        <label className="label-2">Bạn muốn được hỗ trợ vấn đề gì?</label>

        <div className="kbg-option">
          <select className="kbg-slt">
            <option className="option">Tài khoản</option>
            <option className="option">Quản lý doanh thu</option>
            <option className="option">Bản quyền</option>
            <option className="option">Khác</option>
          </select>
        </div>
        <label className="label-2">Nội dung</label>
        <input
          className="input"
          type="text"
          placeholder="Nhập nội dung"
        ></input>
      </div>

      <input className="btn" type="button" value="Gửi" />

      <Menu />
    </>
  );
};

export default Feedback;
