import React from 'react';
import './App.css';
import Table from './components/table';
import MainProvider from './context/MainProvider';
import SearchBar from './components/searchBar';
import Selects from './components/selects';

function App() {
  return (
    <MainProvider>
      <SearchBar />
      <Selects />
      <Table />
    </MainProvider>
  );
}

export default App;
