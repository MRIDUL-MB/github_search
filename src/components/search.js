import React, { useRef, useCallback } from 'react';
import { useGlobalContext } from './../context';
function Search() {
  const {
    setSearchTerm,
    fetchUsers,
    showSearch,
    setShowSearch,
  } = useGlobalContext();
  const refContainer = useRef('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUsers();
  };
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
      <form id='search-form' className='form' onSubmit={handleSubmit}>
        <input
          type='search'
          id='search-input'
          autoComplete='off'
          placeholder='Eg. john'
          ref={refContainer}
          onChange={() => {
            setSearchTerm(refContainer.current.value);
            if (refContainer.current.value) {
              setShowSearch(true);
            } else {
              setShowSearch(false);
            }
          }}
          required
        />
        <button>
          <i className={showSearch ? 'fas fa-search' : 'none'}></i>
        </button>
      </form>
    </section>
  );
}

export default Search;
