import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../Header.module.scss'
import styless from './HeaderBlog.module.scss'
import { MdOutlineArrowForwardIos } from 'react-icons/md'

export default function HeaderBlog() {

    return (
        <div className={styles.headerItem}>
            <Link to='/' className={`${styles.primaryLink} ${styles.menuLink}`}> Blog</Link>
            <div className={`${styles.item} ${styless.subMenu}`}>
                <Link className={styles.primaryLink}> Blog Masonry </Link>
                <Link className={`${styles.primaryLink} ${styless.subMenuLink}`}> <p>Blog Standard</p>
                    <MdOutlineArrowForwardIos className={styless.iconRight} />
                    <div className={styless.wrapSubMenu}>
                        <Link className={styles.primaryLink} to='/'>Right Sidebar</Link>
                        <Link className={styles.primaryLink} to='/'>Left Sidebar</Link>
                        <Link className={styles.primaryLink} to='/'>Without Sidebar</Link>
                    </div>
                </Link>
                <Link className={`${styles.primaryLink} ${styless.subMenuLink}`}> <p>Post Types</p>
                    <MdOutlineArrowForwardIos className={`${styless.iconRight} ${styless.iconPost}`} />
                    <div className={`${styless.wrapSubMenu} ${styless.types}`}>
                        <Link className={styles.primaryLink} to='/'>Video</Link>
                        <Link className={styles.primaryLink} to='/'>Audio</Link>
                        <Link className={styles.primaryLink} to='/'>Link</Link>
                    </div>
                </Link>
            </div>
        </div>
    )
}
