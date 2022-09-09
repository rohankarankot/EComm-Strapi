import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

import { CartProvider } from "react-use-cart";
import { ApolloProvider } from "@apollo/client";
import { Gqlclient } from "../apollo-client";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ApolloProvider client={Gqlclient}>
        <CartProvider>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </CartProvider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
