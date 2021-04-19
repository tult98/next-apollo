import '../styles/globals.css';
import { useApollo } from '../src/utils/apollo';
import { ApolloProvider } from '@apollo/client';

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
