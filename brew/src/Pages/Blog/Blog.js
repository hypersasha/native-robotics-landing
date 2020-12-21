import React, { useEffect } from 'react';
import {Switch, useRouteMatch, Route, Link} from 'react-router-dom';

import Breadcrumbs from '../Navigation/Breadcrumbs';
import BlogPost from './BlogPost';

const latest_bg = require('../../assets/imgs/bad-good-programming.jpg')
const older_bg01 = require('../../assets/imgs/ar-mock-ofit.jpg')

import './blog.less';

export default function Blog() {
    let {path, url} = useRouteMatch();

    useEffect(() => {
        document.querySelectorAll('html,body').forEach((element) => {
            element.style.background = "#FFFFFF";
        });
        window.scrollTo(0,0);
    }, [])

    return (
        <div className="blog-container">
            <Switch>
                <Route exact path={path}>
                    <Breadcrumbs />
                    <div className="blog-posts">
                        <Link to={`${url}/how-to-increase-bot-lifetime`}>
                            <div className="latest-post">
                                <div className="cover" style={{backgroundImage: 'url('+latest_bg+')'}} />
                                <div className="post-time">Oct 15, 2020</div>
                                <div className="post-title">Why your robot will die in 8 months or top 5 things I&nbsp;wish I&nbsp;knew before I&nbsp;bought a robot</div>
                                <div className="post-description">Today, we’re releasing the latest version of Auto Layout. In this deep-dive, we share a look into the evolution of Auto Layout, how we made tradeoffs between flexibility and usability, and what it took to bring our stretch goals to life.</div>
                            </div>
                        </Link>
                        <div className="old-posts">
                            <Link to={`${url}/how-to-increase-bot-lifetime`}>
                                <div className="old-post">
                                    <div className="cover" style={{backgroundImage: 'url('+older_bg01+')'}} />
                                    <div className="post-time">Oct 2, 2020</div>
                                    <div className="post-title">Wood picker and Box folding in OmniPack v1.2</div>
                                    <div className="post-description">We've seen cases when poor programming resulted in robot breakdown in just 8 months after...</div>
                                </div>
                            </Link>
                            <Link to={`${url}/how-to-increase-bot-lifetime`}>
                                <div className="old-post">
                                    <div className="cover" style={{backgroundImage: 'url(https://www.litmusbranding.com/en-sa/ast/uploads/2018/11/how-to-create-a-unique-brand-blog.jpg)'}} />
                                    <div className="post-time">Sep 21, 2020</div>
                                    <div className="post-title">Creating multi-brand design systems</div>
                                    <div className="post-description">Leaders from Shopify, Condé Nast, and Harry’s share their learnings about creating and maintaining design systems.</div>
                                </div>
                            </Link>
                            <Link to={`${url}/how-to-increase-bot-lifetime`}>
                                <div className="old-post">
                                    <div className="cover" style={{backgroundImage: 'url(https://fluentdesign.blob.core.windows.net/assets/engaging-immersive@1x.jpg)'}} />
                                    <div className="post-time">Sep 15, 2020</div>
                                    <div className="post-title">Behind the feature: the hidden challenges of autosave</div>
                                    <div className="post-description">We recently expanded autosave in Figma so you can work offline without worrying about losing changes.</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </Route>
                <Route path={`${path}/:postId`}>
                    <BlogPost />
                </Route>
            </Switch>
        </div>
    )
}