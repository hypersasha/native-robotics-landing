import React, {Component} from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import Pack from './Pack';

class AppRouter extends Component {

    render() {
        return(
            <Router>
                <div>
                <Route exact path={'/'} component={App} />
                <Route path={'/opack'} component={Pack} />
                </div>
            </Router>
            )
    }
}

export default AppRouter;