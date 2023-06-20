import { createContext, useContext, useState } from 'react';

//Creates a context reference called globalcontext
const GlobalContext = createContext();

//Creates a function that allows any component within AppContext to access the data provided by value={...}
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

//Returns the wrap with context.Provider which allows the passing of data
const AppContext = (props) => {
  const [name, setName] = useState('Peter');
  return (
    // passes the data from this component as a dictionary
    <GlobalContext.Provider value={{ name, setName }}>
      {/* Sets the children of AppContext to be shown in the screen, by getting its children in props */}
      {/* props.children represents all components wrapped within this component (name children is provided by react) */}
      {props.children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
