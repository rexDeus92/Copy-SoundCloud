/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';
import { musicData as initialMusicData } from '../data/music.data.js';

const PlayerContext = createContext();

export function PlayerProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [tracksData, setTracksData] = useState(initialMusicData);

  const handleToggleLike = trackId => {
    // В React мы НИКОГДА не меняем состояние напрямую.
    // Мы создаем его полную, обновленную копию.

    // Создаем копию всего объекта с секциями
    const newTracksData = { ...tracksData };

    // Проходимся по каждой секции ('SoundCloud Mixes', 'New Releases' и т.д.)
    for (const sectionKey in newTracksData) {
      const section = newTracksData[sectionKey];

      // Ищем в списке треков этой секции нужный нам трек
      section.list = section.list.map(track => {
        // Если ID трека совпадает с тем, на который кликнули...
        if (track.id === trackId) {
          // ...мы возвращаем НОВЫЙ объект этого трека с измененным likeState
          return { ...track, likeState: !track.likeState };
        }
        // Если это другой трек, просто возвращаем его как есть.
        return track;
      });
    }

    // Отдаем React совершенно новый, обновленный объект. React видит разницу и перерисовывает UI.
    setTracksData(newTracksData);
  };
  const handlePlay = track => {
    if (currentTrack?.id === track.id) {
      setIsPlaying(prev => !prev);
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);
    }
  };

  // Передаем в контекст наши данные и функции для управления ими
  const value = {
    tracksData, // Все наши треки
    handleToggleLike, // Функция для лайков

    // Для плеера
    isPlaying,
    currentTrack,
    handlePlay,
  };

  return (
    <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
  );
}

export function usePlayer() {
  const context = useContext(PlayerContext);
  if (context === undefined) {
    throw new Error('usePlayer must be used within a PlayerProvider');
  }
  return context;
}
