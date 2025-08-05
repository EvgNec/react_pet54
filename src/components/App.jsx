import { Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout'

import ToDoPage from './pages/ToDoPage'
import ToDoDetails from './ToDo/ToDoDetails'

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='todo' element={<ToDoPage />} />
				<Route path='todo/:id/:title' element={<ToDoDetails />} />
			</Route>
		</Routes>
	)
}

export default App
