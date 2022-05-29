import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux'
import { useStore } from 'store'
import Search from "components/search";
const App = () => {
	const store = useStore()
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Search} />
				</Switch>
			</BrowserRouter>
		</Provider>
	);
};

export default App;
