import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  HttpLink,
  from,
  concat,
} from "@apollo/client";
const httpLink = new HttpLink({ uri: "http://localhost:1337/graphql" });

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext({
    headers: {
      authorization: "bearer " + localStorage.getItem("jwt"),
    },
  });
  return forward(operation);
});
export const Gqlclient = new ApolloClient({
  link: from([concat(authMiddleware, httpLink)]),
  cache: new InMemoryCache(),
});
