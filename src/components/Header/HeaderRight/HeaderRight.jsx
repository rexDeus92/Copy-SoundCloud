import { UserActions } from './UserActions/UserActions';
import s from './HeaderRight.module.scss';
import { UserNav } from './UserNav/UserNav';

export function HeaderRight() {
  return (
    <div className={s.headerRight}>
      <UserActions />
      <UserNav />
    </div>
  );
}
