import { Fragment } from "react";
import Head from "next/head";
import Hero from "../components/home/hero";
import WhyChooseUs from "../components/home/why-choose-us";
import Footer from "../components/layout/footer";

function Home() {
  return (
    <Fragment>
      <Head>
        <title>Home - EYN Solutions LLC</title>
        <meta
          name="description"
          content="EYN Solutions LLC is a CBE-certified IT solutions provider specializing in software development, data management, and cybersecurity services in Washington DC."
        />
      </Head>
      <Hero />
      <WhyChooseUs />
      <Footer />
    </Fragment>
  );
}

export default Home;
