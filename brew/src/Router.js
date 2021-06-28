import React, {Component, lazy, Suspense} from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NotFound from "./pages/404/NotFound";
import TopBar from './components/TopBar/TopBar';
import Loader from './components/Loader/Loader';

const Home = lazy(() => import('./pages/Home/Home'));
const Omnifit = lazy(() => import('./pages/OmniFit/Omnifit'));
const Fanuc = lazy(() => import('./pages/OmniFit/Fanuc'));
const OmniPack = lazy(() => import('./pages/OmniPack/OmniPack'));
// const Blog = lazy(() => import('./Pages/Blog/Blog'));
const Editor = lazy(() => import('./pages/Blog/Editor/Editor'));
const Privacy = lazy(() => import('./pages/Privacy/Privacy'));
const Footer = lazy(() => import('./components/Footer/NewFooter'));

const OmniPackNew = lazy(() => import('./pages/OmniPack/OmniPackNew'));

class AppRouter extends Component {

    render() {
        return(
            <Router basename={process.env.PUBLIC_URL}>
                <TopBar />
                <Suspense fallback={<div className={"suspense"}><Loader /></div>}>
                    <Switch>
                        <Route exact path={'/'} component={Home} />
                        <Route path={'/omnifit'} component={Omnifit} />
                        <Route path={'/fanuc'} component={Fanuc} />
                        <Route path={'/omnipack'} component={OmniPackNew} />
                        <Route path={'/native-blog/editor'} component={Editor} />
                        <Route path={'/privacy'} component={Privacy} />
                        <Route path={'/omnipack-new'} component={OmniPackNew} />
                        <Route component={NotFound} />
                    </Switch>
                    <Footer />
                </Suspense>
            </Router>
            )
    }
}

export default AppRouter;
