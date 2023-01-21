import './App.css';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </div>
  )
}

export default App;
