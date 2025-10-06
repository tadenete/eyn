import Consultation from "../contact/consultation";
import ContactForm from "../contact/contact-form";

function ContactUs() {
  return (
    <section className="section-spacing eyn-bg-light" id="contact">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center mb-5">
            <h2 className="display-5 fw-bold eyn-primary mb-4">Get In Touch</h2>
            <p className="lead text-muted">
              Ready to transform your technology infrastructure? Let's discuss your project needs.
            </p>
          </div>
        </div>
        <div className="row g-5">
          <div className="col-lg-6">
            <ContactForm />
          </div>
          <div className="col-lg-6">
            <Consultation />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
