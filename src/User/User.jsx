import React, { useEffect, useState } from "react";
import "./User.css";
import { Link, Route, Routes } from "react-router-dom";
import ChangePassword from "./ChangePassword";
import Info from "./Info";
import Item from "./Item";

function User() {
  const [activeButton, setActiveButton] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const id = localStorage.getItem("id");

  useEffect(() => {
    if (id === "1") {
      setIsAdmin(true);
    }
  }, [id]);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };
  return (
    <div className="d-flex flex-row">
      <div className="sidebar">
        <Link
          onClick={() => handleButtonClick(1)}
          className={activeButton === 1 ? "bold-text" : ""}
          to="info"
        >
          Thông tin cá nhân
        </Link>
        <Link
          onClick={() => handleButtonClick(2)}
          className={activeButton === 2 ? "bold-text" : ""}
          to="item"
        >
          Quản lý đơn hàng
        </Link>
        <Link
          onClick={() => handleButtonClick(3)}
          className={activeButton === 3 ? "bold-text" : ""}
          to="updatePassword"
        >
          Đổi mật khẩu
        </Link>
        {isAdmin && (
          <Link
            id="show"
            onClick={() => handleButtonClick(4)}
            className={activeButton === 4 ? "bold-text" : ""}
            to="/admin/dashboard"
          >
            Trang quản trị
          </Link>
        )}
      </div>
      <div className="body d-flex justify-content-center">
        <Routes>
          <Route path="info" element={<Info />} />
          <Route path="item" element={<Item />} />
          <Route path="updatePassword" element={<ChangePassword />} />
        </Routes>
      </div>
    </div>
  );
}

export default User;
