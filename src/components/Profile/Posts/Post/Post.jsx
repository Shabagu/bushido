import s from './Post.module.scss';

function Post() {
  return (
    <div className={s.post}>
      <div className={s.top}>
        <div className={s.author}>
          <img className={s.avatar} src="https://i.pinimg.com/736x/59/ac/de/59acde8a2e5791c5f2d2610277ed95f6--twitter-green.jpg" alt="User" />
          <div className={s.nickname}>Nickname</div>
        </div>
        <div className={s.date_container}>Posted: <span className={s.date}>14.11.2021</span></div>
      </div>
      <div className={s.content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptas iure fuga pariatur aspernatur illo inventore, sunt dicta eligendi culpa atque amet repudiandae dolore vitae incidunt a ipsum nulla ea. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>
      <div className={s.bottom}>
        <div className={s.voting}>
          <div className={s.action}>
            <button tabIndex="-1">⚝</button><span className={`${s.star} ${s.vote}`}>Mark</span>
          </div>
          <div className={s.action}>
            <button tabIndex="-1">⇧</button><span className={`${s.upVotes} ${s.vote}`} >323,4k</span>
          </div>
          <div className={s.action}>
            <button tabIndex="-1">⇩</button><span className={`${s.downVotes} ${s.vote}`}>3,24k</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
