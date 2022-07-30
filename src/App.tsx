import { useState } from 'react';
import Navbar from './components/Navbar';
import TodoForm from './components/TodoForm';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <TodoForm />
    </>
  );
}

export default App;
