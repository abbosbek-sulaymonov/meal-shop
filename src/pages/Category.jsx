import React, { useEffect, useState } from 'react';
import { Outlet, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Filter } from 'lucide-react';
import { getFilterCategory } from '../api';
import CategoryLists from './CategoryLists';
import { Loader } from '../components/Loader';
import classes from './styles/category.module.css';

export default function Category() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    getFilterCategory(name)
      .then((data) => {
        setMeals(data.meals || []);
      })
      .catch((error) => {
        console.error('Error fetching meals:', error);
        setMeals([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [name]);

  return (
    <div className={classes.categoryContainer}>
      {/* Breadcrumb */}
      <div className={classes.breadcrumb}>
        <button className={classes.backButton} onClick={() => navigate(-1)}>
          <ArrowLeft size={18} />
          <span>Back to Categories</span>
        </button>
      </div>

      {/* Header Section */}
      <div className={classes.pageHeader}>
        <div className={classes.headerContent}>
          <h1 className={classes.pageTitle}>{name}</h1>
          {!isLoading && (
            <p className={classes.mealCount}>
              {meals.length} {meals.length === 1 ? 'Recipe' : 'Recipes'}
            </p>
          )}
        </div>
      </div>

      {/* Meals Grid */}
      {isLoading ? (
        <Loader count={8} />
      ) : meals.length > 0 ? (
        <div className={classes.mealsGrid}>
          {meals.map((meal) => {
            return <CategoryLists key={meal.idMeal} {...meal} />;
          })}
        </div>
      ) : (
        <div className={classes.noMeals}>
          <div className={classes.noMealsContent}>
            <Filter size={48} className={classes.noMealsIcon} />
            <h3>No recipes found</h3>
            <p>We couldn't find any recipes in this category.</p>
            <button className={classes.exploreButton} onClick={() => navigate('/')}>
              Explore All Categories
            </button>
          </div>
        </div>
      )}

      {/* <Outlet context={meals} /> */}
    </div>
  );
}
