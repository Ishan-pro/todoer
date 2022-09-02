import { useState, useEffect, useRef } from 'react';
import { Login, Navbar, TodoForm } from './components';
import supabase from './utils/supabase';

function App() {
  const [user, SetUser] = useState<string|undefined>(supabase.auth.user()?.id)
  supabase.auth.onAuthStateChange((event, session) => {
    SetUser(session?.user?.id)
  });
  console.log(user)

  return (
    <>
      <Navbar />
      <div style={{ height: '85vh' }}>{user ? <TodoForm user={user} /> : <Login/>}</div>
    </>
  );
}

export default App;
