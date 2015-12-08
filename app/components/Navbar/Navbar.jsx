// Top navigation

import './navbar.scss';

import React from 'react';
import { Link } from 'react-router';

import Logo from './Logo.jsx';

export default class Navbar extends React.Component {
    state = {
        activePath: null
    };

    static contextTypes = {
        router: React.PropTypes.func.isRequired
    };

    static propTypes = {
        pages: React.PropTypes.array.isRequired
    };

    getActivePath() {
        let router = this.context.router;
        let pages = this.props.pages;
        // Don't count current page
        let i = pages.length -1;

        for (; i >= 0; i--) {
            let page = pages[i];
            let isPageActive = Boolean(page.route && router.isActive(page.route));
            if (isPageActive) { return i; }
        }
        return -1;
    }

    renderNavItem(activePath, page, index) {
        let className = null;
        if (index === activePath) { className = "-active"; }
        return (
            <Link to={page.route} className="navLink" key={'page-'+ index}>
                <image src={'assets/'+page.title+'.svg'} className={"navImage " + page.title}/>
            </Link>
        );
    }

    render() {
        let activePath = this.getActivePath();
        let strokeStyle = {
          stroke: "#000",
          fill: "none",
          strokeWidth: "28px",
          strokeLinecap: "round"
        }
        return (
            <ul className={'navigation-bar'}>
                <div className="logo" title="Wesley V. Magness">
                    <Logo />
                </div>

                <div className="items">
                    {this.props.pages.map(
                        this.renderNavItem.bind(this, activePath)
                    )}
                </div>
            </ul>
        );
    }
}
