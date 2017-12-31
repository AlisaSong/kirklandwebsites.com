import { connect } from 'react-redux';
import * as React from 'react';
import { Link } from 'react-router-dom';

import '../styles/footer.css';

interface FooterProps {
}

class Footer extends React.Component<FooterProps, any> {
    constructor(props: FooterProps) {
        super(props);

        this.state = {
            social: [{
                icon: 'instagram',
                link: 'https://www.instagram.com/kirklandwebsites'
            }, {
                icon: 'facebook',
                link: 'https://www.facebook.com'
            }]
        }

    }
    render() {
        return (
            <footer>
                <div className="footer-divider" />
                <ul className="social">
                    {this.state.social.map((social, index) =>
                        <li className="icon"
                            key={index}
                            onClick={() => { window.open(social.link, '_blank') }}>
                            <i className={"fa fa-" + social.icon + "  fa-2x"}></i>
                        </li>
                    )}
                </ul>
                <p className="footer-text">&copy;2018 Kirkland Websites</p>
                <p className="footer-text">Website created by <a href="http://www.alisasong.com">Alisa Song</a></p>
            </footer>
        )
    };
}

export default connect((state: any) => { return {}; })(Footer);
