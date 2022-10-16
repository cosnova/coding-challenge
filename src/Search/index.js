import { useState, useEffect } from 'react';
import FilterBar from './FilterBar';
import Results from './Results';
import fetchProducts from './models/fetchProducts';
import './style.css';

const Search = () => {
  const [brand, setBrand] = useState("almay");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchProducts(brand, query).then(data => setResults(data));
    return () => {};
  }, [brand, query]);

  return (
    <>
      <FilterBar
        query={query}
        onQueryChange={setQuery}
        brand={brand}
        onBrandChange={setBrand}
      />

      <Results results={results} />
    </>
  );
}

export default Search;
