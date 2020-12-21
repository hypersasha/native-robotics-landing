import React, {Component} from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Omnifit from "./Omnifit";
import OmniPack from "./OmniPack";
import OmniPackLive from "./OmniPackLive";
import OmniPackLiveWide from "./OmniPackLiveWide";
import Privacy from "./Pages/Privacy/Privacy";
import NotFound from "./NotFound";
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';

import Footer from './components/NewFooter/NewFooter';
import TopBar from './components/TopBar/TopBar';
import Editor from './Pages/Blog/Editor/Editor';

class AppRouter extends Component {

    render() {
        return(
            <Router basename={process.env.PUBLIC_URL}>
                <TopBar />
                <Switch>
                    <Route exact path={'/'} component={Home} />
                    <Route path={'/omnifit'} component={Omnifit} />
                    <Route path={'/omnipack'} component={OmniPack} />
                    <Route path={'/blog'}>
                        <Blog />
                    </Route>
                    <Route path={'/native-blog/editor'} component={Editor} />
                    <Route path={'/privacy'} component={Privacy} />
                    <Route path={'/omnipack-live'} component={OmniPackLive}/>
                    <Route path={'/omnipack-live-wide'} component={OmniPackLiveWide}/>
                    <Route component={NotFound} />
                </Switch>
                <Footer />
            </Router>
            )
    }
}

export default AppRouter;
