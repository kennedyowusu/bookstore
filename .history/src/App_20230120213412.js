import './App.css';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout/Layout';
import 

function App() {
  return (
    <div className="App">
      Navbar
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </div>
  )
}

export default App;
