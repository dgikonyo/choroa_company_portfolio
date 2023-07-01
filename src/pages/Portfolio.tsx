import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
    return (
        <section id="portfolio">
            <header className="jumbotron">
                <div className="container">
                    <h1 className="display-3">WHAT WE DO</h1>
                    <div className="row">
                        <div className="col-mb-auto card">
                            <Image src="/img/hero-image.webp" className="card-img-top" alt="..."></Image>
                                <div className="card-body">
                                    <p className="card-text">BRANDING</p>
                                </div>
                        </div>

                        <div className="col-mb-auto card">
                            <Image src="/img/hero-image.webp" className="card-img-top" alt="..."></Image>
                                <div className="card-body">
                                    <p className="card-text">GRAPHIC DESIGN</p>
                                </div>
                        </div>

                        <div className="col-mb-auto card">
                            <Image src="/img/hero-image.webp" className="card-img-top" alt="..."></Image>
                                <div className="card-body">
                                    <p className="card-text">3D DESIGN</p>
                                </div>
                        </div>

                        <div className="col-mb-auto card">
                            <Image src="/img/hero-image.webp" className="card-img-top" alt="..."></Image>
                                <div className="card-body">
                                    <p className="card-text">UI/UX DESIGN</p>
                                </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-2">
                            <Link className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                                href="about-us"><span className="navbar-toggler-icon"></span>WHO ARE WE</Link>
                        </div>
                        <div className="col-md-2">
                            <Link className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                                href="our-team"><span className="navbar-toggler-icon"></span>OUR TEAM</Link>
                        </div>
                    </div>
                </div>
            </header>
        </section>
    )
}