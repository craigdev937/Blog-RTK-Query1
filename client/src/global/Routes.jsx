import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { List } from "../components/List";
import { Add } from "../components/Add";
import { Edit } from "../components/Edit";

export const Routes = () => (
    <BrowserRouter>
        <React.Fragment>
            <Route exact path="/">
                <Redirect to="/posts/" />
            </Route>
            <Route exact path="/posts/" component={List} />
            <Route exact path="/posts/add/" component={Add} />
            <Route exact path="/posts/edit/:id" component={Edit} />
        </React.Fragment>
    </BrowserRouter>
);



