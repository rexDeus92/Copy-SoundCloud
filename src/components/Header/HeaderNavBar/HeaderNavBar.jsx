import { NavLink } from 'react-router-dom';
import s from './HeaderNavBar.module.scss';

export function HeaderNavBar() {
  const navLinks = [
    { path: '/Copy-SoundCloud/', label: 'Home' },
    { path: '/Copy-SoundCloud/Feed', label: 'Feed' },
    { path: '/Copy-SoundCloud/Library', label: 'Library' },
  ];

  return (
    <nav className={s.headerLeftNavBar}>
      <ul>
        {navLinks.map(({ path, label }) => (
          <li key={path} className={s.headerLeftNavBarItem}>
            <NavLink
              to={path}
              end
              className={({ isActive }) =>
                isActive
                  ? s.headerLeftNavBarItemActive
                  : s.headerLeftNavBarItemLink
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
