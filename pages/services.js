import { Fragment } from "react";
import Head from "next/head";
import { getAllServices } from "../lib/services-util";
import ServicesHero from "../components/services/services-hero";
import ServiceGrid from "../components/services/service-grid";
import ServiceDetails from "../components/services/service-details";
import Footer from "../components/layout/footer";

function Services(props) {
  return (
    <Fragment>
      <Head>
        <title>Services - EYN Solutions LLC</title>
        <meta
          name="description"
          content="Explore EYN Solutions LLC comprehensive IT services including software development, data management, cybersecurity, cloud solutions, and IT consulting."
        />
      </Head>
      <ServicesHero />
      <ServiceDetails services={props.services} />
      <Footer />
    </Fragment>
  );
}

export function getStaticProps() {
  const allServices = getAllServices();
  return {
    props: {
      services: allServices,
    },
    revalidate: 300,
  };
}

export default Services;


