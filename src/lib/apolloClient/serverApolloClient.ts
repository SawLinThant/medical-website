import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from "@apollo/client/link/context";
import fetch from 'cross-fetch';
import { getSessionData } from '../utils';

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  fetch, // Ensure fetch is used
});

const authLink = setContext(async (_, { headers }) => {
  try {
    const sessionData = await getSessionData();
    const accessToken = sessionData?.token || null;

    return {
      headers: {
        ...headers,
        ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
      },
    };
  } catch (e) {
    console.error("Error fetching session data:", e);
    return { headers };
  }
});

const serverApolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  ssrMode: typeof window === "undefined",
});

export default serverApolloClient;
