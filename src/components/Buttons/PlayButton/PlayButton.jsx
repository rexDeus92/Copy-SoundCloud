import { usePlayer } from '../../../context/PlayContext';
import s from './PlayButton.module.scss';

export function PlayButton({ classNameCard }) {
  const { isPlaying, togglePlay } = usePlayer();
  return (
    <div className={`${s.playButton} ${classNameCard}`} onClick={togglePlay}>
      <svg
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        aria-hidden='true'
        color='#000'
      >
        <path
          className={isPlaying ? s.Hidden : s.Visible}
          fillRule='evenodd'
          clipRule='evenodd'
          d='M20.346 11.58a.5.5 0 0 1 0 .84L7.77 20.506a.5.5 0 0 1-.77-.42V3.914a.5.5 0 0 1 .77-.42l12.576 8.084Z'
          fill='currentColor'
        ></path>

        <path
          className={isPlaying ? s.Visible : s.Hidden}
          d='M10 4.5c0-.276-.252-.5-.563-.5H5.563C5.252 4 5 4.224 5 4.5v15c0 .276.252.5.563.5h3.875c.31 0 .562-.224.562-.5v-15ZM19 4.5c0-.276-.252-.5-.563-.5h-3.875c-.31 0-.562.224-.562.5v15c0 .276.252.5.563.5h3.874c.311 0 .563-.224.563-.5v-15Z'
          fill='currentColor'
        ></path>
      </svg>
    </div>
  );
}
