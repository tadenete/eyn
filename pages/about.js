import { Fragment } from "react";
import Head from "next/head";
import Hero from "../components/about/hero";
import CoreValues from "../components/about/core-values";
import TeamExperience from "../components/about/team-experience";
import Certifications from "../components/about/certifications";
import Footer from "../components/layout/footer";

function About(props) {
  return (
    <Fragment>
      <Head>
        <title>About Us - EYN Solutions LLC</title>
        <meta
          name="description"
          content="Learn about EYN Solutions LLC, a CBE-certified IT solutions provider specializing in software development, data management, and cybersecurity services."
        />
      </Head>
      <Hero />
      <CoreValues />
      <TeamExperience />
      <Certifications />
      <Footer />
    </Fragment>
  );
}

export default About;
