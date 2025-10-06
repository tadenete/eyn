import ServiceGrid from "../services/service-grid";
export default function Services(props) {
  return (
    <section className="section-spacing" id="services">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center mb-5">
            <h2 className="display-5 fw-bold eyn-primary mb-4">Our Services</h2> 
            <p className="lead text-muted">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
        </div>
        <ServiceGrid services={props.services} />
      </div>
    </section>
  );
}
