import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen'
import { Dashboard } from '../components/dashboard/Dashboard'

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route
                        path="/auth"
                        component={LoginScreen}/>
                        {/* isAuthenticated={ isLoggedIn }/> */}
                    <Route
                        exact
                        path="/"
                        component={Dashboard}/>
                        {/* isAuthenticated={ isLoggedIn }/> */}
                    <Redirect to="/auth" />
                </Switch>
            </div>
        </Router>
    )
}
