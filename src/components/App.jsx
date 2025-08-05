import { Container, Header, Link } from './App.styled';
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home';
import ToDo from '../pages/ToDo';
import NotFound from '../pages/NotFound';

const App = () => {
	return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/todo">ToDo</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="todo" element={<ToDo />}>        

          
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
	)
}

export default App
