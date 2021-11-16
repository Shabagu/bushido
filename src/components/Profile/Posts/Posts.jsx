import Post from './Post/Post';

import s from './Posts.module.scss';

function Posts() {
  return (
    <div className={s.posts}>
      <div className={s.title}>My posts</div>
      <div className={s.adding}>
        <form action="">
          <textarea name="" placeholder="Share your news..."></textarea>
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
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default Posts;
