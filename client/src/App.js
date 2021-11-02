import './App.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCharacters, getEpisodes } from './Redux/actions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCharacters());
    dispatch(getEpisodes());
  }, [dispatch]);
  return <div>Rick and morty app</div>;
}

export default App;
