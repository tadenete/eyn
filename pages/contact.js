import { Fragment } from "react";
import Head from "next/head";
import ContactHero from "../components/contact/contact-hero";
import ContactForm from "../components/contact/contact-form";
import ContactInfo from "../components/contact/contact-info";
import Consultation from "../components/contact/consultation";
import Footer from "../components/layout/footer";

function Contact(props) {
  return (
    <Fragment>
      <Head>
        <title>Contact Us - EYN Solutions LLC</title>
        <meta
          name="description"
          content="Contact EYN Solutions LLC for technology consulting, software development, and IT solutions. Located in Washington DC. Free consultation available."
        />
      </Head>
      <ContactHero />
      <ContactInfo />
      <div className="section-spacing eyn-bg-light">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <ContactForm />
            </div>
            <div className="col-lg-6">
              <Consultation />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default Contact;
