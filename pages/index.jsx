import Head from 'next/head'
import { HydrationProvider, Client } from "react-hydration-provider";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <HydrationProvider>
      <Head>
        <title>Geekers Club</title>
        <meta name="description" content="Online Shop for all Coders/Devloperz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
    <img src="/Hero-img.png" alt="Hero image" />
    <Footer/>
    </HydrationProvider>
  )
}