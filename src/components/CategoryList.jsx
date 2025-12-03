import { CategoryItem } from './CategoryItem';
import classes from './styles/category-list.module.css';

function CategoryList({ catalog = [] }) {
  return (
    <div className={classes.categoryGrid}>
      {catalog.map((el) => (
        <CategoryItem key={el.idCategory} {...el} />
      ))}
    </div>
  );
}

export default CategoryList;
