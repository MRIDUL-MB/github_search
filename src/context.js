import React, { useContext, useState } from 'react';

const AppContext = React.createContext();
const url = 'https://api.github.com/search/users?q';
function AppProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState();

  const fetchUsers = async () => {
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AppContext.Provider value={(setSearchTerm, fetchUsers)}>
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext };
