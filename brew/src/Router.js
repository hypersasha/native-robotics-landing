import React, {Component} from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import Pack from './Pack';
import Styleguide from "./Styleguide";
import Omnifit from "./Omnifit";
import OmniFitRequests from "./OmniFitRequests";

class AppRouter extends Component {

    render() {
        return(
            <Router basename={process.env.PUBLIC_URL}>
                <div>
                <Route exact path={'/'} component={Omnifit} />
                <Route path={'/opack'} component={Pack} />
                <Route path={'/styleguide'} component={Styleguide} />
                <Route path={'/omnifit'} component={Omnifit} />
                <Route path={'/omnifitreq'} component={OmniFitRequests} />
                </div>
            </Router>
            )
    }
}

export default AppRouter;
