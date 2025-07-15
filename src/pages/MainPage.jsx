import { Card } from '../components/Card/Card';
import s from './main.module.scss';
import { musicData } from '../data/music.data';
import { usePlayer } from '../context/PlayContext';

export function MainPage() {
  
  const { tracksData } = usePlayer();
  return (
    <main className={s.main}>
      <div className='container'>
        {Object.values(musicData).map(gallery => (
          <div className={s.musicGallery}>
            <h2>{gallery.listName}</h2>
            <div className={s.musicGalleryList}>
              {gallery.list.map(card => (
                <Card
                  key={card.id}
                  img={card.img}
                  name={card.name}
                  executor={card.executor}
                  likeState={card.likeState}
                  id={card.id}
                  isThisCardLiked={card.likeState}
                  track={card}
                  // handleLikeClick={() => handleToggleLike(card.id)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
