import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import Head from "next/head";
import Layout from "../components/layout/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>EYN Solutions LLC - CBE Certified IT Solutions Provider</title>
        <meta name="description" content="EYN Solutions LLC is a CBE-certified, Washington DC-based IT solutions provider specializing in software development, data management, and cybersecurity services." />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
