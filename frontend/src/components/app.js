import React from "react";
import { Route } from 'react-router-dom';
import SplashPage from "./splash_page";

export default App = () => (
    <div>
        <Route exact path="/" component={SplashPage} />
    </div>
);