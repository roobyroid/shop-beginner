import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShopContextProvider } from './context/context-shop';
import { Navbar } from './components/Navbar';
import { Shop } from './pages/Shop';
import { Cart } from './pages/Cart';

import './App.css';

function App() {
	return (
		<div className="App">
			<ShopContextProvider>
				<Router basename="shop-beginner">
					<Navbar />
					<Routes>
						<Route path="/" element={<Shop />} />
						<Route path="/cart" element={<Cart />} />
					</Routes>
				</Router>
			</ShopContextProvider>
		</div>
	);
}

export default App;
