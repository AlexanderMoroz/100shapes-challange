import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from './theme';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./components/home";

const App: React.FunctionComponent = () => {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Route component={Home} path={["/:id", "/"]} />
			</Router>
		</ThemeProvider>
	);
};

export default App;
