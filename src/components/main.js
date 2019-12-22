import React from 'react';
import LandingPage from './landingpage';
import Resume from './resume';
import Projects from './projects';
import {Switch, Route} from 'react-router-dom';

const Main = () => (
    <Switch> 
        <Route exact path="/" component={LandingPage}/>
        <Route path="/resume" component={Resume}/>
        <Route path="/projects" component={Projects}/>
    </Switch>
)

export default Main;