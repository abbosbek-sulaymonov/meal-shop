import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAllCategories } from '../api';
import CategoryList from '../components/CategoryList';
import { Loader } from '../components/Loader';
import Search from '../components/Search';
import classes from './styles/home.module.css';

export default function Home() {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();
  const { pathname, search } = location;
  const navigate = useNavigate();

  const handleSearch = (str) => {
    setFilteredCatalog(catalog.filter((item) => item.strCategory.toLowerCase().includes(str.toLowerCase())));
    navigate({
      pathname,
      search: str ? `?search=${str}` : '',
    });
  };

  useEffect(() => {
    setIsLoading(true);
    getAllCategories()
      .then((data) => {
        setCatalog(data.categories);
        const searchQuery = search ? search.split('=')[1] : '';
        setFilteredCatalog(
          searchQuery
            ? data.categories.filter((item) => item.strCategory.toLowerCase().includes(searchQuery.toLowerCase()))
            : data.categories,
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [search]);

  return (
    <div className={classes.homeContainer}>
      <div className={classes.heroSection}>
        <h1 className={classes.heroTitle}>Discover Delicious Recipes</h1>
        <p className={classes.heroSubtitle}>Explore our collection of meals from around the world</p>
        <Search inputSearch={handleSearch} />
      </div>

      <div className={classes.resultsSection}>
        {filteredCatalog.length > 0 && (
          <h2 className={classes.resultsTitle}>
            {search ? `Search Results (${filteredCatalog.length})` : 'All Categories'}
          </h2>
        )}
        {isLoading ? <Loader count={8} /> : <CategoryList catalog={filteredCatalog} />}
        {!isLoading && filteredCatalog.length === 0 && (
          <div className={classes.noResults}>
            <p>No categories found. Try a different search term.</p>
          </div>
        )}
      </div>
    </div>
  );
}
