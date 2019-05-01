import React from 'react';
import ReactDOM from 'react-dom';
import './bundle.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './components/App';
import Dashboard from './components/Dashboard';

ReactDOM.render((
    <Router>
        <Route exact path="/" component={App}/>
        <Route exact path='/c/:category' component={App}/>
        <Route exact path='/c/:category/:subcategory' component={App}/>
        <Route path="/admin" component={Dashboard}/>
    </Router>
), document.getElementById('root'));