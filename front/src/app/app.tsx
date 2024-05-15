import {FC} from 'react';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';

const App: FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/login" element={<Login />} />
			<Route path="/" element={<Register />} />
		</Routes>
	</BrowserRouter>
);

export default App;
