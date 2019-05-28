import React from 'react';
import ReactDOM from 'react-dom';
import './bundle.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo'

import App from './components/App';
import Dashboard from './components/Dashboard';
import LogPage from "./components/LogPage"

const client = new ApolloClient({
    uri: 'http://localhost:4000/gql'
});

ReactDOM.render((
    <ApolloProvider client={client}>
        <Router>
            <Route exact path="/" component={App}/>
            <Route exact path='/c/:category' component={App}/>
            <Route exact path='/c/:category/:subcategory' component={App}/>
            <Route exact path='/p/:productName' component={App}/>
            <Route exact path="/log" component={LogPage}/>
            <Route path="/admin" component={Dashboard}/>
        </Router>
    </ApolloProvider>

), document.getElementById('root'));