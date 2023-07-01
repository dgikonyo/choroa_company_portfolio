export default function ContactUs() {
    return (
        <section id="contact-us">
            <header className="jumbotron">
                <div className="container">
                    <h1 className="display-3">CONTACT US</h1>
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
                            <div>
                                <h3>SOCIAL</h3>
                                <ul>
                                    <li><a>Twitter</a></li>
                                    <li><a>LinkedIn</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-2">
                            <a className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                                href="our-team"><span className="navbar-toggler-icon"></span>OUR TEAM</a>
                        </div>
                        <div className="col-md-2">
                            <p>&copy;Choroa 2023</p>
                        </div>
                    </div>
                </div>
            </header>
        </section>
    )
}