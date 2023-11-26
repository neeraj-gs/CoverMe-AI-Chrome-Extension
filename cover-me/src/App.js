import React, { useState } from 'react';
import Generator from './components/Generator';
import Profile from './components/Profile';
import { ROUTES } from './utils/routes';

function App() {

  const [page,setPage] = useState();
  const [resume,setResume] = useState();
  const [openAIKey,setOpenAIKey] = useState();

  switch (page){
    case ROUTES.GENERATOR:
      return <Generator setPage={setPage} resume={resume} setResume={setResume}/>;

    case ROUTES.PROFILE:
      return <Profile setPage={setPage} resume={resume} setResume={setResume} openAIKey={openAIKey} setOpenAIKey={setOpenAIKey} />;

      default:
        return <Generator setPage={setPage} resume={resume} setResume={setResume}/>;
  }

}

export default App;
