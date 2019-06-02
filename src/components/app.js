import { Component } from 'preact';
import { Router } from 'preact-router';

import Home from '../routes/home';
import NotFound from '../routes/404';
import Header from './header';
import SocialBlock from './social-block';
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

export default class App extends Component {
	render() {
		return (
			<div id="app">
                <Header />
				<Router>
					<Home path="/" />
					<NotFound default />
				</Router>

                <SocialBlock />
			</div>
		);
	}
}
