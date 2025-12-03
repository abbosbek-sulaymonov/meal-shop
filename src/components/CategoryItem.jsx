import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import classes from './styles/category-item.module.css';

function CategoryItem(props) {
  const { strCategory, strCategoryThumb, strCategoryDescription } = props;

  return (
    <div className={classes.categoryCard}>
      <div className={classes.imageWrapper}>
        <img src={strCategoryThumb} alt={strCategory} loading="lazy" />
        <div className={classes.imageOverlay}></div>
      </div>
      <div className={classes.cardContent}>
        <h3 className={classes.cardTitle}>{strCategory}</h3>
        <p className={classes.cardDescription}>{strCategoryDescription?.slice(0, 80)}...</p>
      </div>
      <div className={classes.cardAction}>
        <Link to={`/category/${strCategory}`} className={classes.viewButton}>
          View Category
          <ArrowRight size={18} className={classes.arrowIcon} />
        </Link>
      </div>
    </div>
  );
}

export { CategoryItem };
