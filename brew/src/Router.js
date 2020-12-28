import React, {Component, lazy, Suspense} from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NotFound from "./NotFound";

import TopBar from './components/TopBar/TopBar';

const Home = lazy(() => import('./Pages/Home/Home'));
const Omnifit = lazy(() => import('./Omnifit'));
const OmniPack = lazy(() => import('./OmniPack'));
const Blog = lazy(() => import('./Pages/Blog/Blog'));
const Editor = lazy(() => import('./Pages/Blog/Editor/Editor'));
const Privacy = lazy(() => import('./Pages/Privacy/Privacy'));
const Footer = lazy(() => import('./components/NewFooter/NewFooter'));

class AppRouter extends Component {

    render() {
        return(
            <Router basename={process.env.PUBLIC_URL}>
                <TopBar />
                <Suspense fallback={<div>Загрузка...</div>}>
                    <Switch>
                        <Route exact path={'/'} component={Home} />
                        <Route path={'/omnifit'} component={Omnifit} />
                        <Route path={'/omnipack'} component={OmniPack} />
                        <Route path={'/blog'}>
                            <Blog />
                        </Route>
                        <Route path={'/native-blog/editor'} component={Editor} />
                        <Route path={'/privacy'} component={Privacy} />
                        <Route component={NotFound} />
                    </Switch>
                    <Footer />
                </Suspense>
            </Router>
            )
    }
}

export default AppRouter;
