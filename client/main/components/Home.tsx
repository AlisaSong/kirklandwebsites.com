import { connect } from 'react-redux';
import * as React from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollUp from './ScrollUp';

import '../styles/home.css';

interface HomeProps {
}

class Home extends React.Component<HomeProps> {
    render() {
        return (
            <section>
                <Header />
                <Footer />
            <ScrollUp />
            </section>
        );
    }
}

export default connect((state: any) => { return {}; })(Home);
