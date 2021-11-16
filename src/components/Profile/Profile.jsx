import User from './User/User';
import Posts from './Posts/Posts';

import s from './Profile.module.scss';

function Content() {
  return (
      <main className={s.content}>
        <User />
        <Posts />
      </main>
  );
}

export default Content;
