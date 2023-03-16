import React from "react";
import "./playlist.css";
import vn from "../img/vn.jpg";
import eng from "../img/eng.jpg";
import Menu from "../views/menu";
import { FiSearch } from "react-icons/fi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineAppstore } from "react-icons/ai";

import { RiPlayListAddFill } from "react-icons/ri";

const Playlist = () => {
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
          <h3>Playlist</h3>
        </div>

        <div className="kbg-content">
          <div className="search-ctn">
            <form className="example" action="/action_page.php">
              <input
                type="text"
                placeholder="Tên chủ đề, người tạo,... "
                name="search2"
              ></input>
              <span className="icon-search">
                <FiSearch></FiSearch>
              </span>
            </form>
          </div>

          <div className="kbg-icons">
            <div id="icon1">
              <AiOutlineUnorderedList></AiOutlineUnorderedList>
            </div>

            <div id="icon2">
              <AiOutlineAppstore></AiOutlineAppstore>
            </div>
          </div>
        </div>

        <div className="kbg-nd"></div>
      </div>

      <div className="menu-container">
        <div className="sub-menu">
          <RiPlayListAddFill className="icon-menu"></RiPlayListAddFill>
          <span className="span-menu">Thêm playlist</span>
        </div>
      </div>

      <Menu />
    </>
  );
};

export default Playlist;
