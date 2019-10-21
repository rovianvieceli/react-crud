import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Routes from './routes';

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="App">
                    <Link to="/">Home</Link>
                    <Link to="/user">User</Link>
                </div>
                {Routes.map((route, index) => {
                    return <Route
                        key={index}
                        path={route.path}
                        component={route.component}
                        exact={route.exact}>
                    </Route>
                })}
            </div>
        );
    }
}
