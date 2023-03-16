import React from "react";
import "./tttp.css";
import vn from "../img/vn.jpg";
import eng from "../img/eng.jpg";
import Menu from "../views/menu";
import { FiEdit } from "react-icons/fi";

const TTTacPham = () => {
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
          <h3>Thông tin tác phẩm</h3>
        </div>

        <div>
          <h5>Thể loại tác phẩm</h5>
        </div>

        <div className="kbg-nd"></div>
      </div>

      <div className="menu-container">
        <div className="sub-menu">
          <FiEdit className="icon-menu"></FiEdit>
          <span className="span-menu">Chỉnh sửa</span>
        </div>
      </div>

      <Menu />
    </>
  );
};

export default TTTacPham;
