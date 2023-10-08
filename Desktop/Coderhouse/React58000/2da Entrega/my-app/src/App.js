
// Importing app.css is css file to add styling
import "./App.css";
import {BrowserRouter, Routes, Route}	from 'react-router-dom'
import NavBar from './components/navbar/NavBar'
import ItemListContainer from './components/itemlistcontainer/itemlistcontainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
	return(
		<div className="App">
			<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path= "/" element={<ItemListContainer />}/>
				<Route path= "/category/:categoryId" element={<ItemListContainer />}/>
				<Route path= "/item/:itemId" element={<ItemDetailContainer />}/>
				<Route path= "*" element={<h3>404 NOT FOUND</h3>} />
			</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;