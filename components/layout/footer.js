import { Fragment } from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="footer py-4 eyn-bg-light border-top">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex align-items-center mb-3">
              <div className="d-flex align-items-center">
                <div className="logo-icon me-3">
                  <div className="eye-logo">
                    <div className="eye-shape">
                      <div className="iris"></div>
                      <div className="pupil"></div>
                    </div>
                  </div>
                </div>
                <div className="logo-text">
                  <h5 className="mb-0 eyn-primary fw-bold">EYN Solutions</h5>
                  <small className="text-muted">Technology Consulting</small>
                </div>
              </div>
            </div>
            <p className="text-muted">
              EYN Solutions - Delivering innovative technology solutions 
              with vision and expertise. Your trusted partner for digital transformation 
              and technology consulting services.
            </p>
            <div className="mt-3">
              <h6 className="eyn-secondary">Certifications & Compliance</h6>
              <small className="text-muted">
                CBE Certified • LBE Certified • DBE Certified • SBE Certified • DZE Certified
              </small>
            </div>
          </div>
          <div className="col-md-6 text-md-end">
            <h6 className="eyn-primary">Contact Information</h6>
            <p className="text-muted mb-1">
              <strong>Email:</strong> info@eynsolutions.com
            </p>
            <p className="text-muted">
              <strong>Address:</strong><br />
              916 Pennsylvania Ave SE<br />
              Suite 201<br />
              Washington, DC 20003
            </p>
          </div>
        </div>
        <hr className="my-3" />
        <div className="row">
          <div className="col-12 text-center">
            <p className="text-muted mb-0">
              © {new Date().getFullYear()} EYN Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
