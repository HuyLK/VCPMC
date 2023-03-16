import React from "react";
import "./dslp.css";
import { FiSearch } from "react-icons/fi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineAppstore } from "react-icons/ai";
import vn from "../img/vn.jpg";
import eng from "../img/eng.jpg";
import Menu from "../views/menu";
import { FiEdit } from "react-icons/fi";
import { RiPlayListAddFill } from "react-icons/ri";

const DSLichPhat = () => {
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
          <h3>Danh sách lịch phát</h3>
        </div>

        <div className="kbg-nd"></div>
      </div>
      <div className="menu-container">
        <div className="sub-menu">
          <RiPlayListAddFill className="icon-menu"></RiPlayListAddFill>
          <span className="span-menu">Thêm lịch phát</span>
        </div>
      </div>

      <Menu />
    </>
  );
};

export default DSLichPhat;
