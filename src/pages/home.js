import React from 'react';
import Result from '../components/result';
import Search from '../components/search';
import { useGlobalContext } from './../context';

function Home() {
  const { loading } = useGlobalContext();
  if (loading) {
    return <div className='loader'></div>;
  }
  return (
    <main className='home'>
      <Search />
      <Result />
    </main>
  );
}

export default Home;
