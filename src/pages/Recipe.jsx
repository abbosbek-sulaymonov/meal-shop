import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ChefHat, Globe, Youtube, Heart, Share2, Printer, Clock, Users } from 'lucide-react';
import { getMealById } from '../api';
import { Loader } from '../components/Loader';
import classes from './styles/recipe.module.css';

export default function Recipe() {
  const [recipe, setRecipe] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    getMealById(id)
      .then((data) => {
        setRecipe(data.meals[0]);
      })
      .catch((error) => {
        console.error('Error fetching recipe:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  const getIngredients = () => {
    if (!recipe) return [];
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      if (ingredient && ingredient.trim()) {
        ingredients.push({ ingredient, measure });
      }
    }
    return ingredients;
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: recipe.strMeal,
        text: `Check out this recipe: ${recipe.strMeal}`,
        url: window.location.href,
      });
    }
  };

  if (isLoading) {
    return (
      <div className={classes.loaderContainer}>
        <Loader count={1} />
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className={classes.errorContainer}>
        <h2>Recipe not found</h2>
        <button className={classes.backBtn} onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    );
  }

  const ingredients = getIngredients();

  return (
    <div className={classes.recipeContainer}>
      {/* Header */}
      <div className={classes.header}>
        <button className={classes.backBtn} onClick={() => navigate(-1)}>
          <ArrowLeft size={18} />
        </button>
        <div className={classes.actions}>
          <button
            className={`${classes.iconBtn} ${isFavorite ? classes.favorited : ''}`}
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <Heart size={18} fill={isFavorite ? 'currentColor' : 'none'} />
          </button>
          <button className={classes.iconBtn} onClick={handleShare}>
            <Share2 size={18} />
          </button>
          <button className={classes.iconBtn} onClick={() => window.print()}>
            <Printer size={18} />
          </button>
        </div>
      </div>

      {/* Hero */}
      <div className={classes.hero}>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} className={classes.heroImg} />
        <div className={classes.heroOverlay}>
          <h1 className={classes.title}>{recipe.strMeal}</h1>
          <div className={classes.badges}>
            {recipe.strCategory && (
              <span className={classes.badge}>
                <ChefHat size={14} />
                {recipe.strCategory}
              </span>
            )}
            {recipe.strArea && (
              <span className={classes.badge}>
                <Globe size={14} />
                {recipe.strArea}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className={classes.grid}>
        {/* Main Content */}
        <div className={classes.main}>
          {/* Quick Stats */}
          <div className={classes.stats}>
            <div className={classes.stat}>
              <ChefHat size={16} />
              <span>{ingredients.length} ingredients</span>
            </div>
            {recipe.strTags && (
              <div className={classes.tags}>
                {recipe.strTags
                  .split(',')
                  .slice(0, 3)
                  .map((tag, i) => (
                    <span key={i} className={classes.tag}>
                      {tag.trim()}
                    </span>
                  ))}
              </div>
            )}
          </div>

          {/* Ingredients */}
          <section className={classes.section}>
            <h2 className={classes.sectionTitle}>Ingredients</h2>
            <ul className={classes.ingredientList}>
              {ingredients.map((item, index) => (
                <li key={index} className={classes.ingredient}>
                  <span className={classes.ingredientDot}></span>
                  <span className={classes.ingredientText}>
                    <strong>{item.measure}</strong> {item.ingredient}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Instructions */}
          <section className={classes.section}>
            <h2 className={classes.sectionTitle}>Instructions</h2>
            <div className={classes.instructions}>
              {recipe.strInstructions.split('\n').map((paragraph, index) => {
                if (paragraph.trim()) {
                  return (
                    <p key={index} className={classes.step}>
                      <span className={classes.stepNumber}>{index + 1}</span>
                      {paragraph}
                    </p>
                  );
                }
                return null;
              })}
            </div>
          </section>

          {/* Video */}
          {recipe.strYoutube && (
            <section className={classes.section}>
              <h2 className={classes.sectionTitle}>Video Tutorial</h2>
              <div className={classes.videoWrapper}>
                <iframe
                  src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`}
                  allowFullScreen
                  title={recipe.strMeal}
                  className={classes.video}
                />
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <aside className={classes.sidebar}>
          <div className={classes.sidebarCard}>
            <h3 className={classes.sidebarTitle}>Recipe Info</h3>
            <div className={classes.infoList}>
              <div className={classes.infoRow}>
                <span className={classes.infoLabel}>Category</span>
                <span className={classes.infoValue}>{recipe.strCategory || 'N/A'}</span>
              </div>
              <div className={classes.infoRow}>
                <span className={classes.infoLabel}>Cuisine</span>
                <span className={classes.infoValue}>{recipe.strArea || 'N/A'}</span>
              </div>
              <div className={classes.infoRow}>
                <span className={classes.infoLabel}>Ingredients</span>
                <span className={classes.infoValue}>{ingredients.length}</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
