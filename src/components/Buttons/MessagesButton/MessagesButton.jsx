import { NavLink } from 'react-router-dom';
import s from './MessagesButton.module.scss';

export function MessagesButton() {
  return (
    <NavLink className={s.messagesBtn}>
      <div className={`headerUserNavButton notificationIcon`}>
        <svg
          viewBox='0 0 32 32'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
        >
          <path
            d='M2 10C2 7.79086 3.79086 6 6 6H26C28.2091 6 30 7.79086 30 10V22C30 24.2091 28.2091 26 26 26H6C3.79086 26 2 24.2091 2 22V10ZM6 7.5C4.80376 7.5 3.80375 8.34018 3.55789 9.46263L16 17.1193L28.4421 9.46264C28.1963 8.34018 27.1962 7.5 26 7.5H6ZM3.5 11.1883V22C3.5 23.3807 4.61929 24.5 6 24.5H26C27.3807 24.5 28.5 23.3807 28.5 22V11.1883L16 18.8806L3.5 11.1883Z'
            fill='currentColor'
          ></path>
        </svg>
      </div>
    </NavLink>
  );
}
