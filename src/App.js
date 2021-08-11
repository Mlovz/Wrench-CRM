import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Address from "./pages/address";
import Home from "./pages/home";

function App() {
	const location = useLocation();

	return (
		<div className="app">
			<Header />

			<div className="app__route">
				<Sidebar />
				<div className="app__route__pages">
					<AnimatePresence exitBeforeEnter>
						<Switch location={location} key={location.key}>
							<Route exact path="/" component={Home} />
							<Route exact path="/address" component={Address} />
						</Switch>
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
}

export default App;
