import React, { useEffect } from 'react';

function Search() {
  useEffect(() => {
    // This code will be executed when the component is mounted (onload)
    // alert('Component is loaded!');
  }, []); // The empty dependency array ensures the effect runs only once on mount

  return (
    <div>Search</div>
  );
}

export default Search;
