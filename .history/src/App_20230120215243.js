import { Routes, Route } from 'react-router-dom';

import {
  AllBooks,
  Book,
  Categories,
  Navbar,
} from './utils/constants';

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
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/books" element={<AllBooks />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  )
}

export default App;
