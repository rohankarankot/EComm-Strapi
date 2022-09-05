import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { CartProvider } from "react-use-cart";

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ApolloProvider client={client}>
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
