import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import fetch from 'cross-fetch';

const serverApolloClient = new ApolloClient({
  ssrMode: true,
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || 'https://uat.medical.axra.app/v1/graphql',
    fetch,
  }),
  cache: new InMemoryCache(), 
});

export default serverApolloClient;
