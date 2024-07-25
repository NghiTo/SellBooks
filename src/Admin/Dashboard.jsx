import React, { useEffect, useState } from "react";
import { getUserById } from "../CallApi";
import './Dashboard.css'

function Dashboard() {
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const body = await getUserById();
      setName(body.fullName);
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard">
      <h2>Tổng quan</h2>
      <p>Chào mừng {name} đến với trang quản trị</p>
    </div>
  );
}

export default Dashboard;
