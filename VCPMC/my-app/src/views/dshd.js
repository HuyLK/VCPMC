import React from "react";
import "./dshd.css";
import vn from "../img/vn.jpg";
import eng from "../img/eng.jpg";
import { FiSearch } from "react-icons/fi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineAppstore } from "react-icons/ai";
import Menu from "../views/menu";
import { FiEdit } from "react-icons/fi";

const DSHopDong = () => {
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
          <h3>Danh sách hợp đồng</h3>
        </div>

        <div className="kbg-content">
          <div className="kbg-option">
            <a className="kbg-a">Quyền sở hữu: </a>
            <select className="kbg-slt" name="cars" id="cars">
              <option>Tất cả</option>
              <option value="volvo">Người biểu diễn</option>
              <option value="saab">Nhà sản xuất</option>
            </select>
          </div>

          <div className="kbg-option">
            <a className="kbg-a">Hiệu lực hợp đồng: </a>
            <select className="kbg-slt" name="cars" id="cars">
              <option value="volvo">Tất cả</option>
              <option value="saab">Mới</option>
              <option value="opel">Còn thời hạn</option>
              <option value="opel">Hết hạn</option>
              <option value="opel"></option>
            </select>
          </div>

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
          <FiEdit className="icon-menu"></FiEdit>
          <span className="span-menu">Quản lý phê duyệt</span>
        </div>
      </div>

      <Menu />
    </>
  );
};

export default DSHopDong;
