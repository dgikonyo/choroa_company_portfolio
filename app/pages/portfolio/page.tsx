import Image from "next/image";
import Link from "next/link";
import styles from "../../../public/assets/styles/page.module.scss";

export default function Page() {
  return (
    <section className={styles.portfolio}>
      <div className="container">
        <div className="row mt-2">
          <h1 className="display-4">WHAT WE DO</h1>
        </div>
        <div className="row mt-2">
          <div className="col col-mb card mx-3">
            <Image
              src="../assets/img/logo/svg/logo-color.svg"
              className="card-img-top"
              alt="..."
              width="30"
              height="24"
            ></Image>
            <div className="card-body">
              <p className="card-text">BRANDING</p>
            </div>
          </div>

          <div className="col col-mb card mx-3">
            <Image
              src="../assets/img/logo/svg/logo-color.svg"
              className="card-img-top"
              alt="..."
              width="30"
              height="24"
            ></Image>
            <div className="card-body">
              <p className="card-text">GRAPHIC DESIGN</p>
            </div>
          </div>

          <div className="col col-mb card mx-3">
            <Image
              src="../assets/img/logo/svg/logo-color.svg"
              className="card-img-top"
              alt="..."
              width="30"
              height="24"
            ></Image>
            <div className="card-body">
              <p className="card-text">3D DESIGN</p>
            </div>
          </div>

          <div className="col col-mb card mx-3">
            <Image
              src="../assets/img/logo/svg/logo-color.svg"
              className="card-img-top"
              alt="..."
              width="30"
              height="24"
            ></Image>
            <div className="card-body">
              <p className="card-text">UI/UX DESIGN</p>
            </div>
          </div>
        </div>

        <div className="row mt-2 mb-5">
          <div className="col-md text-start">
            <Link
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              href="/pages/about"
            >
              <span className="navbar-toggler-icon"></span>WHO ARE WE
            </Link>
          </div>
          <div className="col-md text-end">
            <Link
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              href="/pages/team"
            >
              <span className="navbar-toggler-icon"></span>OUR TEAM
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
