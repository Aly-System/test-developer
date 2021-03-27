import React from 'react'
import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom';

import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Route path="/" component={ DashboardRoutes } />
            </div>
        </Router>
    )
}
