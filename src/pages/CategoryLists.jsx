import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ChefHat } from 'lucide-react';
import classes from './styles/category-list.module.css';

export default function CategoryLists(props) {
  const { strMeal, strMealThumb, idMeal } = props;
  const [isFavorite, setIsFavorite] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <Link to={`/meal/${idMeal}`} className={classes.mealCard}>
      <div className={classes.imageContainer}>
        {!imageLoaded && <div className={classes.shimmer}></div>}
        <img
          src={strMealThumb}
          alt={strMeal}
          className={`${classes.mealImage} ${imageLoaded ? classes.visible : ''}`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
        <button
          className={`${classes.favoriteBtn} ${isFavorite ? classes.favorited : ''}`}
          onClick={handleFavoriteClick}
        >
          <Heart size={18} fill={isFavorite ? 'currentColor' : 'none'} strokeWidth={2} />
        </button>
        <div className={classes.hoverOverlay}>
          <div className={classes.quickView}>
            <ChefHat size={20} />
            <span>View Recipe</span>
          </div>
        </div>
      </div>
      <div className={classes.cardBody}>
        <h3 className={classes.mealName}>{strMeal}</h3>
      </div>
    </Link>
  );
}
