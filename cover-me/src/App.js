import React, { useState } from 'react';
import Generator from './components/Generator';
import Profile from './components/Profile';

function App() {

  const [page,setPage] = useState();

  return (
    <main>
      <Generator />
      <Profile />
    </main>
  );
}

export default App;
