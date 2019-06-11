import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import Main from './Main'

const PublicRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        return (
            <div>
                <Component {...props} />
            </div>);
    }} />
)

export default () => {

    return (
        <div>
            <Router>
                <div>
                    <Switch>
                        <PublicRoute path='/' component={Main} />
                    </Switch>
                </div>
            </Router>
        </div>
    )

}