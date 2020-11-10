import React, {Component} from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Styleguide from "./Styleguide";
import Omnifit from "./Omnifit";
import OmniPack from "./OmniPack";
import OmniPackLive from "./OmniPackLive";
import OmniPackLiveWide from "./OmniPackLiveWide";
import Privacy from "./Privacy";
import NotFound from "./NotFound";

class AppRouter extends Component {

    render() {
        return(
            <Router basename={process.env.PUBLIC_URL}>
                <Switch>
                <Route exact path={'/'} component={OmniPack} />
                <Route path={'/styleguide'} component={Styleguide} />
                <Route path={'/omnifit'} component={Omnifit} />
                <Route path={'/omnipack'} component={OmniPack} />
                <Route path={'/privacy'} component={Privacy} />
                <Route path={'/omnipack-live'} component={OmniPackLive}/>
                <Route path={'/omnipack-live-wide'} component={OmniPackLiveWide}/>
                <Route component={NotFound} />
                </Switch>
            </Router>
            )
    }
}

export default AppRouter;
