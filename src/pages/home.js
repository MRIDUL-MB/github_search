import React from 'react';
import Result from '../components/result';
import Search from '../components/search';

function Home() {
  return (
    <main className='home'>
      <Search />
      <Result />
    </main>
  );
}

export default Home;
