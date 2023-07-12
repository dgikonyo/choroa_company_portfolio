import Link from "next/link";
import styles from "../../../public/assets/styles/page.module.scss";

export default function Page() {
    return (
        <section className={styles.homePage}>
            <div className="container container-fluid">
                <header className="carousel mt-2">
                    <div className="row">
                        <p className="display-4">WE CREATE</p>
                        <p className="display-4 ms-5"><span id="best-span">BEST</span> DIGITAL</p>
                        <p className="display-4">PRODUCTS</p>
                    </div>
                </header> 
                <div className="row mt-2 mb-5">
                    <div className="col-md text-start">
                        <Link className="navbar-toggler " type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation" href="/about-us.html"><span
                                className="navbar-toggler-icon"></span>DISCUSS THE PROJECT</Link>
                    </div>
                    <div className="col-md text-end">
                        <Link className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation" href="/pages/about"><span
                                className="navbar-toggler-icon"></span>WHO ARE WE</Link>
                    </div>
                </div>
                <div className="row mt-2 mb-5">
                    <div className="col-md">
                        <p>WE ARE THE LEADERS IN WEB & MOBILE DESIGN AND THE DEVELOPMENT INDUSTRY</p>
                    </div>
                    <div className="col-md">
                        <p>We create quality content and cool ideas.We create websites applications, 3D motion
                            design
                            and
                            animation. We bring the most ideas into life</p>
                    </div>
                </div>
            </div>
        </section>
    )
}