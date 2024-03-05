import React from 'react';
import styles from './TextField.module.scss'

type props={
    text:string
}
export const TextField = ({text}:props) => {
    return (
      <input placeholder={text} className={styles.input}/>
    );
};

