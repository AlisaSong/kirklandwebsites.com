import { connect } from 'react-redux';
import * as React from 'react';
import { Link } from 'react-router-dom';

import '../styles/scrollup.css';

interface ScrollUpProps {
}

class ScrollUp extends React.Component<ScrollUpProps, any> {
    constructor(props: ScrollUp) {
        super(props);

        this.state = {
            scrollClass: 'scroll-up-wrapper-hidden'
        };
    }

    componentDidMount(): void {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    componentWillUnmount(): void {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event: any): void {
        let scrollTop: number = window.scrollY;
        let scrollClass = 'scroll-up-wrapper';
        if (scrollTop < 750) {
            scrollClass += ' scroll-up-wrapper-hidden';
        }

        this.setState({
            scrollClass: scrollClass
        });
    }

    onClickScrollUp() {
        window.scrollTo(300, 2);
    }

    render() {
        return (
            <div className={this.state.scrollClass} onClick={() => { this.onClickScrollUp() }}>
                <i className="fa fa-chevron-up"></i>
            </div>
        )
    };
}

export default connect((state: any) => { return {}; })(ScrollUp);
