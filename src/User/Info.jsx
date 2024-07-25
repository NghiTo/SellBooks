import "./User.css";
import { useEffect, useState } from "react";
import { getUserById, updateUser } from "../CallApi";

function Info() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  let isValid = true;

  useEffect(() => {
    const fetchData = async () => {
      const body = await getUserById();
      setName(body.fullName);
      setEmail(body.email);
      setPhone(body.phone);
      setAddress(body.address);
    };

    fetchData();
  }, []);

  const submit = () => {
    if (email.trim() === "") {
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
    }

    if (isValid) {
      updateUser({ name, phone, address });
    }
  };

  return (
    <div className="my-3">
      <div className="text-center">
        <h1>Thông tin cá Nhân</h1>
      </div>
      <form className="row row-cols-2">
        <div className="px-3 mt-4">
          <label htmlFor="">Tên đăng nhập</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="address"
          ></input>
          <span className="underline">
            <b></b>
          </span>
        </div>
        <div className="px-3 mt-4">
          <label>Địa chỉ</label>
          <input
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            value={address}
            className="address"
          ></input>
          <span className="underline">
            <b></b>
          </span>
        </div>
        <div className="px-3 mt-4">
          <label>Phone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="address"
          ></input>
          <span className="underline">
            <b></b>
          </span>
        </div>
        <div className="px-3 mt-4">
          <label>Email</label>
          <span className="fullname">{email}</span>
          <span className="underline">
            <b></b>
          </span>
        </div>
        <div className="text-center">
          <input
            value="Cập nhật thông tin cá nhân"
            onClick={() => submit()}
            type="button"
            className="btn btn-warning"
          ></input>
        </div>
      </form>
    </div>
  );
}

export default Info;
