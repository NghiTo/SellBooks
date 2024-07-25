import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../Redux/authSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let isValid = true;

  const submit = () => {
    if (email.trim() === "") {
      isValid = false;
      alert("Email không được để trống");
    } else if (!email.includes("@")) {
      isValid = false;
      alert("Email không hợp lệ");
    } else if (password.trim() === "") {
      isValid = false;
      alert("Mật khẩu không được để trống");
    }

    if (isValid) {
      login();
    }
  };

  async function login() {
    try {
      const response = await fetch(`http://localhost:8080/api/v1/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          usernameOrEmail: email,
          password: password,
        }),
      });

      const responseBody = await response.json();
      const name = responseBody.fullName;
      const token = responseBody.accessToken;
      const id = responseBody.id;

      localStorage.setItem("token", token);
      localStorage.setItem("name", name);
      localStorage.setItem("password", password);
      localStorage.setItem("id", id);
      localStorage.setItem("isAuthenticated", "true");
      dispatch(loginSuccess());
      navigate("/");
    } catch (error) {
      console.error("Authentication fail");
      console.log(error);
      alert("Sai tên đăng nhập hoặc mật khẩu");
    }
  }

  return (
    <div className="wp-user">
      <h1 className="title-head">
        <span>Đăng nhập</span>
      </h1>
      <form className="form-login">
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
          <label>Mật khẩu</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            required
            placeholder="Nhập mật khẩu"
          />
        </div>
        <div className="btn_login_reg">
          <input
            className="btn btn-warning tp_button"
            type="button"
            value="Đăng nhập"
            id="btnSignIn"
            onClick={() => submit()}
          />
        </div>
        <Link to="" className="btn-forgotpw">
          <i className="fa fa-question-circle"></i>
          Quên mật khẩu
        </Link>
        <div className="network-login">
          <div className="login-social network facebook">
            <a href="">
              <i className="fab fa-facebook-f"></i>
              <span>Đăng nhập bằng tài khoản facebook</span>
            </a>
          </div>
          <div className="login-social network google">
            <a href="">
              <i className="fab fa-google-plus-g"></i>
              <span>Đăng nhập bằng tài khoản google</span>
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
