import React from 'react';
import { useGlobalContext } from './../context';
function Result() {
  const { users, loading } = useGlobalContext();

  if (loading) {
    return <div className='loader'></div>;
  }
  if (users.length < 1) {
    return <div className='error'>sorry, no result found</div>;
  }
  return (
    <section className='result'>
      {/* <div className='stats'>{users.length} users are found</div> */}
      <div className='users-template'>
        {users.map((item) => {
          const { id, login, avatar_url, html_url } = item;
          return (
            <article key={id} className='users'>
              <img src={avatar_url} alt={login} />
              <div className='title'>
                <a rel='noreferrer' href={html_url} target='_blank'>
                  {login}
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Result;
