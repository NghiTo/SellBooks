import React, { useEffect, useState } from "react";
import "./Pay.css";
import ListOrder from "./ListOrder";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { resetCart } from "../Redux/cartSlice";

function Pay() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState(""); // State to track selected payment method

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.items);
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      const id = localStorage.getItem("id");

      const response = await fetch(`http://localhost:8080/api/v1/users/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const body = await response.json();
      setName(body.fullName);
      setEmail(body.email);
      setPhone(body.phone);
      setAddress(body.address);
    };

    fetchData();
  }, []);

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const order = () => {
    if (paymentMethod === "cod") {
      alert("Đã đặt hàng thành công");
      dispatch(resetCart());
      navigate("/");
    }
  };

  return (
    <div className="shoppingCart check-out">
      <form>
        <div className="row">
          <div className="column1 col-lg-4">
            <h2>
              <span>1</span>
              Thông tin người dùng
            </h2>
            <div className="purchaseInfo">
              <input
                className="form-control"
                type="text"
                value={name}
                disabled
              />
              <input
                className="form-control"
                type="text"
                value={email}
                disabled
              />
              <input
                className="form-control"
                type="text"
                value={phone}
                disabled
              />
              <input
                className="form-control"
                type="text"
                value={address}
                disabled
              />
              <select
                required
                className="form-control"
                name="customerCityId"
                id="cityId"
              >
                <option value="1">Chọn tỉnh/thành phố</option>
                <option value="2">Hà Nội</option>
              </select>
              <select
                required
                className="form-control"
                name="customerCityId"
                id="cityId"
              >
                <option value="1">Chọn quận/huyện</option>
                <option value="2">Bắc Từ Liêm</option>
              </select>
              <select
                className="form-control"
                name="customerCityId"
                id="cityId"
              >
                <option value="1">Chọn phường/xã</option>
                <option value="2">Phúc diễn</option>
              </select>
              <textarea
                className="note form-control"
                name="description"
                id=""
                placeholder="Ghi chú đơn hàng"
              ></textarea>
            </div>
          </div>
          <div className="column2 col-lg-4">
            <h2>
              <span>2</span>Phương thức thanh toán
            </h2>
            <div className="paymentMethod">
              <div>
                <label className="method">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={() => handlePaymentMethodChange("cod")}
                  />{" "}
                  Thanh toán tiền mặt khi nhận hàng (COD)
                </label>
              </div>
              <div>
                <label className="method">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bank"
                    checked={paymentMethod === "bank"}
                    onChange={() => handlePaymentMethodChange("bank")}
                  />{" "}
                  Chuyển khoản qua ngân hàng
                </label>
                <div
                  className={`listBank ${
                    paymentMethod === "bank" ? "visible" : ""
                  }`}
                >
                  <ul>
                    <li>
                      Ngân hàng: <strong>Techcombank</strong>
                    </li>
                    <li>
                      Tên chủ tài khoản: <strong>TÔ BÁ NGHỊ</strong>
                    </li>
                    <li>
                      Số tài khoản: <strong>1903 6788 7550 10</strong>
                    </li>
                    <li>
                      Nội dung chuyển khoản:{" "}
                      <strong>số điện thoại đặt hàng</strong>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <label htmlFor="">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="momo"
                    checked={paymentMethod === "momo"}
                    onChange={() => handlePaymentMethodChange("momo")}
                  />{" "}
                  <img
                    src="https://web.nvnstatic.net/img/logo_momo.png?v=3"
                    width="25px"
                    alt=""
                  />{" "}
                  Ví MoMo
                </label>
              </div>
            </div>
          </div>
          <div className="column3 col-lg-4">
            <h2>
              <span>3</span>
              Thông tin giỏ hàng
            </h2>
            <div id="reviewCart">
              <table>
                <tbody>
                  <tr id="cart-th">
                    <td style={{ width: "50%" }}>Tên sản phẩm</td>
                    <td style={{ width: "20%" }}>Số lượng</td>
                    <td className="text-center" style={{ width: "30%" }}>
                      Giá
                    </td>
                  </tr>
                  {items.map((item) => (
                    <ListOrder
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      price={item.price}
                      quantity={item.quantity}
                    />
                  ))}
                </tbody>
              </table>
            </div>
            <div id="orderIf">
              <p>
                Tạm tính:<span>{totalPrice} ₫</span>
              </p>
              <p>Phí vận chuyển</p>
              <p className="bold-text">
                Tổng cộng
                <span id="totalMoney">{totalPrice} ₫</span>
              </p>
              <Link id="btn" className="btnCtn btn btn-info" to="/">
                Tiếp tục mua hàng
              </Link>
              <button
                type="submit"
                onClick={() => order()}
                id="btn"
                className="btn btn-danger"
              >
                Đặt hàng
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Pay;
