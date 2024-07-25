import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { getBookById } from "../CallApi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/cartSlice";

function Detail() {
  const [searchParams] = useSearchParams();

  const { isAuthenticated } = useSelector((state) => state.auth);

  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [year, setYear] = useState(0);
  const [book, setBook] = useState(null);
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const bookId = searchParams.get("id");
        const response = await getBookById(bookId);
        setUrl(response.urlImage);
        setTitle(response.title);
        setPrice(response.price);
        setDescription(response.description);
        setQuantity(response.quantity);
        setYear(response.publicationYear);
        setAuthor(response.author);
        setPublisher(response.publisher);
        setBook(response);
      } catch (error) {
        console.error("Failed to fetch book details:", error);
      }
    };

    fetchBook();
  }, [searchParams]);

  const dispatch = useDispatch();

  const buyNow = (book) => {
    if (isAuthenticated) {
      dispatch(
        addToCart({
          id: book.id,
          title: book.title,
          price: Number(book.price),
          quantity: 1,
          url: book.urlImage,
        })
      );
      navigate("/cart");
    } else {
      if (window.confirm("Bạn chưa đăng nhập. Vui lòng đăng nhập")) {
        navigate("/login");
      }
    }
  };

  const handleAddToCart = () => {
    if (isAuthenticated) {
      dispatch(
        addToCart({
          id: book.id,
          title: book.title,
          price: Number(book.price),
          quantity: 1,
          url: book.urlImage,
        })
      );
      alert("Đã thêm sản phẩm vào giỏ hàng");
    } else {
      if (window.confirm("Bạn chưa đăng nhập. Vui lòng đăng nhập")) {
        navigate("/login");
      }
    }
  };

  return (
    <>
      <div className="row mt-4 mx-3">
        <div className="img-product pl-2 col-lg-4">
          <div id="show">
            <img src={url} alt="" />
          </div>
        </div>
        <div className="tab-detail-product pr-2 pl-2 col-lg-5">
          <div className="product-name">
            <h1>{title}</h1>
          </div>
          <div className="box-price">
            <span className="span">{price} VNĐ</span>
            <div className="discount">Giảm 25%</div>
          </div>
          <div className="stock-brand">
            <ul>
              <li className="d-flex">
                <span>Tình trạng:</span>
                {quantity > 0 ? (
                  <span className="a-stock">Còn hàng</span>
                ) : (
                  <span className="b-stock">Hết hàng</span>
                )}
              </li>
              <li className="d-flex">
                <span>Tác giả:</span>
                <span className="data-detail ml-2">{author}</span>
              </li>
              <li className="d-flex">
                <span>Nhà xuất bản:</span>
                <span className="data-detail ml-2">{publisher}</span>
              </li>
              <li className="d-flex">
                <span>Năm xuất bản:</span>
                <span className="data-detail ml-2">{year}</span>
              </li>
            </ul>
          </div>
          <div className="btn-add-cart">
            <button onClick={() => buyNow(book)} id="addToCart">
              Mua ngay
            </button>
            <button onClick={handleAddToCart} id="addQuickCart">
              Thêm vào giỏ
            </button>
          </div>
        </div>
        <div className="col-lg-3 d-lg-block d-none">
          <div className="box-policy">
            <div className="ship-policy">
              <p>Giao hàng từ 3-5 ngày không bao gồm Chủ nhật</p>
            </div>
            <div className="payment-policy">
              Đổi, Trả, Hoàn tiền trong 2 ngày kể từ ngày nhận hàng
            </div>
            <div className="group-policy">
              Tham gia HỘI VIÊN để nhận được nhiều ưu đãi
            </div>
            <div className="contact-policy">
              Liên hệ CTV hỗ trợ hoặc 093.133.56.34 (Mr.Hùng)
            </div>
          </div>
        </div>
      </div>
      <div className="my-4 mx-3">
        <h2>Mô tả sản phẩm:</h2>
        <p className="">{description}</p>
      </div>
    </>
  );
}

export default Detail;
