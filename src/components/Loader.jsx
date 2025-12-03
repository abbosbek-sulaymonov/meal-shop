import classes from './styles/loader.module.css';

function Loader({ count = 8 }) {
  return (
    <div className={classes.shimmerGrid}>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className={classes.shimmerCard}>
          <div className={classes.shimmerImage}></div>
          <div className={classes.shimmerContent}>
            <div className={classes.shimmerTitle}></div>
            <div className={classes.shimmerLine}></div>
            <div className={classes.shimmerLine}></div>
            <div className={classes.shimmerButton}></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export { Loader };
