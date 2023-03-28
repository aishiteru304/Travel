import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../Header.module.scss'

export default function HeaderTours() {
    return (
        <div className={styles.headerItem}>
            <Link to='/Travel' className={`${styles.primaryLink} ${styles.menuLink}`}> Tours</Link>
            <div className={styles.item}>
                <Link to='/Travel' className={styles.primaryLink}> Standard List </Link>
                <Link to='/Travel' className={styles.primaryLink}> Gallery List </Link>
                <Link to='/Travel' className={styles.primaryLink}> Split List </Link>
                <Link to='/Travel' className={styles.primaryLink}> Our Items </Link>
            </div>
        </div>
    )
}
