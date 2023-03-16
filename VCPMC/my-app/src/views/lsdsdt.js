import React from "react";
import "./lsdsdt.css";
import vn from "../img/vn.jpg";
import eng from "../img/eng.jpg";
import Menu from "../views/menu";
import { FiSearch } from "react-icons/fi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineAppstore } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { TbFileExport } from "react-icons/tb";

const LSDoiSoat = () => {
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
          <h3>Lịch sử đối soát doanh thu</h3>
        </div>

        <div className="kbg-content">
          <div className="kbg-option">
            <a className="kbg-a">Thời gian thực hiện: </a>
            <input
              className="kbg-date"
              type="date"
              name="date"
              value="2023-02-01"
            ></input>
          </div>

          <div className="search-ctn">
            <form className="example">
              <input
                type="text"
                placeholder="Nhập tên tài khoản quản trị"
                name="search2"
              ></input>
              <span className="icon-search">
                <FiSearch></FiSearch>
              </span>
            </form>
          </div>
        </div>

        <div>
          <h5>Danh sách hợp đồng khai thác đã đối soát</h5>
        </div>

        <div className="kbg-nd"></div>
      </div>

      <div className="menu-container">
        <div className="sub-menu">
          <TbFileExport className="icon-menu"></TbFileExport>
          <span className="span-menu">Xuất file</span>
        </div>
      </div>

      <Menu />
    </>
  );
};

export default LSDoiSoat;
