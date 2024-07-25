import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { createUser } from "../CallApi";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  let isValid = true;

  const submit = () => {
    if (name.trim() === "") {
      isValid = false;
      alert("Họ và tên không được để trống");
    } else if (email.trim() === "") {
      isValid = false;
      alert("Email không được để trống");
    } else if (!email.includes("@")) {
      isValid = false;
      alert("Email không hợp lệ");
    } else if (phone.trim() === "") {
      isValid = false;
      alert("Số điện thoại không được để trống");
    } else if (phone.length < 10 || phone.length > 10) {
      isValid = false;
      alert("Số điện thoại không hợp lệ");
    } else if (address.trim() === "") {
      isValid = false;
      alert("Địa chỉ không được để trống");
    } else if (password.trim() === "") {
      isValid = false;
      alert("Mật khẩu không được để trống");
    } else if (password.length < 6) {
      isValid = false;
      alert("Mật khẩu phải có ít nhất 6 ký tự");
    } else if (password !== confirmPassword) {
      isValid = false;
      alert("Mật khẩu không khớp");
    }

    if (isValid) {
      createUser({name, phone, email, password, address});
      navigate('/login')
    }
  };

  return (
    <div className="wp-user">
      <h1 className="title-head">
        <span>Đăng Ký</span>
      </h1>
      <form className="form-login">
        <div className="form-group">
          <label>Họ và tên</label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
            required
            placeholder="Họ tên của bạn"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
            required
            placeholder="Email của bạn"
          />
        </div>
        <div className="form-group">
          <label>Điện thoại</label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            type="number"
            className="form-control"
            required
            placeholder="Số điện thoại của bạn"
          />
        </div>
        <div className="form-group">
          <label>Địa chỉ</label>
          <input
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            className="form-control"
            required
            placeholder="Địa chỉ của bạn"
          />
        </div>
        <div className="form-group">
          <label>Mật khẩu</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            required  
            placeholder="Nhập mật khẩu"
          />
        </div>
        <div className="form-group">
          <label>Nhập lại mật khẩu</label>
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            className="form-control"
            required
            placeholder="Nhập lại mật khẩu"
          />
        </div>
        <div className="btn_login_reg">
          <button
            id="btnSignIn"
            className="btn btn-warning tp_button"
            type="submit"
            onClick={() => submit()}
          >
            Đăng Ký
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
