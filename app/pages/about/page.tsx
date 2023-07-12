import Image from "next/image";
import Link from "next/link";
import styles from "../../../public/assets/styles/page.module.scss";

export default function Page() {
    return (
        <section className={styles.about}>
            {/* <header className="jumbotron"> */}
            <div className="container">
                <div className="row mt-2">
                    <h1 className="display-4">WHO WE ARE</h1>
                </div>
                <div className="row mt-2">
                    <div className="col-md-3">
                        <p className="marketingText lead pb-4 fs-6">We are a creative agency that designs your best products. We help companies and
                            budding startups create or launcg a refreshed brand, website design and a modern visual
                            communications</p>
                    </div>
                    <div className="col-md-3">
                        <p className="marketingText lead pb-4 fs-6">
                            The company is baed in Ruiru, Kenya. We specialize in human-centric digital experiences and
                            improve the products every single day. And together with a team of <b>wachoraji</b>, we come up with
                            mind blowing concepts and help your business reach a new level.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <Image className="img-thumbnail" src="/assets/img/logo/png/logo-color.svg" alt="team" width="30" height="24"></Image>
                    </div>
                </div>
                <div className="row mt-2 mb-2">
                    <div className="col-md text-start">
                        <Link className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                            href="/pages"><span className="navbar-toggler-icon"></span>MAIN</Link>
                    </div>
                    <div className="col-md text-end">
                        <Link className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                            href="/pages/portfolio"><span className="navbar-toggler-icon"></span>WHAT WE DO</Link>
                    </div>
                </div>
            </div>
            {/* </header> */}
        </section>
    )
}