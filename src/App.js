import React from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';
import LoginContainer from './containers/LoginContainer/LoginContainer';
import './app.scss';

const App = () => {
	return (
		<Router>
			<Route path="/" component={LoginContainer} />
		</Router>
	);
};

export default App;