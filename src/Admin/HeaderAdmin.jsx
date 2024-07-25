import React, { useEffect, useState } from "react";
import { getUserById } from "../CallApi";

function HeaderAdmin() {
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const body = await getUserById();
      setName(body.fullName);
    };

    fetchData();
  }, []);

  return (
    <header className="admin-header">
      <div className="header-left">
        <button className="menu-button">
          <i className="fas fa-bars"></i>
        </button>
      </div>
      <div className="header-middle">
        <h1>Welcome</h1>
      </div>
      <div className="header-right">
        <button className="icon-button">
          <i className="fas fa-envelope"></i>
          <span className="badge">3</span>
        </button>
        <button className="icon-button">
          <i className="fas fa-bell"></i>
          <span className="badge">5</span>
        </button>
        <button className="icon-button">
          <i className="fas fa-user-circle"></i>
        </button>
        <div className="user-info">
          <span>{name}</span>
        </div>
      </div>
    </header>
  );
}

export default HeaderAdmin;
