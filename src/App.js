import './App.css';
import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes
} from 'react-router-dom';
import Products from "./components/products";

function App() {
  return (
    <>
    <div className='container-fluid full-height'>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate replace to="/products"/>}/>
          <Route path="/products" element={<Products/>}/>
        </Routes>
      </Router>

    </div>

    </>
  );
}

export default App;
