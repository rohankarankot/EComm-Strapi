import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ApolloProvider client={client}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ApolloProvider>
    </>
  );
}

export default MyApp;
