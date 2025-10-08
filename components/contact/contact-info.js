export default function ContactInfo() {
  return (
    <section className="dc-location-background">
      <div className="container dc-location-content">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center mb-5">
            <h2 className="display-5 fw-bold mb-4">Get In Touch</h2>
            <p className="lead">
              Reach out to us through any of the following channels
            </p>
          </div>
        </div>
        
        <div className="row g-4">
          <div className="col-lg-6 col-md-6">
            <div className="card h-100 border-0 shadow-lg text-center bg-white bg-opacity-95">
              <div className="card-body p-4">
                <div className="mb-3">
                  <div className="rounded-circle bg-primary bg-opacity-10 d-inline-flex align-items-center justify-content-center" style={{width: '70px', height: '70px'}}>
                    <i className="fas fa-envelope eyn-primary" style={{fontSize: '2rem'}}></i>
                  </div>
                </div>
                <h5 className="eyn-primary mb-3">Email Us</h5>
                <p className="text-muted mb-3">Send us a message and we&apos;ll get back to you within 24 hours</p>
                <a href="mailto:info@eynsolutions.com" className="btn btn-outline-primary">
                  info@eynsolutions.com
                </a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6 col-md-6">
            <div className="card h-100 border-0 shadow-lg text-center bg-white bg-opacity-95">
              <div className="card-body p-4">
                <div className="mb-3">
                  <div className="rounded-circle bg-primary bg-opacity-10 d-inline-flex align-items-center justify-content-center" style={{width: '70px', height: '70px'}}>
                    <i className="fas fa-map-marker-alt eyn-primary" style={{fontSize: '2rem'}}></i>
                  </div>
                </div>
                <h5 className="eyn-primary mb-3">Visit Us</h5>
                <p className="text-muted mb-3">Located in the heart of Washington, DC</p>
                <address className="text-muted">
                  916 Pennsylvania Ave SE<br />
                  Suite 201<br />
                  Washington, DC 20003
                </address>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
