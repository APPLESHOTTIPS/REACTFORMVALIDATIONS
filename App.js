import React from 'react';
// import {BrowserRouter as Router,Rout,Switch,Link} from  'react-router-dom';
import { Router, Route, Switch } from "react-router";
import Authentic from './Components/Authentic';
import Hobbyselector from './Components/Hobbyselector';

const App = () => {
    return (
        <div>
            {/* <Navbar/> */}
           <Hobbyselector/>
          
            <Authentic/>
            
        </div>
    );
};


export default App;