import React from "react";
import { Route } from 'react-router-dom';
import SplashPage from "./splash_page";
import LoadPage from "./load_page";
import Navbar from "./navbar";
import Dashboard from './dashboard';
import Data from './data';
import Footer from "./footer";
const App = () => (
    <div>
        <Navbar/>
        <Route exact path="/" component={Dashboard} />
        <div className='main'>
            <Route exact path="/pull" component={SplashPage} />
            <Route exact path="/load" component={LoadPage} />
            <Route exact path="/data/:id" component = {Data} />
        </div>
        <Footer/>
    </div>
);

export default App;