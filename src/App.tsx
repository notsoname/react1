import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/header';
import routes from './constans/routes';

function App() {
  return (
    <div className="App">
      <Header />
      <Container className="p-4">
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={<route.component />} />
          ))}
        </Routes>
      </Container>
    </div>
  );
}

export default App;
