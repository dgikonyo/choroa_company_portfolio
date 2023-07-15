import Image from "next/image";
import styles from "../../public/assets/styles/page.module.scss";
import Link from "next/link";

export default function Navbar() {
  return (
    <section className={styles.Navbar}>
      <nav className="navbar">
        <div className="container-fluid">
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
      </nav>
    </section>
  );
}
