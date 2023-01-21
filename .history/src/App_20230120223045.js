import { Routes, Route } from 'react-router-dom';

import Layout from './appLayout/Layout';
import AllBooks from './Pages/AllBooks';
import Categories from './Pages/Categories';
o,[]

function App() {
  return (
    <div
      className='bg-[#ccc]-600 w-full h-screen'
    >
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<AllBooks />} />
          <Route path='categories' element={<Categories />} />

        </Route>
      </Routes>
    </div>
  )
}

export default App;
