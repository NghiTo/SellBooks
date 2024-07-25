import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Checkout from "./Checkout";

function Cart() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const items = useSelector((state) => state.cart.items);

  if (items.length > 0) {
    return (
      <>
        <div className="cart-title">
          <h1>Giỏ hàng</h1>
        </div>
        <Checkout />
      </>
    );
  }

  return (
    <>
      <div className="cart-title">
        <h1>Giỏ hàng</h1>
      </div>
      <div className="img">
        <img
          src="https://web.nvnstatic.net/tp/T0308/img/not-cart.png?v=3"
          alt=""
        />
        {isAuthenticated ? (
          <>
            <p>Không có sản phẩm nào trong giỏ hàng của bạn</p>
            <Link to="/">
              <button>Tiếp tục mua hàng</button>
            </Link>
          </>
        ) : (
          <>
            <p>Bạn chưa đăng nhập. Vui lòng đăng nhập</p>
            <Link to="/login">
              <button>Đăng nhập ngay</button>
            </Link>
          </>
        )}
      </div>
    </>
  );
}

export default Cart;
