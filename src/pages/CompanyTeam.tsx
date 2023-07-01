import styles from '../styles/style.module.css'

export default function CompanyTeam() {
    return (
        <section className={styles.companyTeam}>
            <header className="jumbotron">
                <div className="container">
                    <h1 className="display-3">OUR TEAM</h1>
                    <div className="row">

                        <p className="lead pb-4">for we are the many</p>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <a className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                                href="portfolio"><span className="navbar-toggler-icon"></span>WHAT
                                WE
                                DO</a>
                        </div>
                        <div className="col-md-2">
                            <a className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                                href="contact-us"><span className="navbar-toggler-icon"></span>CONTACT US</a>
                        </div>
                    </div>
                </div>
            </header>
        </section>
    )
}