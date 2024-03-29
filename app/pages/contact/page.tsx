import Link from "next/link";
import styles from "../../../public/assets/styles/page.module.scss";

export default function Page() {
    return (
        <section className={styles.contact}>
            {/* <div className="jumbotron"> */}
            <div className="container">
                <h1 className="display-4">CONTACT US</h1>
                <div className="row">
                    <div className="col-md-4">
                        <form>
                            <fieldset disabled>
                                <legend>Want to discuss your Project?</legend>
                                <div className="mb-3">
                                    <input type="text" id="disabledTextInput" className="form-control" placeholder="Full Name"
                                        required />
                                </div>

                                <div className="mb-3">
                                    <input type="text" id="disabledTextInput" className="form-control" placeholder="Email"
                                        required />
                                </div>
                                <div className="mb-3">
                                    <select id="disabledSelect" className="form-select">
                                        <option>Select project type</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary">Send Message</button>
                            </fieldset>
                        </form>
                    </div>

                    <div className="col-md-4">
                        <div>
                            <h3>LOCATION</h3>
                            <ul>
                                <li>Nairobi, Kenya</li>
                            </ul>
                        </div>
                        <div>
                            <h3>PHONE</h3>
                            <p>07** *** ***</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div>
                            <h3>EMAIL</h3>
                            <p>choroadesignstudios@email.com</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="rightPageLink col-md">
                        <Link className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                            href="/pages/team"><span className="navbar-toggler-icon"></span>OUR TEAM</Link>
                    </div>
                 </div>
            </div>
            {/* </div> */}
        </section>
    )
}