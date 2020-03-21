import { Component } from 'preact';
import { Router } from 'preact-router';

import Home from '../routes/home';
import Speakers from '../routes/speakers';
import Schedule from '../routes/schedule';
import NotFound from '../routes/404';
import Header from './header';
import Footer from './footer';
import SocialBlock from './social-block';

export default class App extends Component {
    state = {
        currentPath: '/'
    };

    handleRoute = e => this.setState({currentPath: e.url});

	render() {
		return (
			<div id="app">
                <Header currentRoute={this.state.currentPath} />

                <main>
                    <Router onChange={this.handleRoute}>
                        <Home path="/" />
                        {/* <Speakers path="/speakers/" />
                        <Schedule path="/schedule/" /> */}
                        <NotFound default />
                    </Router>
                </main>

                <SocialBlock />
                <Footer />
			</div>
		);
	}
}
