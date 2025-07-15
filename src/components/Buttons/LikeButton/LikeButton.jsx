// import { usePlayer } from '../../../context/PlayContext';
import s from './LikeButton.module.scss';
// import likeIcon from "../../../assets/like.svg";
import { Card } from '../../Card/Card';
import { usePlayer } from '../../../context/PlayContext';

export function LikeButton({
  customClass,
  track
}) {
  const { handleToggleLike } = usePlayer();
  const isLiked = track.likeState;
  return (
    <div>
      <div className={`${s.likeButton} ${customClass}`} title='Like Button'>
        {/* <img src={likeIcon} alt="Like"  /> */}
        <button
          className={s.likeButtonIconWrapper}
          onClick={() => handleToggleLike(track.id)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 16 16'
            aria-hidden='true'
          >
            <path
              className={isLiked ? s.likeButtonIconActive : s.likeButtonIcon}
              d='M7.978 5c.653-1.334 1.644-2 2.972-2 1.992 0 3.405 1.657 2.971 4-.289 1.561-2.27 3.895-5.943 7C4.19 10.895 2.21 8.561 2.035 7c-.26-2.343.947-4 2.972-4 1.35 0 2.34.666 2.971 2z'
              fill='currentColor'
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
//
