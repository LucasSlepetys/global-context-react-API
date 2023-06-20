import { useState } from 'react';
import { useGlobalContext } from './context';

function App() {
  const { name } = useGlobalContext();

  return <main>Hello {name}</main>;
}

export default App;
