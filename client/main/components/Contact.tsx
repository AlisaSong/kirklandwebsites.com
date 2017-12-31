import { connect } from 'react-redux';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollUp from './ScrollUp';

import '../styles/contact.css';

interface ContactProps {
}

class Contact extends React.Component<ContactProps, any> {
    constructor(props: ContactProps) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <section>
                <Header />
                <form action="https://formspree.io/alisasong@gmail.com"
                    method="POST">
                    <label>
                        <span>Name*</span>
                        <input type="text" name="name" required />
                    </label>
                    <label>
                        <span>Email Address*</span>
                        <input type="email" name="_replyto" required />
                    </label>
                    <label>
                        <span>Phone Number</span>
                        <input type="phone" name="phone" />
                    </label>
                    <label className="fill">
                        <span>Message*</span>
                        <textarea name="message" required />
                    </label>
                    <button type="submit">Send</button>
                </form>
                <Footer />
                <ScrollUp />
            </section>
        )
    }
}

export default connect((state: any) => { return {}; })(Contact);
