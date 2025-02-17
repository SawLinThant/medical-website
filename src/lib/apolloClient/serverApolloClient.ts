import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { getCookie } from 'cookies-next';
import fetch from 'cross-fetch';
import { getSessionData } from '../utils';

const serverApolloClient = async () => {
  const sessionData = await getSessionData();
  const token = sessionData?.token || null;

  return new ApolloClient({
    ssrMode: true,
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
      fetch,
      headers: {
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    }),
    cache: new InMemoryCache(),
  });
};



export default serverApolloClient;
