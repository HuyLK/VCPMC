import React from "react";
import "./dsdtuq.css";
import { FiSearch } from "react-icons/fi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineAppstore } from "react-icons/ai";
import vn from "../img/vn.jpg";
import eng from "../img/eng.jpg";
import Menu from "../views/menu";
import { FiEdit } from "react-icons/fi";
import { VscAdd } from "react-icons/vsc";

const DsUyQuyen = () => {
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
          <h3>Danh sách đối tác ủy quyền</h3>
        </div>

        <div className="kbg-content">
          <div className="search-ctn">
            <form className="example">
              <input
                type="text"
                placeholder="Họ tên, tên đăng nhập, email..."
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

      <Menu />
    </>
  );
};

export default DsUyQuyen;
