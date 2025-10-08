import Link from "next/link";

export default function Hero() {
  return (
    <section className="section-spacing text-center hero-background">
      <div className="container hero-content">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <h1 className="display-4 fw-bold eyn-primary mb-4">
              Welcome to EYN Solutions
            </h1>
            <p className="lead mb-4">
              EYN Solutions LLC is a <strong>CBE-certified, Washington, D.C.-based IT solutions provider</strong> specializing in 
              software development, data management, and cybersecurity.
            </p>
            <p className="lead mb-5">
              As a trusted <strong>Certified Business Enterprise (CBE)</strong>, we deliver innovative, scalable, and secure 
              technology solutions tailored to meet the unique needs of government agencies, private enterprises, and nonprofit organizations.
            </p>
            
            <div className="mb-5">
              <Link href="/about" className="btn btn-primary btn-lg me-3 mb-3">
                Learn More About Us
              </Link>
              <Link href="/contact" className="btn btn-outline-primary btn-lg mb-3">
                Get Free Consultation
              </Link>
            </div>
            
            <div className="row g-4 mt-5">
              <div className="col-lg-4 col-md-6">
                <Link href="/services" className="text-decoration-none">
                  <div className="card h-100 text-center border-0 shadow-sm hover-card">
                    <div className="card-body">
                      <div className="mb-3">
                        <div className="rounded-circle bg-primary bg-opacity-10 d-inline-flex align-items-center justify-content-center" style={{width: '60px', height: '60px'}}>
                          <i className="fas fa-code eyn-primary" style={{fontSize: '1.5rem'}}></i>
                        </div>
                      </div>
                      <h5 className="eyn-primary mb-3">Software Development</h5>
                      <p className="text-muted small mb-0">Custom software solutions, application development, and system integration</p>
                    </div>
                  </div>
                </Link>
              </div>
              
              <div className="col-lg-4 col-md-6">
                <Link href="/services" className="text-decoration-none">
                  <div className="card h-100 text-center border-0 shadow-sm hover-card">
                    <div className="card-body">
                      <div className="mb-3">
                        <div className="rounded-circle bg-primary bg-opacity-10 d-inline-flex align-items-center justify-content-center" style={{width: '60px', height: '60px'}}>
                          <i className="fas fa-database eyn-primary" style={{fontSize: '1.5rem'}}></i>
                        </div>
                      </div>
                      <h5 className="eyn-primary mb-3">Data Management</h5>
                      <p className="text-muted small mb-0">Data entry, processing, secure storage, and governance strategies</p>
                    </div>
                  </div>
                </Link>
              </div>
              
              <div className="col-lg-4 col-md-6">
                <Link href="/services" className="text-decoration-none">
                  <div className="card h-100 text-center border-0 shadow-sm hover-card">
                    <div className="card-body">
                      <div className="mb-3">
                        <div className="rounded-circle bg-primary bg-opacity-10 d-inline-flex align-items-center justify-content-center" style={{width: '60px', height: '60px'}}>
                          <i className="fas fa-shield-alt eyn-primary" style={{fontSize: '1.5rem'}}></i>
                        </div>
                      </div>
                      <h5 className="eyn-primary mb-3">Cybersecurity</h5>
                      <p className="text-muted small mb-0">Risk assessment, network security, compliance support, and vulnerability management</p>
                    </div>
                  </div>
                </Link>
              </div>
              
              <div className="col-lg-6 col-md-6">
                <Link href="/services" className="text-decoration-none">
                  <div className="card h-100 text-center border-0 shadow-sm hover-card">
                    <div className="card-body">
                      <div className="mb-3">
                        <div className="rounded-circle bg-primary bg-opacity-10 d-inline-flex align-items-center justify-content-center" style={{width: '60px', height: '60px'}}>
                          <i className="fas fa-cloud eyn-primary" style={{fontSize: '1.5rem'}}></i>
                        </div>
                      </div>
                      <h5 className="eyn-primary mb-3">Cloud Solutions</h5>
                      <p className="text-muted small mb-0">Cloud computing services including migration, deployment, and optimization</p>
                    </div>
                  </div>
                </Link>
              </div>
              
              <div className="col-lg-6 col-md-6">
                <Link href="/services" className="text-decoration-none">
                  <div className="card h-100 text-center border-0 shadow-sm hover-card">
                    <div className="card-body">
                      <div className="mb-3">
                        <div className="rounded-circle bg-primary bg-opacity-10 d-inline-flex align-items-center justify-content-center" style={{width: '60px', height: '60px'}}>
                          <i className="fas fa-cogs eyn-primary" style={{fontSize: '1.5rem'}}></i>
                        </div>
                      </div>
                      <h5 className="eyn-primary mb-3">IT Consulting</h5>
                      <p className="text-muted small mb-0">Technology strategy, digital transformation, and ongoing IT support services</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
