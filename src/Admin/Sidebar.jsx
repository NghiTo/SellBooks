import React from "react";
import { Link } from "react-router-dom";
import './Sidebar.css'

function Sidebar() {
  return (
    <div className="admin-sidebar">
      <h2>ADMIN</h2>
      <ul>
        <li>
          <Link to="dashboard">Tổng quan</Link>
        </li>
        <li>
          <Link to="books">Thêm sách mới</Link>
        </li>
        <li>
          <Link to="/customers">Quản lý khách hàng</Link>
        </li>
        <li>
          <Link to="/orders">Quản lý đơn hàng</Link>
        </li>
        <li>
          <Link to="/categories">Quản lý danh mục</Link>
        </li>
        <li>
          <Link to="/">Thoát trang quản trị</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
