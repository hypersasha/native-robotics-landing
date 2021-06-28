import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './breadcrumbs.less'

export default function Breadcrumbs() {


    const [crumbs, setCrumbs] = useState(null);
    const pathMap = {
        'blog': 'Blog'
    };
    useEffect(() => {
        // console.log('location:', window.location.pathname);
        let pathParts = window.location.pathname.split('/');
        console.log(pathParts);
        let pathCrumbs = pathParts.map((part, i) => {
            let label = part === "" ? 'Home' : (pathMap[part] !== undefined ? pathMap[part] : 'Article');
            return <div className={'crumb'} key={part}>
                {pathParts.length === i + 1 ? <p>{label}</p> : <Link to={'/' + part}>{label}</Link>}
            </div>
        })
        setCrumbs(pathCrumbs);
    }, [setCrumbs]);

    return(
        <div className="breadcrumbs">
            {crumbs}
        </div>
    )
}