import './style/Indentation.scss';

export function IndentationLeft() {
  return(
    <div className="Left-to-main" onClick={goToTop} title="Up!">
      {/* LEFT */}
    </div>
  );
}

export function IndentationRight() {
  return(
    <div className="Right-to-main">
      {/* RIGHT */}
    </div>
  );
}

function goToTop() {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
};
