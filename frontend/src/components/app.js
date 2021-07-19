import React from "react";
import { Route } from 'react-router-dom';
import SplashPage from "./splash_page";
import LoadPage from "./load_page";
import Navbar from "./navbar";
import Dashboard from './dashboard';
import Data from './data';
const App = () => (
    <div>
        <Navbar/>
        <div className='main'>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/pull" component={SplashPage} />
            <Route exact path="/load" component={LoadPage} />
            <Route exact path="/data/:id" component = {Data} />
        </div>
        
    </div>
);

export default App;