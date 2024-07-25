import React, { useEffect, useState } from "react";
import "./Footer.css";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      <footer className="clearfix">
        <div className="footer-top">
          <div className="wrapper">
            <div className="footer-top-main">
              <div className="title">KINH NGHIỆM BÁN HÀNG</div>
              <ul>
                <li>
                  <a href="">
                    <span style={{ color: "#ffffff" }}>
                      Kiến thức marketing online
                    </span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span style={{ color: "#ffffff" }}>
                      Kinh nghiệm xử lý đơn hàng online
                    </span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span style={{ color: "#ffffff" }}>
                      Kinh nghiệm quản lý kho
                    </span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span style={{ color: "#ffffff" }}>
                      Kinh nghiệm quản lý website
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-top-main">
              <div className="title">HỖ TRỢ KHÁCH HÀNG</div>
              <ul>
                <li>
                  <a href="">
                    <span style={{ color: "#ffffff" }}>Chính sách đổi trả</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span style={{ color: "#ffffff" }}>Chính sách bảo mật</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span style={{ color: "#ffffff" }}>Chính sách dịch vụ</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span style={{ color: "#ffffff" }}>
                      Chính sách vận chuyển
                    </span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span style={{ color: "#ffffff" }}>
                      Chính sách thanh toán
                    </span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span style={{ color: "#ffffff" }}>
                      Chính sách bảo hành
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column">
          <div className="footer-center">
            <div className="wrapper2">
              <div className="footer-info-title">
                <h4>Sách cũ giá rẻ - Sàn thương mại sách cũ</h4>
              </div>
              <div className="contact">
                <div className="address">
                  <div className="title">Hồ Chí Minh</div>
                  <div className="item">
                    <p>
                      737/12 Lạc Long Quân, Phường 10, Quận Tân Bình, TP.HCM
                    </p>
                    <strong>MR.BÌNH 987654321</strong>
                  </div>
                </div>
                <div className="address">
                  <div className="title">Hà Nội</div>
                  <div className="item">
                    <p>7số 17 ngõ 137 Đại Mỗ, Nam Từ Liêm, Hà Nội</p>
                    <strong>MR.NGHỊ 0123456789</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="cover">
              <div className="footer-bottom-title">
                <div className="footer-bottom-item">
                  Đăng ký email nhận khuyến mãi
                </div>
                <form className="form-newletter" action="">
                  <input type="email" placeholder="Nhập email của bạn" />
                  <button className="btn-danger">Đăng ký</button>
                </form>
              </div>
              <div className="footer-bottom-title">
                <div className="footer-bottom-item">Phương thức thanh toán</div>
                <div className="item-bank">
                  <a href="">
                    <img
                      src="https://sachcugiare.com/tp/T0308/img/bank-1.png"
                      alt=""
                    />
                  </a>
                  <a href="">
                    <img
                      src="https://sachcugiare.com/tp/T0308/img/bank-2.png"
                      alt=""
                    />
                  </a>
                  <a href="">
                    <img
                      src="https://sachcugiare.com/tp/T0308/img/bank-3.png"
                      alt=""
                    />
                  </a>
                  <a href="">
                    <img
                      src="https://sachcugiare.com/tp/T0308/img/bank-4.png"
                      alt=""
                    />
                  </a>
                  <a href="">
                    <img
                      src="https://sachcugiare.com/tp/T0308/img/bank-5.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="footer-bottom-title">
                <div className="footer-bottom-item">Kết nối với chúng tôi</div>
                <div className="contact-item">
                  <a href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div
        onClick={scrollToTop}
        id="btn-top"
        className={`scroll-to-top-button ${isVisible ? "visible" : "hidden"}`}
      >
        <img
          src="https://web.nvnstatic.net/tp/T0308/img/backToTop.png?v=3"
          alt=""
        />
      </div>
    </>
  );
}

export default Footer;
