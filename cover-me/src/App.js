import React, { useState } from 'react';
import Generator from './components/Generator';
import Profile from './components/Profile';
import { ROUTES } from './utils/routes';

function App() {

  const [page,setPage] = useState();

  switch (page){
    case ROUTES.GENERATOR:
      return <Generator setPage={setPage} />;

    case ROUTES.PROFILE:
      return <Profile setPage={setPage} />;

      default:
        return <Generator setPage={setPage} />;
  }

}

export default App;
