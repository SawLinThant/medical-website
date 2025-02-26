import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from "@apollo/client/link/context";
import fetch from 'cross-fetch';
import { getSessionData } from '../utils';
const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  fetch,
});

const retryLink = setContext(async (_, { headers }) => {
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
    console.error("Skipping session fetch during build time.");
    return { headers };
  }
});

// Apollo Client with retry logic
const serverApolloClient = new ApolloClient({
  link: retryLink.concat(httpLink),
  cache: new InMemoryCache(),
  ssrMode: typeof window === "undefined",
  defaultOptions: {
    query: {
      errorPolicy: 'all', // Allows partial data even if some queries fail
      fetchPolicy: 'network-only', // Always fetch fresh data
    },
  },
});

export default serverApolloClient;
