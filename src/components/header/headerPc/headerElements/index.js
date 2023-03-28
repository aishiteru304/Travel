import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../Header.module.scss'
import styless from './HeaderElements.module.scss'


export default function HeaderElements() {
    return (
        <div className={`${styles.headerItem} ${styless.headerElement}`}>
            <Link to='/Travel' className={`${styles.primaryLink} ${styles.menuLink}`}> Elements</Link>
            <div className={styless.elementInner}>
                <div className={styless.subElement}>
                    <Link className={`${styles.primaryLink} ${styles.menuLink}`} to='/Travel'>FEATURED</Link>
                    <Link className={styles.primaryLink} to='/Travel'>Tour List</Link>
                    <Link className={styles.primaryLink} to='/Travel'>Tour Filter</Link>
                    <Link className={styles.primaryLink} to='/Travel'>Destinations List</Link>
                    <Link className={styles.primaryLink} to='/Travel'>Fullscreen Sections</Link>
                    <Link className={styles.primaryLink} to='/Travel'>Reviews</Link>
                </div>
                <div className={styless.subElement}>
                    <Link className={`${styles.primaryLink} ${styles.menuLink}`} to='/Travel'>PRESENTATION</Link>
                    <Link className={styles.primaryLink} to='/Travel'>Team</Link>
                    <Link className={styles.primaryLink} to='/Travel'>Blog List</Link>
                    <Link className={styles.primaryLink} to='/Travel'>Shop List</Link>
                    <Link className={styles.primaryLink} to='/Travel'>Banner</Link>
                    <Link className={styles.primaryLink} to='/Travel'>Clients</Link>
                </div>
                <div className={styless.subElement}>
                    <Link className={`${styles.primaryLink} ${styles.menuLink}`} to='/Travel'>CLASSIC</Link>
                    <Link className={styles.primaryLink} to='/Travel'>Tabs</Link>
                    <Link className={styles.primaryLink} to='/Travel'>Buttons</Link>
                    <Link className={styles.primaryLink} to='/Travel'>Google Maps</Link>
                    <Link className={styles.primaryLink} to='/Travel'>Contact</Link>
                </div>
                <div className={styless.subElement}>
                    <Link className={`${styles.primaryLink} ${styles.menuLink}`} to='/Travel'>TYPOGRAPHY</Link>
                    <Link className={styles.primaryLink} to='/Travel'>Heading</Link>
                    <Link className={styles.primaryLink} to='/Travel'>Columns</Link>
                    <Link className={styles.primaryLink} to='/Travel'>Section Title</Link>
                </div>
            </div>
        </div>
    )
}
