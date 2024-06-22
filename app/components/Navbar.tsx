import Image from "next/image";
import styles from "../../public/assets/styles/page.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEarthAfrica } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <section className="navbar-section">
      <nav className="navbar">
        <div className="container-fluid">
          <div className="col-xs-8">
            <p className="navbar-brand" href="/">Choroa
            </p>
          </div>
          <div className="col-xs-4">
            <ul className="nav">
              <li className="nav-item">
                <Link
                  href="https://www.linkedin.com/in/gikonyo-kimani-05328211b/"
                  className="nav-link px-2 text-body-secondary"
                >
                  <span>
                    <FontAwesomeIcon
                      className="nav-icon"
                      icon={faLinkedin}
                      size="2xl"
                      shake
                    />
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="https://github.com/dgikonyo"
                  className="nav-link px-2 text-body-secondary"
                >
                  <span>
                    <FontAwesomeIcon
                      className="nav-icon"
                      icon={faGithub}
                      size="2xl"
                      spinPulse
                    />
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
