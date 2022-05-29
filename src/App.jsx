import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux'
import { useStore } from 'store'
import Search from "components/search";
import axios from 'axios'

axios.defaults.crossDomain = true

const App = () => {
	const store = useStore()
	return (
		<Provider store={store}>
			<Router>
				<Routes>
					<Route path="/" exact element={<Search />} />
				</Routes>
			</Router>
		</Provider>
	);
};

export default App;
