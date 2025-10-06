export default function Consultation() {
  return (
    <div className="h-100">
      <div className="contactInfo">
        <h2 className="eyn-primary mb-4">Free Strategic Consultation</h2>
        <p className="lead text-muted mb-4">
          EYN Solutions LLC offers complimentary technology consultations to help organizations understand their current IT landscape
          and identify opportunities for improvement. Our certified consultants will provide a comprehensive analysis of your 
          technology requirements and recommend tailored solutions that align with your business objectives.
        </p>
        
        <div className="mb-4">
          <h5 className="eyn-secondary mb-3">Consultation Includes:</h5>
          <div className="row g-3">
            <div className="col-12">
              <div className="d-flex align-items-start">
                <div className="rounded-circle bg-secondary bg-opacity-10 d-flex align-items-center justify-content-center me-3" style={{width: '40px', height: '40px', minWidth: '40px'}}>
                  <i className="fas fa-search eyn-secondary"></i>
                </div>
                <div>
                  <h6 className="mb-1">Technology Assessment</h6>
                  <small className="text-muted">Comprehensive evaluation of current systems and infrastructure</small>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex align-items-start">
                <div className="rounded-circle bg-secondary bg-opacity-10 d-flex align-items-center justify-content-center me-3" style={{width: '40px', height: '40px', minWidth: '40px'}}>
                  <i className="fas fa-route eyn-secondary"></i>
                </div>
                <div>
                  <h6 className="mb-1">Strategic Planning</h6>
                  <small className="text-muted">Development of technology roadmaps and digital transformation strategies</small>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex align-items-start">
                <div className="rounded-circle bg-secondary bg-opacity-10 d-flex align-items-center justify-content-center me-3" style={{width: '40px', height: '40px', minWidth: '40px'}}>
                  <i className="fas fa-chart-line eyn-secondary"></i>
                </div>
                <div>
                  <h6 className="mb-1">Cost-Benefit Analysis</h6>
                  <small className="text-muted">ROI analysis and technology investment recommendations</small>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex align-items-start">
                <div className="rounded-circle bg-secondary bg-opacity-10 d-flex align-items-center justify-content-center me-3" style={{width: '40px', height: '40px', minWidth: '40px'}}>
                  <i className="fas fa-shield-alt eyn-secondary"></i>
                </div>
                <div>
                  <h6 className="mb-1">Risk Evaluation</h6>
                  <small className="text-muted">Security and compliance assessment with mitigation strategies</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-light rounded">
          <h6 className="eyn-secondary mb-2">Why Choose EYN Solutions?</h6>
          <div className="row g-2">
            <div className="col-6">
              <small className="text-muted d-block">✓ CBE Certified</small>
              <small className="text-muted d-block">✓ Government Experience</small>
              <small className="text-muted d-block">✓ Proven Track Record</small>
            </div>
            <div className="col-6">
              <small className="text-muted d-block">✓ 24/7 Support</small>
              <small className="text-muted d-block">✓ Compliance Expertise</small>
              <small className="text-muted d-block">✓ Scalable Solutions</small>
            </div>
          </div>
        </div>
        
        <div className="mt-4">
          <p className="small text-muted mb-0">
            <i className="fas fa-clock eyn-secondary me-2"></i>
            <strong>Response Time:</strong> We typically respond within 24 hours and can schedule a consultation call within 2-3 business days.
          </p>
        </div>
      </div>
    </div>
  );
}
