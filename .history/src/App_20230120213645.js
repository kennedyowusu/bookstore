import { Routes, Route } from 'react-router-dom';

import Layout from './Layout/Layout';
import Navbar from './components/Navbar';
import AllBooks from './components/Books/AllBooks';

function App() {
  return (
    <div
      style={{
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/books" element={<AllBooks />} />
      </Routes>
    </div>
  )
}

export default App;
