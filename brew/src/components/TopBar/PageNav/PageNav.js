import React, {useEffect, useRef, useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import './page-nav.less';

export default function PageNav() {

    const [isHidden, setIsHidden] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const pagenavRef = useRef(null);
    const [headerHeight, setHeaderHeight] = useState(80);
    const [activeSection, setActiveSection] = useState('overview');

    let location = useLocation();

    useEffect(() => {
        setHeaderHeight(document.getElementsByTagName('header')[0].clientHeight);
    },[headerHeight, setHeaderHeight]);

    useEffect(() => {
        window.addEventListener('scroll', onPageScroll, {passive: true});
        return () => {
            window.removeEventListener('scroll', onPageScroll)
        }
    }, [prevScrollPos, isHidden, setIsHidden, setPrevScrollPos])

    useEffect(() => {
        if (location.hash.length >= 1) {
            console.log('hash', location.hash)
            setActiveSection(location.hash.substr(1, location.hash.length));
        }
    }, [location])

    function onPageScroll() {
        let pos = window.scrollY;
        // if (prevScrollPos < pos && pos > 100) {
        //     setIsHidden(true);
        // } else if (prevScrollPos > pos) {
        //     setIsHidden(false);
        // }
        // setPrevScrollPos(pos);
        if (window.scrollY >= 0) {
            let top = pagenavRef.current.style.top || 0;
            pagenavRef.current.style.top = Math.min(Math.max((parseFloat(top) + (prevScrollPos - pos)), 0), headerHeight) + 'px';
            setPrevScrollPos(pos);
        }
    }

    return(
        <div style={{top: headerHeight}} ref={pagenavRef} className={"page-nav" + (isHidden ? ' hidden' : '')}>
            <div className="page-nav--container">
                <div className="page-nav-left">
                    <div className="product-name">
                        <Link to="#intro">
                            <h1 className="product-name">OmniPack</h1>
                        </Link>
                    </div>
                    <div className="nav-tabs">
                        <div className={"tab" + (activeSection === 'overview' ? ' active' : '')}>
                            <Link to='#overview' />
                            <p className="tab-label">Overview</p>
                        </div>
                        <div className={"tab" + (activeSection === 'installation' ? ' active' : '') }>
                            <Link to='#installation' />
                            <p className="tab-label">Installation</p>
                        </div>
                        <div className={"tab" + (activeSection === 'distributors' ? ' active' : '')}>
                            <Link to='#distributors' />
                            <p className="tab-label ">Distributors</p>
                        </div>

                    </div>
                </div>
                <div className="page-nav-right">
                    <Link to="#get-omnipack"><div className="demo-button">Free demo</div></Link>
                </div>
            </div>
        </div>
    )
}