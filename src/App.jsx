import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './routes/Dashboard';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/dashboard' element={<Dashboard />} />
			</Routes>
		</>
	);
}

export default App;
