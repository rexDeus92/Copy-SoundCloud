import { mockUser } from '../../../data/user.data';
import s from './HeaderProfileMenuButton.module.scss';

export function HeaderProfileMenuButton() {
  return (
    <a
      href={`/${mockUser.username}`}
      tabindex='0'
      aria-haspopup='true'
      role='button'
      className={s.headerProfileMenuButton}
    >
      <div className={s.menuButtonAvatarWrapper}>
        <span
          className={s.menuButtonAvatar}
          aria-label={mockUser.avatarUrl}
          aria-role='img'
        ></span>
      </div>
      <div className={s.menuButtonArrowWrapper}>
        <svg
          className={s.menuButtonArrow}
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
        >
          <path
            d='M20.5303 9.53033L12 18.0607L3.46967 9.53033L4.53033 8.46967L12 15.9393L19.4697 8.46967L20.5303 9.53033Z'
            fill='currentColor'
          ></path>
        </svg>
      </div>
    </a>
  );
}
