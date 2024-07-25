import React from "react";
import "./Cart.css";
import Freight from "./Freight";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Checkout() {
  const items = useSelector((state) => state.cart.items);
  const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <div className="main-cart">
      <div className="main-title row">
        <div className="title-cart col-md-4">Sản phẩm</div>
        <div className="title-cart col-md-3">Đơn giá</div>
        <div className="title-cart col-md-2">Số lượng</div>
        <div className="title-cart col-md-3">Thành tiền</div>
      </div>
      {items.map((item) => (
        <Freight
          key={item.id}
          id={item.id}
          url={item.url}
          title={item.title}
          price={item.price}
          quantity={item.quantity}
        />
      ))}
      <div className="wp-total row">
        <div className="col-lg-9">
          <Link to="/products">Chọn thêm sản phẩm khác</Link>
        </div>
        <div className="each-row col-lg-3">
          <div className="box-style fee">
            <p className="list-info-quantity d-flex flex-row">
              <span>Tổng số lượng hàng: </span>
              <strong>{totalQuantity}</strong>
            </p>
          </div>
          <div className="box-style fee">
            <div className="total2">
              <span className="text-label">Tổng cộng: </span>
              <div className="amount">
                <p>
                  <strong id="total2">{totalPrice}</strong>
                </p>
              </div>
            </div>
          </div>
          <Link id="checkout" to="pay">
            Tiến hành đặt hàng
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
