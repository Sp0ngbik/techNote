import React from 'react';
import styles from './Header.module.scss'
import {TextField} from '@/ui/copmonents/TextField/TextField';
import {CustomLink} from "@/ui/copmonents/CustomLink/CustomLink";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.links}>
                <CustomLink text={'Главная'} href={'/'}/>
                <CustomLink text={'Статьи'} href={'/'}/>
                <CustomLink text={'Обо мне'} href={'/about'}/>
                <CustomLink text={'Реклама'} href={'/advertising'}/>
            </div>
            <TextField text={'Поиск по блогу'}/>
        </header>
    );
};

export default Header;