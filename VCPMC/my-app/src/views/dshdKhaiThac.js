import React from "react";
import "./dshdKhaiThac.css";
import vn from "../img/vn.jpg";
import eng from "../img/eng.jpg";
import { FiSearch } from "react-icons/fi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineAppstore } from "react-icons/ai";
import Menu from "../views/menu";
import { FiEdit } from "react-icons/fi";

const DsHdKhaiThac = () => {
  return (
    <>
      <div className="kbg-container">
        <div className="dropbtn"></div>
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
        <div>
          <h3>Danh sách hợp đồng khai thác</h3>
        </div>

        <div className="kbg-content">
          <div className="search-ctn">
            <form className="example">
              <input
                type="text"
                placeholder="Tên hợp đồng, tác giả..."
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
          <FiEdit className="icon-menu"></FiEdit>
          <span className="span-menu">Quản lý phê duyệt</span>
        </div>
      </div>

      <Menu />
    </>
  );
};

export default DsHdKhaiThac;
