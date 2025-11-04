const Footer = () => {
  return (
    <footer className="footer">
      <div className="section footer__content">
        <div className="footer__brand">
          <img src="/assets/brand-mark.svg" alt="HMEL" />
          <p>HMEL Tech Conference · 2025</p>
        </div>
        <div className="footer__links">
          <a href="#schedule">Программа</a>
          <a href="#partners">Партнёры</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className="footer__contacts">
          <a href="mailto:hello@hmel.tech">hello@hmel.tech</a>
          <span>+7 (495) 123-45-67</span>
        </div>
      </div>
      <p className="footer__note">© 2025 HMEL. Создаём технологичные города вместе.</p>
    </footer>
  );
};

export default Footer;
