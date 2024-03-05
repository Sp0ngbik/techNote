import React from 'react'

import { Dot } from '@/assets/icons/dot'
import Image, { StaticImageData } from 'next/image'

import style from '@/components/card/card.module.scss'

export const Card = ({ date, heading, image, tag, text }: CardPropsType) => {
  return (
    <div className={style.card}>
      <Image alt={''} className={style.cardImage} src={image} />
      <div className={style.cardWrapper}>
        <h3 className={style.cardHeader}>{heading}</h3>
        <p className={style.cardText}>{text}</p>
        <div className={style.cardInfo}>
          <div className={style.cardGroup}>
            <span className={style.cardInfoSpan}>{date}</span>
            <Dot />
            <span className={style.cardInfoSpan}>{tag}</span>
          </div>
          <button className={style.cardBtn}>читать</button>
        </div>
      </div>
    </div>
  )
}

type CardPropsType = {
  date: string
  heading: string
  image: StaticImageData
  tag: string
  text: string
}
