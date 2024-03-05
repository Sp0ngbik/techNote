import React from 'react';
import Input from "../ui/input/input";
import Link from "next/link";
import s from './Header.module.scss'
const Header = () => {
    return (
        <header className={s.header}>
          <div className={s.links} >
              <Link className={s.link} href={'/'}>Главная</Link>
              <Link className={s.link} href={'/about'}>Обо мне</Link>
              <Link className={s.link} href={'/advertising'}>Реклама</Link>
          </div>
            <Input/>
        </header>
    );
};

export default Header;