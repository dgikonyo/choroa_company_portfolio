import Link from "next/link";
import styles from "../styles/style.css";

export default function HomePage() {
  return (
    <section className={styles.homePage}>
      <div className="jumbotron jumbotron-fluid">
        <div className="container container-fluid">
          <header id="carousel">
            <div className="row">
              <p className="display-3">WE CREATE</p>
              <p className="display-3">BEST DIGITAL</p>
              <p className="display-3">PRODUCTS</p>
            </div>
          </header>
          <div className="row">
            <div className="col-md">
              <Link
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                href="about-us"
              >
                <span className="navbar-toggler-icon"></span>WHO ARE WE
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md">
            <p>
              WE ARE THE LEADERS IN WEB & MOBILE DESIGN AND THE DEVELOPMENT
              INDUSTRY
            </p>
          </div>
          <div className="col-md">
            <p>
              We create quality content and cool ideas.We create websites
              applications, 3D motion design and animation. We bring the most
              ideas int life
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
