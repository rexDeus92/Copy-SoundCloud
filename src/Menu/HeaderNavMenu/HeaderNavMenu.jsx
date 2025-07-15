import { NavLink } from 'react-router-dom';
import s from './HeaderNavMenu.module.scss';

export function HeaderNavMenu() {
  return (
    <a
      className={s.headerNavMenu}
      tabindex='0'
      aria-haspopup='true'
      role='button'
    >
      <div className={`headerUserNavButton notificationIcon`}>
        <svg
          viewBox='0 0 16 16'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
        >
          <path
            d='M4 8c0-.832-.67-1.5-1.511-1.5C1.67 6.5 1 7.168 1 8s.67 1.5 1.489 1.5C3.33 9.5 4 8.832 4 8zm5.5 0c0-.832-.67-1.5-1.504-1.5C7.17 6.5 6.5 7.168 6.5 8s.67 1.5 1.496 1.5C8.831 9.5 9.5 8.832 9.5 8zM15 8c0-.832-.664-1.5-1.493-1.5C12.664 6.5 12 7.168 12 8s.664 1.5 1.507 1.5C14.336 9.5 15 8.832 15 8z'
            fill='currentColor'
          ></path>
        </svg>
      </div>
    </a>
  );
}
