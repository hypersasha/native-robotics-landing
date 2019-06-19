import React, {Component} from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import './header-menu.less';
import Logo from "../Logo/Logo";

class HeaderMenu extends Component {

    render() {
        return(
            <div className="header-menu">
                <div className="header-menu--left">
                    <Link to={'/'} style={{textDecoration: 'none', border: 'none', outline: 'none'}}><Logo/></Link>
                </div>
                <div className="header-menu--content">
                    {!this.props.packOnly &&
                    <div className={"menu-link"}>
                        <a href={"#omnikit"}>OmniKit</a>
                    </div>
                    }
                    {!this.props.packOnly &&
                    <div className={"menu-link"}>
                        <a href={"#principles"}>oFit</a>
                    </div>
                    }
                    <div className={"menu-link"}>
                        <a href={"#omnipack"}>oPack</a>
                    </div>
                    <div className={"menu-link"}>
                        <a href={"#codegain"}>CodeGain</a>
                    </div>
                </div>
                <div className="header-menu--right" style={{opacity: 0}}>
                    <svg width="24px" height="27px" viewBox="0 0 24 27" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="Desktop-HD" transform="translate(-1209.000000, -12.000000)" fill="#FFFFFF" fillRule="nonzero">
                                <g id="Header" transform="translate(-7.000000, 0.000000)">
                                    <g id="Header-Content" transform="translate(200.000000, 0.000000)">
                                        <g id="Discord-Logo-White" transform="translate(1016.000000, 12.000000)">
                                            <path d="M9.4340949,11 C8.63268893,11 8,11.6756757 8,12.5 C8,13.3243243 8.64674868,14 9.4340949,14 C10.2355009,14 10.8681898,13.3243243 10.8681898,12.5 C10.8822496,11.6756757 10.2355009,11 9.4340949,11 Z M14.5659051,11 C13.7644991,11 13.1318102,11.6756757 13.1318102,12.5 C13.1318102,13.3243243 13.7785589,14 14.5659051,14 C15.3673111,14 16,13.3243243 16,12.5 C16,11.6756757 15.3673111,11 14.5659051,11 Z" id="Shape"></path>
                                            <path d="M21.1885714,0 L2.81142857,0 C1.26171429,0 0,1.242 0,2.781 L0,21.033 C0,22.572 1.26171429,23.814 2.81142857,23.814 L18.3634286,23.814 L17.6365714,21.3165 L19.392,22.923 L21.0514286,24.435 L24,27 L24,2.781 C24,1.242 22.7382857,0 21.1885714,0 Z M15.8948571,17.631 C15.8948571,17.631 15.4011429,17.0505 14.9897143,16.5375 C16.7862857,16.038 17.472,14.931 17.472,14.931 C16.9097143,15.2955 16.3748571,15.552 15.8948571,15.7275 C15.2091429,16.011 14.5508571,16.2 13.9062857,16.308 C12.5897143,16.551 11.3828571,16.4835 10.3542857,16.2945 C9.57257143,16.146 8.90057143,15.93 8.33828571,15.714 C8.02285714,15.5925 7.68,15.444 7.33714286,15.255 C7.296,15.228 7.25485714,15.2145 7.21371429,15.1875 C7.18628571,15.174 7.17257143,15.1605 7.15885714,15.147 C6.912,15.012 6.77485714,14.9175 6.77485714,14.9175 C6.77485714,14.9175 7.43314286,15.9975 9.17485714,16.5105 C8.76342857,17.0235 8.256,17.631 8.256,17.631 C5.22514286,17.5365 4.07314286,15.579 4.07314286,15.579 C4.07314286,11.232 6.048,7.7085 6.048,7.7085 C8.02285714,6.2505 9.90171429,6.291 9.90171429,6.291 L10.0388571,6.453 C7.57028571,7.155 6.432,8.2215 6.432,8.2215 C6.432,8.2215 6.73371429,8.0595 7.24114286,7.83 C8.70857143,7.1955 9.87428571,7.02 10.3542857,6.9795 C10.4365714,6.966 10.5051429,6.9525 10.5874286,6.9525 C11.424,6.8445 12.3702857,6.8175 13.3577143,6.9255 C14.6605714,7.074 16.0594286,7.452 17.4857143,8.2215 C17.4857143,8.2215 16.4022857,7.209 14.0708571,6.507 L14.2628571,6.291 C14.2628571,6.291 16.1417143,6.2505 18.1165714,7.7085 C18.1165714,7.7085 20.0914286,11.232 20.0914286,15.579 C20.0914286,15.579 18.9257143,17.5365 15.8948571,17.631 Z" id="Shape"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
        )
    }
}

HeaderMenu.propTypes = {
    packOnly: PropTypes.bool
};

HeaderMenu.defaultProps = {
    packOnly: false
};

export default HeaderMenu;