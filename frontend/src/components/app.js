import React from "react";
import { Route } from 'react-router-dom';
import SplashPage from "./splash_page";

const App = () => (
    <div>
        <Route exact path="/" component={SplashPage} />
    </div>
);

export default App;