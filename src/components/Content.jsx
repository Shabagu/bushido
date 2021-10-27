function Content() {
  return(
      <main className="Content">
        {/* CONTENT */}
        <div className ="Background">
            <img src="https://cebo-style.ru/upload/iblock/58c/58cbf780050bace326ef5c32f963bedc.jpg" alt="Background" />
        </div>
        <div className="User">
          <div className="Avatar">
            <img src="https://i.pinimg.com/736x/59/ac/de/59acde8a2e5791c5f2d2610277ed95f6--twitter-green.jpg" alt="Avatar" />
          </div>
          <div className="Description">
            <div className="Nickname">Nickname</div>
            <div className="Status">Status: "Свободу попугаям!"</div>
            <div className="Additional-info">
              <div className="Country">Country</div>
              <div className="Date-of-birth">Date of birth</div>
              <div className="Web-site">Web Site</div>
            </div>
          </div>
        </div>
        <div className="Posts">
          <div className="Title">My posts</div>
          <div className="Adding">
            <form action="">
              <textarea name="" placeholder="Share you news..."></textarea>
              <input type="submit" name="" id="" value="Publish"/>
            </form>
          </div>
          <div className="Published">
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
    <div className="Post">
      <div className="Post-author">
        <img className="Post-author-avatar" src="https://i.pinimg.com/736x/59/ac/de/59acde8a2e5791c5f2d2610277ed95f6--twitter-green.jpg" alt="User" />
        <div className="Post-author-nickname">Nickname</div>
      </div>
      <div className="Post-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptas iure fuga pariatur aspernatur illo inventore, sunt dicta eligendi culpa atque amet repudiandae dolore vitae incidunt a ipsum nulla ea.
      </div>
  </div>
  );
}


export default Content;
