import React, { useContext, useState, useCallback } from 'react';

const AppContext = React.createContext();
const url = 'https://api.github.com/search/users?q=';

function AppProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState(':');
  const [users, setUsers] = useState([]);
  console.log(searchTerm);
  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const { items } = data;
      setUsers(items);
      setLoading(false);
      console.log(`${url}${searchTerm}`);
    } catch (error) {
      console.error(error);
    }
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{
        loading,
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
