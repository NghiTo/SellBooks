import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { resetCart } from "../Redux/cartSlice";
import { logout } from "../Redux/authSlice";

function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const name = localStorage.getItem("name");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const items = useSelector((state) => state.cart.items);
  const totalQuantity = items.reduce(
    (acc, item) => acc + Number(item.quantity),
    0
  );
  const totalPrice = items.reduce(
    (acc, item) => acc + Number(item.price) * Number(item.quantity),
    0
  );

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/products?search=${searchTerm}`);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("password");
    localStorage.removeItem("id");
    localStorage.setItem("isAuthenticated", "false");
    dispatch(logout());
    dispatch(resetCart());
  };

  return (
    <>
      <header>
        <div className="header">
          <div className="header-top">
            <div className="header-top-news">
              <span>
                Dịch vụ MUA/THUÊ SÁCH TOÀN QUỐC đồng hành cùng bạn đọc lan tỏa
                văn hóa đọc CHỈ 20K/45 NGÀY
              </span>
            </div>
            <div className="hotline-header">
              <span>MR.Nghị 123456789</span>
              <span className="hotline-space"></span>
              <span>MR.Bình 987654321</span>
            </div>
          </div>
          <div className="header-bottom">
            <div className="logo-header">
              <a href="/">
                <img
                  id="logo-pc"
                  src="https://pos.nvncdn.com/298139-130547/bn/20230218_TYbOHgtUTfHMghXq.jpeg"
                  alt="logo"
                />
              </a>
            </div>
            <div className="search-header">
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  id="input-search"
                  placeholder="Tìm kiếm sản phẩm....."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button id="btn-search" type="submit">
                  Tìm kiếm
                </button>
              </form>
            </div>
            <div className="my-cart">
              <Link to="/cart" className="img_cart">
                <span className="title">Giỏ hàng</span>
                <span className="info-cart d-flex">
                  <span>{totalQuantity}</span>sp (<i>{totalPrice} VND</i>)
                </span>
              </Link>
            </div>
            <div className="login-cart">
              <div className="main-login">
                {isAuthenticated ? (
                  <>
                    <Link className="link-login" to="/user">
                      {name}
                    </Link>
                    <Link
                      onClick={handleLogout}
                      className="link-login"
                      to="/login"
                    >
                      Đăng xuất
                    </Link>
                  </>
                ) : (
                  <>
                    <Link className="link-login" to="/login">
                      Đăng nhập
                    </Link>
                    <Link className="link-register" to="/register">
                      Đăng ký
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
