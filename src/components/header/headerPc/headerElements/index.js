import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../Header.module.scss'
import styless from './HeaderElements.module.scss'


export default function HeaderElements() {
    return (
        <div className={`${styles.headerItem} ${styless.headerElement}`}>
            <Link to='/' className={`${styles.primaryLink} ${styles.menuLink}`}> Elements</Link>
            <div className={styless.elementInner}>
                <div className={styless.subElement}>
                    <Link className={`${styles.primaryLink} ${styles.menuLink}`} to='/'>FEATURED</Link>
                    <Link className={styles.primaryLink} to='/'>Tour List</Link>
                    <Link className={styles.primaryLink} to='/'>Tour Filter</Link>
                    <Link className={styles.primaryLink} to='/'>Destinations List</Link>
                    <Link className={styles.primaryLink} to='/'>Fullscreen Sections</Link>
                    <Link className={styles.primaryLink} to='/'>Reviews</Link>
                </div>
                <div className={styless.subElement}>
                    <Link className={`${styles.primaryLink} ${styles.menuLink}`} to='/'>PRESENTATION</Link>
                    <Link className={styles.primaryLink} to='/'>Team</Link>
                    <Link className={styles.primaryLink} to='/'>Blog List</Link>
                    <Link className={styles.primaryLink} to='/'>Shop List</Link>
                    <Link className={styles.primaryLink} to='/'>Banner</Link>
                    <Link className={styles.primaryLink} to='/'>Clients</Link>
                </div>
                <div className={styless.subElement}>
                    <Link className={`${styles.primaryLink} ${styles.menuLink}`} to='/'>CLASSIC</Link>
                    <Link className={styles.primaryLink} to='/'>Tabs</Link>
                    <Link className={styles.primaryLink} to='/'>Buttons</Link>
                    <Link className={styles.primaryLink} to='/'>Google Maps</Link>
                    <Link className={styles.primaryLink} to='/'>Contact</Link>
                </div>
                <div className={styless.subElement}>
                    <Link className={`${styles.primaryLink} ${styles.menuLink}`} to='/'>TYPOGRAPHY</Link>
                    <Link className={styles.primaryLink} to='/'>Heading</Link>
                    <Link className={styles.primaryLink} to='/'>Columns</Link>
                    <Link className={styles.primaryLink} to='/'>Section Title</Link>
                </div>
            </div>
        </div>
    )
}
