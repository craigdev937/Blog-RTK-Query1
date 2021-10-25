import React from "react";
import "./App.css";
import { Routes } from "../global/Routes";
import { Provider } from "react-redux";
import { RootReducer } from "../global/RootReducer";

export const App = (): JSX.Element => {
    return (
        <React.Fragment>
            <Provider store={RootReducer}>
                <Routes />
            </Provider>
        </React.Fragment>
    );
};




