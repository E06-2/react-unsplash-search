import { useEffect } from 'react';

const SearchForm = ({
  inputRef,
  searchInput,
  setSearchInput,
  submitHandler,
}) => {
  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  return (
    <form>
      <input
        type='text'
        value={searchInput}
        ref={inputRef}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button onClick={(e) => submitHandler(e)}>Search</button>
    </form>
  );
};

export default SearchForm;
