// import classes from './style/Content.modules.scss';
import classes from './style/Content.module.scss';

function Content() {
  return(
      <main className={classes.content}>
        {/* CONTENT */}
        <div className ={classes.background}>
          <img src="https://cebo-style.ru/upload/iblock/58c/58cbf780050bace326ef5c32f963bedc.jpg" alt="Background" />
        </div>
        <div className={classes.user}>
          <div className={classes.avatar}>
            <img src="https://i.pinimg.com/736x/59/ac/de/59acde8a2e5791c5f2d2610277ed95f6--twitter-green.jpg" alt="Avatar" />
          </div>
          <div className={classes.description}>
            <div className={classes.nickname}>Nickname</div>
            <div className={classes.status}>Status: "Свободу попугаям!"</div>
            <div className={classes.additional_info}>
              <div className={classes.country}>Country</div>
              <div className={classes.date_of_birth}>Date of birth</div>
              <div className={classes.web_site}>Web Site</div>
            </div>
          </div>
        </div>
        <div className={classes.posts}>
          <div className={classes.title}>My posts</div>
          <div className={classes.adding}>
            <form action="">
              <textarea name="" placeholder="Share you news..."></textarea>
              <input type="submit" name="" id="" value="Publish"/>
            </form>
          </div>
          <div className={classes.published}>
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
    <div className={classes.post}>
      <div className={classes.post_author}>
        <img className={classes.post_author_avatar} src="https://i.pinimg.com/736x/59/ac/de/59acde8a2e5791c5f2d2610277ed95f6--twitter-green.jpg" alt="User" />
        <div className={classes.post_author_nickname}>Nickname</div>
      </div>
      <div className={classes.post_content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptas iure fuga pariatur aspernatur illo inventore, sunt dicta eligendi culpa atque amet repudiandae dolore vitae incidunt a ipsum nulla ea.
      </div>
  </div>
  );
}

export default Content;
