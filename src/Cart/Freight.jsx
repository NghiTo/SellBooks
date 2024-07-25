import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../Redux/cartSlice";

function Freight({ id, url, title, price, quantity }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
      dispatch(removeFromCart(id));
    }
  };

  const handleQuantityChange = (amount) => {
    if (quantity + amount < 1) return;
    dispatch(updateQuantity({ id, quantity: quantity + amount }));
  };

  return (
    <div id="shopping-cart">
      <div className="item-cart-product row">
        <div className="img-thumnail-name col-md-4">
          <p className="image float-left">
            <img src={url} alt="" />
          </p>
          <p className="name">
            <a href="#">{title}</a>
          </p>
        </div>
        <div className="cheap col-md-3">
          <p className="price">{price}</p>
        </div>
        <div className="quantity-block col-md-2">
          <div className="input-group bootstrap-touchspin">
            <div className="input-group-btn">
              <button
                onClick={() => handleQuantityChange(-1)}
                disabled={quantity <= 1}
                className="reduced-pop"
              >
                -
              </button>
              <input
                className="quantity updateCart"
                type="number"
                min="1"
                max="50"
                value={quantity}
              />
              <button
                onClick={() => handleQuantityChange(1)}
                className="increase_pop"
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="cheap total-cheap col-md-3">
          <p className="price">{price * quantity}</p>
          <div className="action">
            <a onClick={handleRemove} className="delete" href="#">
              <i className="far fa-trash-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Freight;
