import { Component } from 'preact';
import { Router } from 'preact-router';

import Home from '../routes/home';
import Speakers from '../routes/speakers';
import NotFound from '../routes/404';
import Header from './header';
import Footer from './footer';
import SocialBlock from './social-block';
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

export default class App extends Component {
    state = {
        currentPath: '/'
    };

    handleRoute = e => this.setState({currentPath: e.url});

	render() {
		return (
			<div id="app">
                <Header currentRoute={this.state.currentPath} />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
                    <Speakers path="/speakers/" />
					<NotFound default />
				</Router>

                <SocialBlock />
                <Footer />
			</div>
		);
	}
}
