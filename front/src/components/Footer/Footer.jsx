import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="box-footer">
        <p className="footer-text">
          ¡Ponte en contacto a traves de nuestras redes!
        </p>
        <div className="box-redes">
          <a className="insta" href="">
            {<FaInstagram />}
          </a>
          <a className="face" href="">
            {<FaFacebook />}
          </a>
          <a className="wap" href="">
            {<FaWhatsapp />}
          </a>
        </div>
        <p className="footer-text">&copy;2024 - TumiTaller | Ignacio Tumini</p>
      </div>
    </>
  );
};

export default Footer;
