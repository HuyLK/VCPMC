import React from "react";
import "./dsThietBi.css";
import vn from "../img/vn.jpg";
import eng from "../img/eng.jpg";
import Menu from "../views/menu";
import { FiSearch } from "react-icons/fi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineAppstore } from "react-icons/ai";

const DSThietBi = () => {
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
          <h3>Danh sách thiết bị</h3>
        </div>

        <div className="kbg-content">
          <div className="kbg-option">
            <select className="kbg-slt1" name="cars" id="cars">
              <option value="volvo">Tất cả</option>
              <option value="saab">Công ty TMCP Bách Hóa Xanh</option>
              <option value="opel">Công ty TNHH XYZ</option>
              <option value="audi">Công ty TMCP Adora</option>
            </select>
          </div>

          <div className="kbg-option">
            <select className="kbg-slt2" name="cars" id="cars">
              <option value="volvo">MAC Address</option>
              <option value="saab">Memory</option>
              <option value="opel">SKU/ID</option>
              <option value="volvo">Hạn bảo hành</option>
              <option value="saab">Tên đăng nhập</option>
              <option value="opel">Trạng thái</option>
              <option value="volvo">Địa điểm</option>
              <option value="saab">Hạn hợp đồng</option>
            </select>
          </div>

          <div className="search-ctn">
            <form className="example">
              <input
                type="text"
                placeholder="Tìm thiết bị theo tên, SKU, địa điểm, địa chỉ Mac"
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
      <Menu/>
    </>
    
  );
};

export default DSThietBi;
