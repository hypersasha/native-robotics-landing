import React from 'react';

import './notfound.less';

export default function NotFound() {
    return(
        <div className="notfound">
            <div className="notfound-content">
                <div className="description">
                    <h1>Page not found.</h1>
                    <p>The requested page <b>{window.location.pathname}</b> does not exist. <br /><br />Take me back to <a href='/'>home</a>.</p>
                </div>
                <div className="code">
                    <h1>404</h1>
                </div>
            </div>
        </div>
    )
}
