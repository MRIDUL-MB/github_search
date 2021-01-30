import React, { useContext, useState, useCallback } from 'react';

const AppContext = React.createContext();
const url = 'https://api.github.com/search/users?q=';

function AppProvider({ children }) {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState(':');
  const [users, setUsers] = useState([]);
  console.log(searchTerm);
  const fetchUsers = useCallback(async () => {
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const { items } = data;
      setUsers(items);
      console.log(`${url}${searchTerm}`);
    } catch (error) {
      console.error(error);
    }
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{
        showSearch,
        setShowSearch,
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
