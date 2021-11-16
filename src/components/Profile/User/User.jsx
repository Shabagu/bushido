import s from './User.module.scss';

function User () {
  return (
  <div className={s.user}>
    <div className ={s.background}>
      <img src="https://cebo-style.ru/upload/iblock/58c/58cbf780050bace326ef5c32f963bedc.jpg" alt="Background" />
    </div>
    <div className ={s.info}>
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
  </div>
  );
}

export default User;
