import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import styles from '../Header.module.scss'
import styless from './HeaderShop.module.scss'


export default function HeaderShop() {
    return (
        <div className={styles.headerItem}>
            <Link to='/Travel' className={`${styles.primaryLink} ${styles.menuLink}`}> Shop</Link>
            <div className={`${styles.item} ${styless.subMenu}`}>
                <Link className={styles.primaryLink}> Product List </Link>
                <Link className={styles.primaryLink}> Product Single </Link>

                <Link className={`${styles.primaryLink} ${styless.subMenuLink}`}> <p>Shop Layouts</p>
                    <MdOutlineArrowForwardIos className={styless.iconRight} style={{ marginLeft: "4px" }} />
                    <div className={styless.wrapSubMenu}>
                        <Link className={styles.primaryLink} to='/Travel'>Three Columns</Link>
                        <Link className={styles.primaryLink} to='/Travel'>Four Columns</Link>
                        <Link className={styles.primaryLink} to='/Travel'>Full Width</Link>
                    </div>
                </Link>

                <Link className={`${styles.primaryLink} ${styless.subMenuLink}`}> <p>Shop Pages</p>
                    <MdOutlineArrowForwardIos className={`${styless.iconRight} ${styless.iconPost}`} />
                    <div className={styless.wrapSubMenu}>
                        <Link className={styles.primaryLink} to='/Travel'>My Account</Link>
                        <Link className={styles.primaryLink} to='/Travel'>Cart</Link>
                        <Link className={styles.primaryLink} to='/Travel'>Checkout</Link>
                    </div>
                </Link>

            </div>
        </div>
    )
}
