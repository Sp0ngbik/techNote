import React from 'react';
import s from './input.module.scss'

const Input = () => {
    return (
      <input placeholder={'Поиск по блогу'} className={s.input}/>
    );
};

export default Input;