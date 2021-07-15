import React from "react";
import { Route } from 'react-router-dom';
import SplashPage from "./splash_page";
import LoadPage from "./load_page";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const App = () => (
    <div>
        <Navbar/>
        <Sidebar/>
        <div className='main'>
            <Route exact path="/" component={SplashPage} />
            <Route exact path="/load" component={LoadPage} />
        </div>
        
    </div>
);

export default App;