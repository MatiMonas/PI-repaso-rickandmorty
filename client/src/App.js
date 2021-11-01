import './App.css';
import React, { useEffect } from 'react';
import axios from 'axios';

function App() {

  useEffect(() => {
    axios.get('localhost:3001/api/episodes')
    
  }, [])
  return (
    <div>Rick and morty app</div>
  );
}

export default App;
