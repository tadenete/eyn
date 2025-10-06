import ServiceGrid from "./service-grid";

export default function ServiceDetails(props) {
  const { services } = props;
  return (
    <section className="section-spacing">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center mb-5">
            <h2 className="display-5 fw-bold eyn-primary mb-4">Service Offerings</h2> 
            <p className="lead text-muted">
              Explore our comprehensive range of technology services designed to meet your organization's unique needs
            </p>
          </div>
        </div>
        <ServiceGrid services={services} />
      </div>
    </section>
  );
}
