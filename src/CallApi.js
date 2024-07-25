export async function createUser({ name, phone, email, password, address }) {
  const response = await fetch(`http://localhost:8080/api/v1/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fullName: name,
      phone: phone,
      email: email,
      password: password,
      address: address,
    }),
  });
  const body = await response.json();
  if (response.ok) {
    alert("Đăng ký thành công");
  }
}

export async function updatePassword({ oldPassword, newPassword }) {
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  const response = await fetch(
    `http://localhost:8080/api/v1/users/updatePassword/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        oldPassword: oldPassword,
        newPassword: newPassword,
      }),
    }
  );
  if (response.ok) {
    alert("Đã thay đổi mật khẩu");
    localStorage.setItem("password", newPassword);
    window.location.reload();
  }
}

export async function updateUser({ name, phone, address }) {
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  const response = await fetch(`http://localhost:8080/api/v1/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      fullName: name,
      phone: phone,
      address: address,
    }),
  });
  if (response.ok) {
    alert("Cập nhật thông tin thành công");
    localStorage.setItem("name", name);
    window.location.reload();
  }
}

export async function getBookById(id) {
  const token = localStorage.getItem("token");
  const response = await fetch(`http://localhost:8080/api/v1/books/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const body = await response.json();
  return body;
}

export async function getUserById() {
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
  return body;
}
