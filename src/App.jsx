// ...existing code...
import "./App.css";

function App() {
  // Hiệu ứng icon rơi
  const icons = ["🎓", "✨", "🎉", "🥳", "📜", "🌟"];
  // Icon rơi linh hoạt: random left, rotate, translateX, tốc độ khác nhau
  const Rain = () => (
    <div className="icon-rain">
      {Array.from({ length: 30 }).map((_, i) => {
        const left = Math.random() * 100;
        const rotate = Math.random() * 360;
        const translateX = Math.random() * 40 - 20;
        const duration = Math.random() * 2 + 3; // 3-5s
        const delay = Math.random() * 3;
        const fontSize = Math.random() * 1.5 + 1.5;
        return (
          <span
            key={i}
            className="rain-icon"
            style={{
              left: `${left}%`,
              fontSize: `${fontSize}rem`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              transform: `rotate(${rotate}deg) translateX(${translateX}px)`,
            }}
          >
            {icons[Math.floor(Math.random() * icons.length)]}
          </span>
        );
      })}
    </div>
  );

  return (
    <div className="graduation-invite">
      <Rain />
      <nav className="menu">
        <ul>
          <li>
            <a href="#banner">Trang chủ</a>
          </li>
          <li>
            <a href="#info">Thông tin</a>
          </li>
          <li>
            <a href="#story">Khoảnh khắc</a>
          </li>
          <li>
            <a href="#confirm">Xác nhận</a>
          </li>
        </ul>
      </nav>
      <section className="banner" id="banner">
        <h1>🎓 Lễ Tốt Nghiệp 2025 🎉</h1>
        <p className="banner-desc">
          Trân trọng kính mời bạn đến dự lễ nhận bằng tốt nghiệp - khoảnh khắc
          đánh dấu một hành trình mới!
        </p>
      </section>
      <section className="info" id="info">
        <h2>Thông tin sự kiện</h2>
        <ul>
          <li>
            <strong>Thời gian:</strong> 8:00 AM, 08/08/2025
          </li>
          <li>
            <strong>Địa điểm:</strong> Hội trường lớn, Trường Đại học Meme🐧🤡
          </li>
          <li>(Đùa thôi: Đại Học Công Nghiệp Quảng Ninh)</li>
          <li>
            <strong>Dress code:</strong> Lịch sự, tươi vui, sẵn sàng selfie!
          </li>
        </ul>
      </section>
      <section className="story" id="story">
        <h2>Khoảnh khắc đáng nhớ</h2>
        <p>
          Hành trình học tập đã kết thúc, nhưng những kỷ niệm và tình bạn sẽ còn
          mãi. Hãy cùng nhau tạo thêm những khoảnh khắc vui nhộn, chia sẻ câu
          chuyện tốt nghiệp và nhận bằng trong không khí rộn ràng!
        </p>
      </section>
      <section className="joke">
        <h2>Góc vui tốt nghiệp</h2>
        <blockquote>
          "Bằng tốt nghiệp là tấm vé vào đời, nhưng buổi nhận bằng là bữa tiệc
          của những nụ cười!"
        </blockquote>
        <blockquote>
          "Đến nhận bằng, đừng quên mang theo tinh thần ăn uống và chụp hình
          sống ảo!"
        </blockquote>
      </section>
      <section className="confirm" id="confirm">
        <h2>Xác nhận tham dự</h2>
        <button
          className="confirm-btn"
          onClick={() =>
            window.open(
              "https://www.facebook.com/messages/t/hoang.van.thach.382516",
              "_blank"
            )
          }
        >
          Tôi sẽ tham dự 🎉
        </button>
        <p className="note">
          Hãy xác nhận để chúng tôi chuẩn bị chu đáo cho bạn!
        </p>
      </section>
      {/* Thiệp mời phong cách thiệp cưới */}
      <section className="wedding-card">
        <div className="card-border">
          <div className="card-flower card-flower-top"></div>
          <div className="card-flower card-flower-bottom"></div>
          <div className="card-flower card-flower-left"></div>
          <div className="card-flower card-flower-right"></div>
          <div className="card-content">
            <div className="card-header">TOGETHER WITH THEIR FAMILIES</div>
            <div className="card-names">
              <span
                className="groom"
                style={{
                  fontFamily: "Great Vibes, cursive",
                  fontSize: "2.2rem",
                  fontWeight: 700,
                  color: "#e0b973",
                  letterSpacing: "1px",
                }}
              >
                Hoàng Văn Thạch
              </span>
              <span
                className="and"
                style={{
                  fontFamily: "Great Vibes, cursive",
                  fontSize: "2.2rem",
                  color: "#fff",
                  margin: "0 0.3rem",
                }}
              >
                {" "}
                &amp;{" "}
              </span>
              <span
                className="bride"
                style={{
                  fontFamily: "Great Vibes, cursive",
                  fontSize: "2.2rem",
                  fontWeight: 700,
                  color: "#e0b973",
                  letterSpacing: "1px",
                }}
              >
                Tốt Nghiệp
              </span>
            </div>
            <div className="card-invite">
              <span
                style={{
                  fontFamily: "Dancing Script, Pacifico, cursive",
                  fontSize: "1.3rem",
                  fontWeight: 600,
                  color: "#fff",
                  letterSpacing: "0.5px",
                  textShadow: "0 1px 4px #1a2340",
                }}
              >
                Trân trọng kính mời bạn đến dự lễ nhận bằng tốt nghiệp
              </span>
            </div>
            <div className="card-details">
              <div className="card-row">
                <span className="card-label">FRIDAY</span>
                <span className="card-date">08</span>
                <span className="card-label">AUG</span>
                <span className="card-time">AT 8:00 AM</span>
              </div>
              <div className="card-row card-address">
                <span
                  style={{
                    fontFamily: "Montserrat, Arial, sans-serif",
                    fontWeight: 600,
                    color: "#fff",
                    letterSpacing: "0.5px",
                  }}
                >
                  Hội trường lớn, Đại Học Công Nghiệp Quảng Ninh
                </span>
              </div>
            </div>
            <div className="card-footer">
              Hãy cùng chúng tôi tạo nên những kỷ niệm tuyệt vời trong ngày đặc
              biệt này!
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <p>Chúc mừng tất cả tân cử nhân! Hẹn gặp bạn tại lễ tốt nghiệp!</p>
      </footer>
    </div>
  );
}

export default App;
