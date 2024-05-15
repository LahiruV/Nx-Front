import {FC} from 'react';
import Login from './pages/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App: FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="users/:id" element={<Login />} />
		</Routes>
	</BrowserRouter>
);

export default App;
