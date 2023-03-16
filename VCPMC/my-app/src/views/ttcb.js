import React from "react";
import "./ttcb.css";
import { FiSearch } from "react-icons/fi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineAppstore } from "react-icons/ai";
import vn from "../img/vn.jpg";
import eng from "../img/eng.jpg";
import Menu from "../views/menu";
// import { ToastContainer, toast } from 'react-toastify';

const EditInfor = () => {
  // const notify = () => toast.success("Đổi mật khẩu thành công!");
  return (
    <>
      <div className="infor-container">
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
          <h3>Thông tin cơ bản</h3>
        </div>

        <div className="avt-container">
          <div className="avt-if"></div>
          <a className="name-if">Name</a>
        </div>
      </div>

      <div className="form-container">
        <form className="form-infor-container">
          <div className="input-container">
            <div className="input-infor">
              <label className="label">Họ:</label>
              <input className="input-2" type="text" />

              <label>Ngày sinh:</label>
              <input className="input-2" type="date" />
            </div>

            <div className="input-infor-2">
              <label>Tên:</label>
              <input className="input-2" type="text" />

              <label>Số điện thoại:</label>
              <input className="input-2" type="text" />
            </div>
          </div>
          <label>Email:</label>
          <input className="input" type="email" />

          <label>Tên đăng nhập:</label>
          <input className="input" type="text" />

          <div>
            <label>Phân quyền:</label>
            <input className="input-3" type="text" />
          </div>

          <div className="btn-infor">
            <input className="btn-1" type="button" value="Hủy" />
            <input className="btn-2" type="button" value="Lưu" />
          </div>
        </form>
      </div>

      <Menu />
    </>
  );
};

export default EditInfor;
