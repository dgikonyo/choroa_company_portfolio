import Image from "next/image";
import styles from "../../public/assets/styles/page.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEarthAfrica } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <section className={styles.Navbar}>
      <nav className="navbar">
        <div className="container-fluid">
          <div className="col-xs-8">
            <Link className="navbar-brand" href="/">
              <Image
                src="/assets/img/logo/svg/logo-no-background.svg"
                alt="Choroa Design Studios"
                width={92}
                height={30}
                className="d-inline-block align-text-top"
                quality={100}
              ></Image>
            </Link>
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
                      icon={faLinkedin}
                      style={{ color: "#636365" }}
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
                      icon={faGithub}
                      style={{ color: "#636365" }}
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
