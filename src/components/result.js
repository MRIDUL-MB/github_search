import React, { useRef } from 'react';
import { useGlobalContext } from './../context';
function Result() {
  const { setSearchTerm, fetchUsers } = useGlobalContext();
  return (
    <section className='result'>
      <div className='stats'>2 users are found</div>
      <div className='users'>
        <img
          src='https://avatars.githubusercontent.com/u/53037689?v=4'
          alt=''
        />
        <div className='title'>
          <a href=''>Mridul Bagla</a>
        </div>
      </div>
      <div className='users'>
        <img
          src='https://avatars.githubusercontent.com/u/53037689?v=4'
          alt=''
        />
        <div className='title'>Mridul Bagla</div>
      </div>
    </section>
  );
}

export default Result;
