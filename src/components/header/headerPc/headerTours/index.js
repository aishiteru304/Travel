import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../Header.module.scss'

export default function HeaderTours() {
    return (
        <div className={styles.headerItem}>
            <Link to='/' className={`${styles.primaryLink} ${styles.menuLink}`}> Tours</Link>
            <div className={styles.item}>
                <Link className={styles.primaryLink}> Standard List </Link>
                <Link className={styles.primaryLink}> Gallery List </Link>
                <Link className={styles.primaryLink}> Split List </Link>
                <Link className={styles.primaryLink}> Our Items </Link>
            </div>
        </div>
    )
}
