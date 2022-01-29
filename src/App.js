import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import SingleProduct from './components/SingleProduct';

function App() {
	return (
		<BrowserRouter className='App'>
			<Navbar />
			<Switch>
				<Route path='/' exact>
					<Home />
				</Route>
				<Route path='/product/:id'>
					<SingleProduct />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
