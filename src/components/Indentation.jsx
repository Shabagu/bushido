import classes from './style/Indentation.module.scss'

export function IndentationLeft() {
  return(
    <div className={classes.left} onClick={goToTop} title="Up!">
      {/* LEFT */}
    </div>
  );
}

export function IndentationRight() {
  return(
    <div className={classes.right}>
      {/* RIGHT */}
    </div>
  );
}

function goToTop() {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
};
