import s from './Indentation.module.scss'

export function IndentationLeft() {
  return(
    <div className={s.left} onClick={goToTop} title="Up!">
      {/* LEFT */}
    </div>
  );
}

export function IndentationRight() {
  return(
    <div className={s.right}>
      {/* RIGHT */}
    </div>
  );
}

function goToTop() {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
};
