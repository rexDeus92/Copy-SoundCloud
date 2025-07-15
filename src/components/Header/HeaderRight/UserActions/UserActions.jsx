import { NavLink } from 'react-router-dom';
import s from './UserActions.module.scss';

export function UserActions() {
  return (
    <div className={s.userActions}>
      <div className={s.headerFanUpSell}>
        <a
          href={'https://checkout.soundcloud.com/artist?ref=t353'}
          className={s.userActionsLink}
        >
          Try Artist Pro
        </a>
      </div>
      <a href={'/for-artists'} className={s.headerForArtistButton}>
        For Artists
      </a>
      <div className={s.headerForArtistBtn}>
        <NavLink to='/upload' className={s.headerUploadBtn}>
          Upload
        </NavLink>
      </div>
    </div>
  );
}
