import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../Header.module.scss'

export default function HeaderDestinations() {
    return (
        <div className={styles.headerItem}>
            <Link to='/Travel' className={`${styles.primaryLink} ${styles.menuLink}`}> Destinations</Link>
            <div className={styles.item}>
                <Link to='/Travel' className={styles.primaryLink}> Destinations List </Link>
                <Link to='/Travel' className={styles.primaryLink}> Destinations Slide </Link>
                <Link to='/Travel' className={styles.primaryLink}> Destination Item </Link>
            </div>
        </div>
    )
}
