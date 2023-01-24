import React from 'react';
import InputForm from '../components/Books/InputForm';
import AllBookListedBooks from '../components/Books/AllBooks';

const Home = () => (
  <section>
    <div>
      <AllBookListedBooks />
      <InputForm />
    </div>
  </section>
);

export default Home;
