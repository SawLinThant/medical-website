import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { getCookie } from 'cookies-next';
import fetch from 'cross-fetch';
import { getSessionData } from '../utils';

const getTokenFromSession = async () => {
  const sessionData = await getSessionData();
  return sessionData?.token || null; 
};
const token = await getTokenFromSession();
const serverApolloClient = new ApolloClient({
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


export default serverApolloClient;
