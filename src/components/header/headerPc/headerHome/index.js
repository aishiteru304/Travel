import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../Header.module.scss'

export default function HeaderHome() {
    return (
        <div className={styles.headerItem}>
            <Link to='/' className={`${styles.primaryLink} ${styles.menuLink}`}> Home</Link>
            <div className={styles.item}>
                <Link className={styles.primaryLink}> Travel Agency </Link>
                <Link className={styles.primaryLink}> Winter Holidays </Link>
                <Link className={styles.primaryLink}> Summer Holidays </Link>
                <Link className={styles.primaryLink}> City Tours </Link>
                <Link className={styles.primaryLink}> New Year Trips </Link>
            </div>
        </div>
    )
}
