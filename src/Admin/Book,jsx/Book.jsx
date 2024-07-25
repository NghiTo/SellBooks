import React, { useState } from "react";

function Book() {
  const [title, setTitle] = useState("");
  const [publicationYear, setPublicationYear] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [price, setPrice] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookData = {
      title,
      publicationYear,
      quantity,
      description,
      imageLink,
      price,
      author,
      publisher,
    };
    console.log(bookData);
  };
  return (
    <div className="create-book">
      <h2>Thêm sách mới</h2>
      <form onSubmit={handleSubmit} className="d-flex flex-column">
        <div className="form-group">
          <label>Tên sách:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Năm xuất bản:</label>
          <input
            type="number"
            value={publicationYear}
            onChange={(e) => setPublicationYear(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Số lượng:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Mô tả:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Đường dẫn ảnh:</label>
          <input
            type="text"
            value={imageLink}
            onChange={(e) => setImageLink(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Giá thành:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Tác giả:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Nhà xuất bản:</label>
          <input
            type="text"
            value={publisher}
            onChange={(e) => setPublisher(e.target.value)}
            required
          />
        </div>
        <button className="create-book-btn" type="submit">
          Create Book
        </button>
      </form>
    </div>
  );
}

export default Book;
