import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PageHeader from "./components/PageHeader/PageHeader.js";
import LandingPage from "./components/LandingPage.js";
import RegisterPage from "./components/RegisterPage/RegisterPage.js";
import LoginPage from "./components/LoginPage/LoginPage.js";
import IndexNavbar from './components/Navbars/IndexNavbar.js';
import Footer from './components/Footer/Footer.js';
import { Container } from 'reactstrap';
import Trending from './pages/trending'
import Movies from './pages/movies'
import Favorites from './pages/favorites'
import Series from './pages/series'
import Search from './pages/search'

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <IndexNavbar />
          <div className="container">
            <Route exact path="/">
              <PageHeader />
            </Route>
            <Route exact path="/login-page">
              <LoginPage />
            </Route>
            <Route exact path="/register-page">
              <RegisterPage />
            </Route>
            <Route exact path="/landing-page">
              <LandingPage />
            </Route>
            <Container>
              <Switch>
                <Route  path="/trending" component={Trending}/>
                <Route  path="/favorites" component={Favorites}/>
                <Route  path="/movies" component={Movies}/>
                <Route  path="/search" component={Search}/>
                <Route  path="/series" component={Series}/>
              </Switch>
            </Container>

      
            
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
