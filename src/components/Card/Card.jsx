import s from './Card.module.scss';
// import likeIcon from "../../assets/like.svg";
import { PlayButton } from '../Buttons/PlayButton/PlayButton';
// import { useState } from "react";
import { LikeButton } from '../Buttons/LikeButton/LikeButton';
import { PlayButtonActionMenu } from '../Buttons/PlayButtonActionMenu/PlayButtonActionMenu';
// import { usePlayer } from '../../context/PlayContext';

export function Card({ img, name, executor, track }) {
  // 1. Получаем из контекста наш массив и функцию
  return (
    <div className={s.cardWrapper}>
      <div className={s.imgWrapper}>
        <img src={img} alt={name} />
        <div className={s.imgOverlay}>
          <PlayButton classNameCard={s.btn} />
          <div className={s.PlayButtonAction}>
            <LikeButton customClass={s.LikeBtn} track={track} />
            <PlayButtonActionMenu />
          </div>
        </div>
      </div>
      <div className={s.content}>
        <div className={s.name}>{name}</div>
        <div className={s.executor}>{executor}</div>
        {/* <div className=" text-body-semibold">{executor}</div> */}
      </div>
    </div>
  );
}
