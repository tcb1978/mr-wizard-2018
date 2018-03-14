import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../Layout/Layout';



export default (
    <Switch>
        <Route exact path="/" component={Layout} />
        {/*<Route path="/contact" component={Contact} />
        <Route path="/gallery" component={gallery} />
        <Route path="*" component={NotFound} />*/}
    </Switch>
)