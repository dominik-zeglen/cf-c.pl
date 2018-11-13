import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloClient} from 'apollo-client';
import {createHttpLink} from 'apollo-link-http';
import * as React from 'react';
import {ApolloProvider, Query} from 'react-apollo';

import './App.scss';
import Page from './components/Page';
import Scroll from './containers/Scroll';
import { OFFER_DIRECTORY, SITE_ELEMENTS_DIRECTORY, SITEDATA, TEAM_DIRECTORY } from "./query";

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: createHttpLink({
    uri: '/graphql/',
  }),
});

class App extends React.Component {
  public render() {
    return (
      <ApolloProvider client={apolloClient}>
        <Query query={SITEDATA} variables={{
          offerDirectory: OFFER_DIRECTORY,
            siteElementsDirectory: SITE_ELEMENTS_DIRECTORY,
	  teamDirectory: TEAM_DIRECTORY
        }}>
        {({data, loading, error}) => {
          if (error) {
            return "Page unavailable"
          }
          if (loading) {
            return "Loading..."
          }
          return (
            <Scroll>
              {scrollPosition => (
                <Page data={data} scrollPosition={scrollPosition} />
              )}
            </Scroll>
          )}}
        </Query>
      </ApolloProvider>
    );
  }
}

export default App;
