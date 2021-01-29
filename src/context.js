import React, { useContext, useState } from 'react';

const AppContext = React.createContext();
const url = 'https://api.github.com/search/users?q=';

function AppProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState(':');
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const { items } = data;
      setUsers(items);
      console.log(`${url}${searchTerm}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        users,
        setSearchTerm,
        fetchUsers,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext };
