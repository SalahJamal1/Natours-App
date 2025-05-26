import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <img
        src="/img/logo-green.png"
        alt="footer-logo"
        className="footer-logo"
      />
      <p className="footer_text">
        © {new Date().getFullYear()} by Salah abu-farha.
      </p>
    </footer>
  );
}

export default Footer;
