import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAfrica } from "@fortawesome/free-solid-svg-icons";
import "../../public/assets/styles/global.css";

export default function Footer() {
  return (
    <section className="footer-section">
      <footer className="footer-items row">
        <div className="col-12">
          <p className="footer-africa-text">
            Made with love from{" "}
            <span>
              <FontAwesomeIcon className="nav-icon" icon={faEarthAfrica} />
            </span>
          </p>
        </div>

        <div className="col-12">
          <p className="footer-choroa-text">© 2023 Choroa Design Studios</p>
        </div>
      </footer>
    </section>
  );
}
