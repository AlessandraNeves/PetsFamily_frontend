import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import App from './App';


const apollo_client = new ApolloClient({
    uri: "http://localhost:8000/graphql/",
    cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ApolloProvider client={apollo_client}>
      <App />
    </ApolloProvider>
);


 