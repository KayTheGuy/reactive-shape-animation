import React from 'react';
import './App.css';
import DataFetcher from './components/fetcher/DataFetcher';
import ShapeDispatcher from './components/shapes/ShapeDispatcher';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<div><DataFetcher /></div>
				<div><ShapeDispatcher /></div>
			</header>
		</div>
	);
}

export default App;
