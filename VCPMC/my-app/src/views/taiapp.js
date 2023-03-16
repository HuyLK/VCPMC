import React from "react";
import "./taiapp.css";
import vn from "../img/vn.jpg";
import eng from "../img/eng.jpg";
import Menu from "../views/menu";

import { FaCloudUploadAlt } from "react-icons/fa";
import { BsWindows } from "react-icons/bs";
import { GrAndroid } from "react-icons/gr";

const TaiApp = () => {
  return (
    <>
      <div className="kbg-container" style={{ width: "1200px" }}>
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
          <h3>Tải App</h3>
        </div>
      </div>

      <div>
        <div className="content">
          <label className="lb-1">ỨNG DỤNG </label>
          <label className="lb-2">VCPMC</label>
          <br></br>
          <label className="lb-3">
            - - - - - - - - - - - - - - - - - - - -
          </label>
          <br></br>
          <label className="lb-5">Bạn vui lòng chọn</label>
          <br></br>
          <label className="lb-4">nền tảng </label>
          <label>phù hợp để trải nghiệm</label>
        </div>

        <div className="download">
          <div className="box">
            <FaCloudUploadAlt className="icon-1"></FaCloudUploadAlt>
            <input className="btn" type="button" value="Tool Upload" />
          </div>

          <div className="box">
            <BsWindows className="icon-2"></BsWindows>
            <input className="btn" type="button" value="Tải App Window" />
          </div>

          <div className="box">
            <GrAndroid className="icon-3"></GrAndroid>
            <input className="btn" type="button" value="Tải App Android" />
          </div>
        </div>
      </div>

      <Menu />
    </>
  );
};

export default TaiApp;
