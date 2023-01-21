import { Routes, Route } from 'react-router-dom';

import Layout from './appLayout/Layout';
import Navbar from './components/Navbar';
import AllBooks from './Pages/AllBooks';
import Categories from './Pages/Categories';

function App() {
  return (
    <div
      style={{
        backgroundColor: '#f1f1f1',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
     
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/books" element={<AllBooks />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  )
}

export default App;
