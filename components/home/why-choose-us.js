import Link from "next/link";

export default function WhyChooseUs() {
  return (
    <section className="section-spacing section-with-pattern">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center mb-5">
            <h2 className="display-5 fw-bold eyn-primary mb-4">Why Choose EYN Solutions?</h2>
            <p className="lead text-muted">
              Our commitment to excellence, reliability, and client success sets us apart in the technology consulting industry
            </p>
          </div>
        </div>
        
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="mb-4">
                  <div className="rounded-circle bg-primary bg-opacity-10 d-inline-flex align-items-center justify-content-center" style={{width: '80px', height: '80px'}}>
                    <i className="fas fa-certificate eyn-primary" style={{fontSize: '2rem'}}></i>
                  </div>
                </div>
                <h4 className="eyn-primary mb-3">CBE Certified</h4>
                <p className="text-muted">
                  As a Certified Business Enterprise, we bring added value with compliance, efficiency, and deep understanding of local procurement requirements.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="mb-4">
                  <div className="rounded-circle bg-primary bg-opacity-10 d-inline-flex align-items-center justify-content-center" style={{width: '80px', height: '80px'}}>
                    <i className="fas fa-chart-line eyn-primary" style={{fontSize: '2rem'}}></i>
                  </div>
                </div>
                <h4 className="eyn-primary mb-3">18+ Years Experience</h4>
                <p className="text-muted">
                  Our dedicated team brings decades of combined expertise in technology consulting and IT solutions for government and commercial sectors.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="mb-4">
                  <div className="rounded-circle bg-primary bg-opacity-10 d-inline-flex align-items-center justify-content-center" style={{width: '80px', height: '80px'}}>
                    <i className="fas fa-shield-alt eyn-primary" style={{fontSize: '2rem'}}></i>
                  </div>
                </div>
                <h4 className="eyn-primary mb-3">Security First</h4>
                <p className="text-muted">
                  Strong commitment to security and data integrity with comprehensive compliance support and vulnerability management.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6 col-md-6">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="mb-4">
                  <div className="rounded-circle bg-primary bg-opacity-10 d-inline-flex align-items-center justify-content-center" style={{width: '80px', height: '80px'}}>
                    <i className="fas fa-cogs eyn-primary" style={{fontSize: '2rem'}}></i>
                  </div>
                </div>
                <h4 className="eyn-primary mb-3">Agile Solutions</h4>
                <p className="text-muted">
                  Agile and scalable solutions customized to client needs with proven track record of successful implementations.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6 col-md-6">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="mb-4">
                  <div className="rounded-circle bg-primary bg-opacity-10 d-inline-flex align-items-center justify-content-center" style={{width: '80px', height: '80px'}}>
                    <i className="fas fa-handshake eyn-primary" style={{fontSize: '2rem'}}></i>
                  </div>
                </div>
                <h4 className="eyn-primary mb-3">Client Success</h4>
                <p className="text-muted">
                  Your success is our success. We are dedicated to helping our clients achieve their business objectives through technology.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row mt-5">
          <div className="col-lg-8 mx-auto text-center">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h4 className="eyn-primary mb-3">Ready to Get Started?</h4>
                <p className="text-muted mb-4">
                  Contact us today for a free consultation and discover how EYN Solutions can help transform your technology infrastructure.
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <Link href="/contact" className="btn btn-primary btn-lg">
                    Get Free Consultation
                  </Link>
                  <Link href="/services" className="btn btn-outline-primary btn-lg">
                    View Our Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


