import React, { FC }  from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

return (
    <Router>
       <Switch>
         <Route path="/repos_url" component={Repos_URL}></Route>
         <Route path="/events_url" component={Events_URL}></Route>
       </Switch>
    </Router>
)