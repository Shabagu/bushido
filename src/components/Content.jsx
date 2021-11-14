import s from './style/Content.module.scss';

function Content() {
  return(
      <main className={s.content}>
        {/* CONTENT */}
        <div className ={s.background}>
          <img src="https://cebo-style.ru/upload/iblock/58c/58cbf780050bace326ef5c32f963bedc.jpg" alt="Background" />
        </div>
        <div className={s.user}>
          <div className={s.avatar}>
            <img src="https://i.pinimg.com/736x/59/ac/de/59acde8a2e5791c5f2d2610277ed95f6--twitter-green.jpg" alt="Avatar" />
          </div>
          <div className={s.description}>
            <div className={s.nickname}>Nickname</div>
            <div className={s.status}>Status: "Свободу попугаям!"</div>
            <div className={s.additional_info}>
              <div className={s.country}>Country</div>
              <div className={s.date_of_birth}>Date of birth</div>
              <div className={s.web_site}>Web Site</div>
            </div>
          </div>
        </div>
        <div className={s.posts}>
          <div className={s.title}>My posts</div>
          <div className={s.adding}>
            <form action="">
              <textarea name="" placeholder="Share you news..."></textarea>
              <input type="submit" name="" id="" value="Publish"/>
            </form>
          </div>
          <div className={s.published}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </div>
      </main>
  );
}

function Post() {
  return(
    <div className={s.post}>
      <div className={s.author}>
        <img className={s.avatar} src="https://i.pinimg.com/736x/59/ac/de/59acde8a2e5791c5f2d2610277ed95f6--twitter-green.jpg" alt="User" />
        <div className={s.nickname}>Nickname</div>
      </div>
      <div className={s.post_content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptas iure fuga pariatur aspernatur illo inventore, sunt dicta eligendi culpa atque amet repudiandae dolore vitae incidunt a ipsum nulla ea.
      </div>
  </div>
  );
}

export default Content;
