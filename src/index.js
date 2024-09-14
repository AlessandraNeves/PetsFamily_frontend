import { createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(document.querySelector("#root"));
root.render(
    <App />
);

// import React from 'react';çs

// import ReactDOM from 'react-dom/client';

// import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
// import { GoogleOAuthProvider } from '@react-oauth/google';

// import './global.css';
// import App from './App';

// const google_client = "688476484599-sfust0n3cm3js51k5dbilutfksh4qpu9.apps.googleusercontent.com"

// const apollo_client = new ApolloClient({
//     uri: "http://localhost:8000/graphql/",
//     cache: new InMemoryCache()
//   });

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//     <React.StrictMode>
//         <GoogleOAuthProvider clientId={google_client}>
//             <ApolloProvider client={apollo_client}>
//                 <App />
//             </ApolloProvider>
//         </GoogleOAuthProvider>
//     </React.StrictMode>
// );



