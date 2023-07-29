import Link from "next/link";
import styles from "../../../public/assets/styles/page.module.scss";

export default function Page() {
    return (
        <section className={styles.team}>
            <div className="container">
                <h1 className="display-4">OUR TEAM</h1>
                <div className="row mt-2 mb-5">

                    <p className="lead pb-4">for we are the many</p>
                </div>

                <div className="row mt-2 mb-5">
                    <div className="col-md text-start">
                        <Link className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                            href="/pages/portfolio"><span className="navbar-toggler-icon"></span>WHAT WE DO</Link>
                    </div>
                    <div className="col-md text-end">
                        <Link className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                            href="/pages/contactUs"><span className="navbar-toggler-icon"></span>CONTACT US</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}