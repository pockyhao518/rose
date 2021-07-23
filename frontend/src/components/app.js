import React from "react";
import { Route } from 'react-router-dom';
import SplashPage from "./splash_page";
import LoadPage from "./load_page";
import Navbar from "./navbar";
import Dashboard from './dashboard';
import Data from './data';
import Image from './image';
import Pulldata from "./pullindex";
import Pullimage from './imagepage'
import Modal from '../components/modal/modal';

const App = () => (
    <div>
        <Modal />
        <Navbar/>
        <Route exact path="/" component={Dashboard} />
        <div className='main'>
            <Route exact path="/pull" component={Pulldata} />
            <Route exact path="/pulldata" component={SplashPage} />
            <Route exact path="/pullimage" component={Pullimage} />
            <Route exact path="/load" component={LoadPage} />
            <Route exact path="/data/:id" component = {Data} />
            <Route exact path="/file/:filename" component={Image} />
        </div>
    </div>
);

export default App;