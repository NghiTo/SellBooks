import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/cartSlice";
import { Link, useNavigate } from "react-router-dom";

function Item({ id, url, title, price }) {
  const [isHovered, setIsHovered] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (isAuthenticated) {
      dispatch(
        addToCart({
          id,
          title,
          price,
          quantity: 1,
          url,
        })
      );
      alert("Đã thêm sản phẩm vào giỏ hàng");
    } else {
      if (window.confirm("Bạn chưa đăng nhập. Vui lòng đăng nhập")) {
        navigate("/login");
      }
    }
  };

  return (
    <div className="owl-product">
      <div className="owl-item">
        <div className="item owl-item">
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="wp-img"
          >
            <a className="d-flex justify-content-center" href="">
              <img sizes="283px" src={url} alt="" />
            </a>
            <div
              style={{ display: isHovered ? "initial" : "none" }}
              className="action"
            >
              <a href=""></a>
              <div className="content">
                <Link className="btn-view" to={`/product/?id=${id}`}>
                  Xem chi tiết
                </Link>
                <a className="btn-addcart" href="#" onClick={handleAddToCart}>
                  Thêm vào giỏ
                </a>
              </div>
            </div>
          </div>
          <div className="wp-info">
            <div className="info">
              <a className="name-product" href="">
                {title}
              </a>
            </div>
            <div className="price">
              <span>{price} VND</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
