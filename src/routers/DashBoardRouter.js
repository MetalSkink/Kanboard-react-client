import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { Board } from '../components/board/Board'
import { Users } from '../components/users/Users'

export const DashboardRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route
                        path="/dashboard/board"
                        exact
                        component={Board}/>
                        {/* isAuthenticated={ isLoggedIn }/> */}
                    <Route
                        path="/dashboard/users"
                        exact
                        component={Users}/>
                        {/* isAuthenticated={ isLoggedIn }/> */}
                    <Redirect to="/dashboard/board" />
                </Switch>
            </div>
        </Router>
    )
}
