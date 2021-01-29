import React from 'react';

function Search() {
  return (
    <section className='search'>
      <div className='logo'>
        <span className='blue'>S</span>
        <span className='red'>E</span>
        <span className='yellow'>A</span>
        <span className='blue'>R</span>
        <span className='green'>C</span>
        <span className='red'>H</span>
        <span className='yellow exclaim'>!</span>
      </div>
      <form id='search-form' className='form'>
        <input
          type='search'
          id='search-input'
          autoComplete='false'
          placeholder='Enter the username'
        />
        <button>
          <i class='fas fa-search'></i>
        </button>
      </form>
    </section>
  );
}

export default Search;
