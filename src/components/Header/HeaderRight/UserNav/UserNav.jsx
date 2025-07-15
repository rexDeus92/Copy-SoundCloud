import { NavLink } from 'react-router-dom';
import { HeaderProfileMenuButton } from '../../../Buttons/HeaderProfileMenuButton/HeaderProfileMenuButton';
import s from './UserNav.module.scss';
import { MessagesButton } from '../../../Buttons/MessagesButton/MessagesButton';
import { HeaderNavMenu } from '../../../../Menu/HeaderNavMenu/HeaderNavMenu';

export function UserNav() {
  return (
    <div className={s.userProfile}>
      <HeaderProfileMenuButton />
      <a
        className={`${s.notifications} headerUserNavButton`}
        tabindex='0'
        aria-haspopup='true'
        role='button'
        to={'/notifications'}
      >
        <svg
          viewBox='0 0 32 32'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
        >
          <path
            d='M19.681 7h.069v-.875c0-2.111-1.65-3.875-3.75-3.875s-3.75 1.764-3.75 3.875V7h.069a9.39 9.39 0 00-5.68 7.919l-.272 3.533a2.693 2.693 0 01-1.003 1.896c-1.824 1.46-.792 4.402 1.544 4.402h4.357v.043c-.023 2.686 2.056 4.934 4.708 4.957 2.651.022 4.768-2.19 4.791-4.876l.001-.124h4.327c2.336 0 3.368-2.942 1.544-4.402a2.694 2.694 0 01-1.003-1.896l-.272-3.533A9.39 9.39 0 0019.681 7zm-1.431-.478A9.402 9.402 0 0016 6.25c-.774 0-1.528.094-2.25.272v-.397c0-1.34 1.036-2.375 2.25-2.375s2.25 1.034 2.25 2.375v.397zM16 7.75a7.89 7.89 0 017.866 7.284l.272 3.533a4.193 4.193 0 001.561 2.953c.717.573.311 1.73-.607 1.73H6.908c-.918 0-1.324-1.157-.607-1.73a4.193 4.193 0 001.561-2.953l.272-3.533A7.889 7.889 0 0116 7.75zm-3.235 17h6.5v.11c-.017 1.917-1.513 3.405-3.28 3.39-1.766-.015-3.237-1.528-3.22-3.444v-.056z'
            fill='currentColor'
          ></path>
        </svg>
      </a>
      <MessagesButton />
      <HeaderNavMenu />
    </div>
  );
}
