import { useState } from 'react';
import { useGlobalContext } from './context';

//App is where all the application will be located in order to access the data from context.jsx
function App() {
  const { name } = useGlobalContext();

  return <main>Hello {name}</main>;
}

export default App;
