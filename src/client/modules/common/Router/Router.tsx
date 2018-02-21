import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { HomeContainer } from '../../Home';

export function Router(): JSX.Element {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomeContainer} />
                <Route component={HomeContainer} />
            </Switch>
        </BrowserRouter>
    );
}
