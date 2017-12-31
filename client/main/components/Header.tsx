import { connect } from 'react-redux';
import * as React from 'react';
import { Link } from 'react-router-dom';

import '../styles/header.css';


interface HeaderProps {
}

class Header extends React.Component<HeaderProps, any> {
    constructor(props: HeaderProps) {
        super(props);

        this.state = {
            isDropdownMenuVisible: false,
            isMenuExpanded: false,
            tabs: [{
                displayText: 'HOME',
                link: '/'
            }, {
                displayText: 'CONTACT',
                link: '/contact'
            }]
        };
    }

    getToggle(isExpanded: boolean): string {
        return isExpanded ? ' -' : '+';
    }

    onClickMenu(): void {
        this.setState({
            isMenuExpanded: !this.state.isMenuExpanded
        });
    }

    onClickTab(index: number): void {
        let tabs = this.state.tabs;
        tabs[index].isExpanded = !tabs[index].isExpanded;
        this.setState({
            tabs: tabs
        });
    }

    render() {
        return (
            <header>
                <div className="header-logo">
                </div>
                <ul className="tabs">
                    {this.state.tabs.map((tab, index) =>
                        <li className="tab"
                            key={index}>
                            <Link to={tab.link}>{tab.displayText}</Link>
                            {tab.dropdownMenu && <div className="dropdown-menu">
                                {tab.dropdownMenu.map((option, i) =>
                                    <Link key={i} to={option.link}>{option.displayText}</Link>
                                )}
                            </div>}
                        </li>
                    )}
                </ul>
                <div className="menu" onClick={() => { this.onClickMenu() }}>
                    <span className="menu-title">MENU</span>
                    <span className="dark-gray-text">{this.getToggle(this.state.isMenuExpanded)}</span>
                </div>
                {this.state.isMenuExpanded && <ul className="tabs-small">
                    {this.state.tabs.map((tab, index) =>
                        <li className="tab-small"
                            key={index}>
                            {tab.dropdownMenu && <div>
                                <div className="dropdown-menu-options dark-gray-text" onClick={() => { this.onClickTab(index) }}>
                                    <span>{tab.displayText}</span>
                                    <span>{this.getToggle(tab.isExpanded)}</span>
                                </div>
                                {tab.isExpanded && tab.dropdownMenu.map((option, i) =>
                                    <Link className="tabs-small-expanded dark-gray-text" key={i} to={option.link}>{option.displayText}</Link>
                                )}
                            </div>}
                            {!tab.dropdownMenu && <Link className="dark-gray-text" to={tab.link}>{tab.displayText}</Link>}
                        </li>
                    )}
                </ul>}
            </header>
        );
    }
}

export default connect((state: any) => { return {}; })(Header);
