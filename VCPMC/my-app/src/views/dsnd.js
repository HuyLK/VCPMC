import React from "react";
import "./dsnd.css";
import { FiSearch } from "react-icons/fi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineAppstore } from "react-icons/ai";
import vn from "../img/vn.jpg";
import eng from "../img/eng.jpg";
import Menu from "../views/menu";
import { FiEdit } from "react-icons/fi";
import { TbFileExport } from "react-icons/tb";
import { FiUserPlus } from "react-icons/fi";

const DSNguoiDung = () => {
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
          <h3>Danh sách người dùng</h3>
        </div>

        <div className="kbg-content">
          <div className="search-ctn">
            <form className="example">
              <input
                type="text"
                placeholder="Tên hợp đồng, số hợp đồng, người ủy quyền..."
                name="search2"
              ></input>
              <span className="icon-search">
                <FiSearch></FiSearch>
              </span>
            </form>
          </div>
        </div>

        <div className="kbg-nd"></div>
      </div>

      <div className="menu-container">
        <div className="sub-menu">
          <FiUserPlus className="icon-menu"></FiUserPlus>
          <span className="span-menu">Thêm người dùng</span>
        </div>
      </div>

      <Menu />
    </>
  );
};

export default DSNguoiDung;
