import React from 'react';
import s from './input.module.scss'

export const Input = () => {
    return (
      <input placeholder={'Поиск по блогу'} className={s.input}/>
    );
};

