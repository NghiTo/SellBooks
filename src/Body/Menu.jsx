import { useEffect, useState } from "react";
import "./Body.css";
import { Link } from "react-router-dom";
function Menu() {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  const [author, setAuthor] = useState([]);

  useEffect(() => {
    const getAllAuthors = async () => {
      const response = await fetch(`http://localhost:8080/api/v1/authors`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const body = await response.json();
      setAuthor(body);
    };

    getAllAuthors();
  }, []);

  return (
    <>
      <main>
        <div className="menu">
          <div className="menu-item">
            <div className="menu-title">
              <span>Danh mục sản phẩm</span>
              <i></i>
            </div>
            <ul id="cate-main-menu">
              <div>
                <div>
                  <li>
                    <a href="" title="sach ky gui">
                      <img
                        className="icon-cate"
                        src="	https://pos.nvncdn.com/298139-130547/pc/20220904_zln4EYYd1uYusrSDP0308zkf.png"
                        alt=""
                      />
                      SÁCH KÝ GỬI
                    </a>
                  </li>
                  <li>
                    <a title="sach cu moi" href="">
                      <img
                        className="icon-cate"
                        src="	https://pos.nvncdn.com/298139-130547/pc/20220830_A5KJYhM8V1ysWtRK45s20RKV.png"
                        alt=""
                      />
                      SÁCH CŨ & MỚI
                    </a>
                  </li>
                  <li>
                    <a href="">SÁCH ĐẶT TRƯỚC</a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        className="icon-cate"
                        src="https://pos.nvncdn.com/298139-130547/pc/20220915_OMU4uZu5RBsGwubnYzIGNeAJ.png"
                        alt="san pham khac"
                      />
                      SẢN PHẨM KHÁC
                    </a>
                  </li>
                </div>
              </div>
            </ul>
          </div>
          <ul id="main-menu" className="clearfix">
            <li className="author-menu">
              <Link className="product-list" to="/">
                Tác giả
              </Link>
              <ul className="author-option-child d-flex flex-column align-items-center py-2">
                {author.map((author, index) => (
                  <li>
                    <a href="">{author.name}</a>
                  </li>
                ))}
              </ul>
              <ul>
                <li></li>
              </ul>
            </li>
            <li>
              <Link className="product-list" to="/products">
                DANH SÁCH SẢN PHẨM
              </Link>
            </li>
            <li>
              <Link className="product-list">SÁCH MỚI</Link>
            </li>
            <li>
              <Link className="product-list">SÁCH CŨ</Link>
            </li>
            <li>
              <Link className="product-list">Nhà xuất bản</Link>
            </li>
          </ul>
        </div>
        <div>
          <div>
            <div className="item">
              <a href="">
                <img
                  src="https://pos.nvncdn.com/298139-130547/bn/20220907_CjzB00WgHvI5Cow9Gb6qFcfO.png"
                  alt=""
                  sizes="959px"
                  className="img-main"
                />
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="title-product clearfix">
            <h3>
              <a href="/">sản phẩm bán chạy</a>
            </h3>
            <div className="view-all">
              <Link to="/product" className="view-all-link">
                Xem tất cả
              </Link>
            </div>
          </div>
          <div className="owl-product">
            <div className="owl-item">
              <div className="item owl-item">
                <div
                  onMouseEnter={() => setIsHovered1(true)}
                  onMouseLeave={() => setIsHovered1(false)}
                  className="wp-img"
                >
                  <a href="">
                    <img
                      sizes="283px"
                      src="https://pos.nvncdn.com/298139-130547/ps/20240330_A0yOeVcG0s.webp"
                      alt=""
                    />
                  </a>
                  <div
                    style={{ display: isHovered1 ? "initial" : "none" }}
                    className="action"
                  >
                    <a href=""></a>
                    <div className="content">
                      <a className="btn-view" href="">
                        Xem chi tiết
                      </a>
                      <a className="btn-addcart" href="">
                        Cho vào giỏ
                      </a>
                    </div>
                  </div>
                </div>
                <div className="wp-info">
                  <div className="info">
                    <a className="name-product" href="">
                      Trở thành người bán hàng xuất sắc mới 100% HCM.PO Brian
                      Tracy
                    </a>
                  </div>
                  <div className="price">
                    <span>36,000VND</span>
                  </div>
                </div>
              </div>
              <div className="item owl-item">
                <div
                  onMouseEnter={() => setIsHovered2(true)}
                  onMouseLeave={() => setIsHovered2(false)}
                  className="wp-img"
                >
                  <a href="">
                    <img
                      sizes="283px"
                      src="https://pos.nvncdn.com/298139-130547/ps/20231025_WR1jnlzDto.jpeg"
                      alt=""
                    />
                  </a>
                  <div
                    style={{ display: isHovered2 ? "initial" : "none" }}
                    className="action"
                  >
                    <a href=""></a>
                    <div className="content">
                      <Link className="btn-view" to="/detail">
                        Xem chi tiết
                      </Link>
                      <a className="btn-addcart" href="">
                        Cho vào giỏ
                      </a>
                    </div>
                  </div>
                </div>
                <div className="wp-info">
                  <div className="info">
                    <a className="name-product" href="">
                      Bài tập thực hành Tiếng Anh 9
                    </a>
                  </div>
                  <div className="price">
                    <span>54,750VND</span>
                  </div>
                </div>
              </div>
              <div className="item owl-item">
                <div
                  onMouseEnter={() => setIsHovered3(true)}
                  onMouseLeave={() => setIsHovered3(false)}
                  className="wp-img"
                >
                  <a href="">
                    <img
                      sizes="283px"
                      src="https://pos.nvncdn.com/298139-130547/ps/20231025_mMcTX8Ku14.jpeg"
                      alt=""
                    />
                  </a>
                  <div
                    style={{ display: isHovered3 ? "initial" : "none" }}
                    className="action"
                  >
                    <a href=""></a>
                    <div className="content">
                      <Link className="btn-view" to="/detail">
                        Xem chi tiết
                      </Link>
                      <a className="btn-addcart" href="">
                        Cho vào giỏ
                      </a>
                    </div>
                  </div>
                </div>
                <div className="wp-info">
                  <div className="info">
                    <a className="name-product" href="">
                      Bài tập thực hành Tiếng Anh 10
                    </a>
                  </div>
                  <div className="price">
                    <span>63,750VND</span>
                  </div>
                </div>
              </div>
              <div className="item owl-item">
                <div
                  onMouseEnter={() => setIsHovered4(true)}
                  onMouseLeave={() => setIsHovered4(false)}
                  className="wp-img"
                >
                  <a href="">
                    <img
                      sizes="283px"
                      src="https://pos.nvncdn.com/298139-130547/ps/20231021_ivK3zVNpKm.jpeg"
                      alt=""
                    />
                  </a>
                  <div
                    style={{ display: isHovered4 ? "initial" : "none" }}
                    className="action"
                  >
                    <a href=""></a>
                    <div className="content">
                      <a className="btn-view" href="">
                        Xem chi tiết
                      </a>
                      <a className="btn-addcart" href="">
                        Cho vào giỏ
                      </a>
                    </div>
                  </div>
                </div>
                <div className="wp-info">
                  <div className="info">
                    <a className="name-product" href="">
                      Khát Vọng Sống New 100% HCM.PO
                    </a>
                  </div>
                  <div className="price">
                    <span>146,250VND</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Menu;
