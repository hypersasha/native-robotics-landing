import React, {Component} from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import Pack from './Pack';
import Styleguide from "./Styleguide";

class AppRouter extends Component {

    render() {
        return(
            <Router basename={process.env.PUBLIC_URL}>
                <div>
                <Route exact path={'/'} component={App} />
                <Route path={'/opack'} component={Pack} />
                <Route path={'/styleguide'} component={Styleguide} />
                </div>
            </Router>
            )
    }
}

export default AppRouter;