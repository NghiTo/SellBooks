import React, { useState } from "react";
import "./User.css";
import { updatePassword } from "../CallApi";

function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  let isValid = true;
  const submit = () => {
    if (oldPassword.trim() === "") {
      isValid = false;
      alert("Mật khẩu cũ không được để trống");
    } else if (oldPassword !== localStorage.getItem("password")) {
      isValid = false;
      alert("Mật khẩu cũ không đúng");
    } else if (newPassword.length < 6) {
      isValid = false;
      alert("Mật khẩu mới phải có ít nhất 6 ký tự");
    } else if (newPassword !== confirmPassword) {
      isValid = false;
      alert("Mật khẩu mới không khớp");
    }

    if (isValid) {
      updatePassword({ oldPassword, newPassword });
    }
  };

  return (
    <div className="section-content my-3">
      <h1 className="text-center">Đổi mật khẩu</h1>
      <form className="d-flex flex-column">
        <div>
          <label htmlFor="">Mật khẩu cũ</label>
          <input
            onChange={(e) => setOldPassword(e.target.value)}
            className="form-control"
            type="password"
            placeholder="Nhập mật khẩu hiện tại"
          />
        </div>
        <div>
          <label htmlFor="">Mật khẩu mới</label>
          <input
            onChange={(e) => setNewPassword(e.target.value)}
            className="form-control"
            type="password"
            placeholder="Nhập mật khẩu mới"
          />
        </div>
        <div>
          <label htmlFor="">Xác nhận mật khẩu</label>
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="form-control"
            type="password"
            placeholder="Nhập lại mật khẩu mới"
          />
        </div>
        <div className="text-center">
          <input value="Xác nhận" onClick={() => submit()} type="button" className="btn btn-warning">
          </input>
        </div>
      </form>
    </div>
  );
}

export default ChangePassword;
