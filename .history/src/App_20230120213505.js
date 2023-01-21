import './App.css';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout/Layout';
import Navbar from './components/Navbar';
import AllBooks from './'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </div>
  )
}

export default App;
