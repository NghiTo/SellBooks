import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Product.css";
import Item from "./Item";

function Product() {
  const [books, setBooks] = useState([]);
  const [sortOption, setSortOption] = useState("Sắp xếp theo");
  const [searchTerm, setSearchTerm] = useState("");

  const location = useLocation();

  useEffect(() => {
    const getAllBooks = async () => {
      const response = await fetch(`http://localhost:8080/api/v1/books`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const body = await response.json();
      setBooks(body.content);
    };

    getAllBooks();
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchQuery = params.get("search") || "";
    setSearchTerm(searchQuery);
  }, [location.search]);

  const handleSort = (option, displayText) => {
    setSortOption(displayText);
  };

  // Ensure `searchTerm` is a string and handle cases where `book.title` might be undefined
  const filteredBooks = books.filter(
    (book) =>
      book.title && book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedBooks = [...filteredBooks].sort((a, b) => {
    switch (sortOption) {
      case "Giá tăng dần":
        return a.price - b.price;
      case "Giá giảm dần":
        return b.price - a.price;
      case "A - Z":
        return a.title.localeCompare(b.title);
      case "Z - A":
        return b.title.localeCompare(a.title);
      case "Mới nhất":
        return b.publicationYear - a.publicationYear;
      case "Cũ nhất":
        return a.publicationYear - b.publicationYear;
      default:
        return 0;
    }
  });

  return (
    <>
      <section className="wp-list-product">
        <div className="wrapper">
          <h1>
            <span>Danh sách sản phẩm</span>
          </h1>
        </div>
        <div className="select-product">
          <ul>
            <li className="sort-by-select">
              <span>{sortOption}</span>
              <ul className="sort-by-option-child">
                <li onClick={() => handleSort("Giá tăng dần", "Giá tăng dần")}>
                  <a href="#">Giá tăng dần</a>
                </li>
                <li onClick={() => handleSort("Giá giảm dần", "Giá giảm dần")}>
                  <a href="#">Giá giảm dần</a>
                </li>
                <li onClick={() => handleSort("A - Z", "A - Z")}>
                  <a href="#">A - Z</a>
                </li>
                <li onClick={() => handleSort("Z - A", "Z - A")}>
                  <a href="#">Z - A</a>
                </li>
                <li onClick={() => handleSort("Mới nhất", "Mới nhất")}>
                  <a href="#">Mới nhất</a>
                </li>
                <li onClick={() => handleSort("Cũ nhất", "Cũ nhất")}>
                  <a href="#">Cũ nhất</a>
                </li>
              </ul>
              <i className="fa fa-angle-down" aria-hidden="true"></i>
            </li>
          </ul>
        </div>
        <div className="product-list">
          {sortedBooks.map((book) => (
            <div key={book.id} className="product-item">
              <Item
                id={book.id}
                url={book.urlImage}
                title={book.title}
                price={book.price}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Product;
