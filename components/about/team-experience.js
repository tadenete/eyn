export default function TeamExperience() {
  return (
    <section className="section-spacing section-with-pattern">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center mb-5">
            <h2 className="display-5 fw-bold eyn-primary mb-4">Our Experience</h2>
            <p className="lead text-muted">
              Dedicated team with 18+ years of experience in technology consulting and IT solutions
            </p>
          </div>
        </div>
        
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="rounded-circle bg-primary bg-opacity-10 d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px', minWidth: '50px'}}>
                    <i className="fas fa-chart-line eyn-primary"></i>
                  </div>
                  <h5 className="eyn-primary mb-0">18+ Years Experience</h5>
                </div>
                <p className="text-muted">
                  Our team brings decades of combined expertise in technology consulting and IT solutions tailored for government and commercial sectors.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="rounded-circle bg-primary bg-opacity-10 d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px', minWidth: '50px'}}>
                    <i className="fas fa-building eyn-primary"></i>
                  </div>
                  <h5 className="eyn-primary mb-0">Government & Commercial</h5>
                </div>
                <p className="text-muted">
                  Extensive experience serving both government agencies and commercial enterprises with specialized solutions for each sector.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="rounded-circle bg-primary bg-opacity-10 d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px', minWidth: '50px'}}>
                    <i className="fas fa-cogs eyn-primary"></i>
                  </div>
                  <h5 className="eyn-primary mb-0">Agile Solutions</h5>
                </div>
                <p className="text-muted">
                  We provide agile and scalable solutions customized to client needs with strong commitment to security and data integrity.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row mt-5">
          <div className="col-lg-8 mx-auto">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h4 className="eyn-primary mb-4 text-center">Past Performance</h4>
                <div className="row g-3">
                  <div className="col-md-4">
                    <div className="text-center">
                      <div className="rounded-circle bg-secondary bg-opacity-10 d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                        <i className="fas fa-cloud-upload-alt eyn-secondary" style={{fontSize: '1.5rem'}}></i>
                      </div>
                      <h6 className="eyn-primary">Data Migration</h6>
                      <small className="text-muted">Assisted organizations with secure data migration and cloud transformation</small>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="text-center">
                      <div className="rounded-circle bg-secondary bg-opacity-10 d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                        <i className="fas fa-laptop-code eyn-secondary" style={{fontSize: '1.5rem'}}></i>
                      </div>
                      <h6 className="eyn-primary">Software Development</h6>
                      <small className="text-muted">Developed custom enterprise software solutions improving operational efficiency</small>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="text-center">
                      <div className="rounded-circle bg-secondary bg-opacity-10 d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                        <i className="fas fa-tools eyn-secondary" style={{fontSize: '1.5rem'}}></i>
                      </div>
                      <h6 className="eyn-primary">IT Consulting</h6>
                      <small className="text-muted">Delivered IT consulting services streamlining business processes and data management</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


