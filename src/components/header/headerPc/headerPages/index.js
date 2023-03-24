import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../Header.module.scss'

export default function HeaderPages() {
    return (
        <div className={styles.headerItem}>
            <Link to='/' className={`${styles.primaryLink} ${styles.menuLink}`}> Pages</Link>
            <div className={styles.item}>
                <Link className={styles.primaryLink}> About Us </Link>
                <Link className={styles.primaryLink}> Our Teams </Link>
                <Link className={styles.primaryLink}> Contact Us </Link>
            </div>
        </div>
    )
}
