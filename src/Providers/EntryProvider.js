import React, { createContext, useContext, useState } from 'react';

const EntryContext = createContext(null);

const EntryProvider = ({children}) => {
  const [loading, setLoading] = useState(false);

  const props = {
    loading, setLoading
  }
  return (
    <EntryContext.Provider value={props}>
      {children}
    </EntryContext.Provider>
   );
}
 
export default EntryProvider;

export const useEntry = () => {
  return useContext(EntryContext);
}