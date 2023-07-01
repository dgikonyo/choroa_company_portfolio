import Image from "next/image";
import Link from "next/link";
import styles from "../styles/style.css";

export default function AboutUs() {
    return (
        <section className={styles.aboutUs}>
            <header className="jumbotron">
                <div className="container">
                    <h1 className="display-3">WHO WE ARE</h1>
                    <div className="row">
                        <div className="col-md-4">
                            <p className="lead pb-4">
                                We are a creative agency that designs your best products. We
                                help companies and budding startups create or launcg a refreshed
                                brand, website design and a modern visual communications
                            </p>
                        </div>
                        <div className="col-md-4">
                            <Image
                                className="img-thumbnail"
                                src="/img/jess-bailey-l3N9Q27zULw-unsplash.jpg"
                                alt="team"
                            ></Image>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <Link
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                                href="/"
                            >
                                <span className="navbar-toggler-icon"></span>MAIN
                            </Link>
                        </div>
                        <div className="col-md-2">
                            <Link
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                                href="portfolio"
                            >
                                <span className="navbar-toggler-icon"></span>WHAT WE DO
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </section>
    );
}
