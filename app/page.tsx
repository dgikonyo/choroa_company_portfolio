import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <main className="main">
      <section className="hero-section">
        <Navbar />
        <div className="hero">
          <div className="container-fluid">
            <div className="row">
              <div className="hero-main-text col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <p>
                  Building Projects <br></br>For the Future
                </p>
              </div>
            </div>
            <div className="row">
              <div className="hero-text col-xs-12 col-sm-6 offset-md-6 col-md-6 col-lg-6">
                <p className="text-paragraph">
                  We are a group of people who innovate fearlessly and make a
                  lasting impact through creativity and fun.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-us-section">
        <div className="about-us-main">
          <div className="container-fluid">
            <div className="row">
              <div className="about-us-title col-12">
                <p className="title">What We Do</p>
              </div>
            </div>
            <div className="row">
              <div className="about-us-description col-12">
                <p className="description">
                  We are passionate builders crafting the future, project by innovative project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="projects"></section>
      <section className="contact-us"></section>
      {/* <Footer /> */}
    </main>
  );
}
