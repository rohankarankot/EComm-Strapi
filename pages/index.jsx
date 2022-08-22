import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HomeContent from "../components/HomeContent";

export default function Home() {
  return (
    <>
      <Head>
        <title>Geekers Club</title>
        <meta
          name="description"
          content="Online Shop for all Coders/Devloperz"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeContent />
    </>
  );
}
