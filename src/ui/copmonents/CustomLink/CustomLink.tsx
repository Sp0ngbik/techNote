import React from 'react';
import styles from "./CustomLink.module.scss";
import Link from "next/link";

type props = {
    text:string
    href:string
}
export const CustomLink = ({text,href}:props) => {
    return (<Link className={styles.link} href={href}>{text}</Link>);
};