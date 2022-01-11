import { useState, useRef } from 'react';
import './App.css';

import SearchForm from './components/SearchForm';
import useFetch from './hooks/useFetch';

const App = () => {
  const [search, setSearch] = useState('berlin');
  const [searchInput, setSearchInput] = useState('');

  const inputRef = useRef();

  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&per_page=10&query=${search}`;

  const submitHandler = (e) => {
    e.preventDefault();
    setSearch(searchInput);
    setSearchInput('');
    inputRef.current.focus();
  };

  const { results, loading, error } = useFetch(url);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const imageList = results.results.map((image) => (
    <img key={image.id} src={image.urls.thumb} alt='pic' />
  ));

  return (
    <main>
      <h1>Welcome to {search}</h1>
      <SearchForm
        inputRef={inputRef}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        submitHandler={submitHandler}
      />
      {results && imageList}
    </main>
  );
};

export default App;
