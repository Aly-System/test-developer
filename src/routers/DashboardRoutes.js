import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { UserScreen } from '../components/users/UserScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <div className="container mt-2">
                <Switch>
                    <Route exact path="/user/:userId" component={ UserScreen } />
                    <Route exact path="/dc" component={ DcScreen } />
                    <Route exact path="/search" component={ SearchScreen } />

                    <Redirect to="/search" />
                </Switch>
            </div>

        </>
    )
}
