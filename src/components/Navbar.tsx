import Link from "next/link";
import styles from "../styles/style.module.css";

export default function Navbar() {
  return (
    <section className={styles.navbar}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <Link className="col-md-8 navbar-brand" href="/">
            Choroa Design Studios
          </Link>
          <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
          <div
            className="row collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto col-md-4">
              <li className="nav-item">
                <p>EN</p>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="contact-us.html">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
