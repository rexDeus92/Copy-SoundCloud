import { SearchIcon } from '../../Buttons/SearchIcon/SearchIcon';
import s from './HeaderSearchBar.module.scss';

export function HeaderSearchBar() {
  return (
    <form role='search' className={s.searchForm}>
      <label htmlFor='site-search' className='visuallyHidden'>
        Search the site
      </label>
      <input
        type='search'
        id='site-search'
        placeholder='Search'
        className={s.searchInput}
      />
      <button type='submit' className={s.searchButton}>
        <SearchIcon classNameIcon={s.searchIcon} />
      </button>
    </form>
  );
}
