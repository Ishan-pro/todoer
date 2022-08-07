import { useState, useEffect, useRef } from 'react';
import { Login, Navbar, TodoForm } from './components';
import supabase from './supabase';

function App() {
  const user = supabase.auth.user();

  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div style={{ height: '85vh' }}>{user ? <TodoForm /> : <Login />}</div>
    </>
  );
}

export default App;
