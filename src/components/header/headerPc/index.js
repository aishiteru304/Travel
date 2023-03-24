import React from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import { BsMinecart } from 'react-icons/bs'
import { BiMenuAltRight, BiSearch } from 'react-icons/bi'
import HeaderHome from './headerHome'
import HeaderPages from './headerPages'
import HeaderDestinations from './headerDestinations'
import HeaderTours from './headerTours'
import HeaderBlog from './headerBlog'
import HeaderShop from './headerShop'
import HeaderElements from './headerElements'


export default function HeaderPc() {
    return (
        <div className={styles.wrap}>
            <div className={styles.headerLogo}>
                <Link to='/'><img src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/logo.png" alt=''></img></Link>
            </div>
            <div className={styles.headerCatelogy}>
                <HeaderHome />
                <HeaderPages />
                <HeaderDestinations />
                <HeaderTours />
                <HeaderBlog />
                <HeaderShop />
                <HeaderElements />

            </div>

            <div className={styles.headerIcon}>
                <Link className={styles.iconLink} to='/'><BsMinecart className={styles.icon} />
                    <div className={styles.cartItem}>No Items</div>
                </Link >
                <Link className={styles.iconLink} to='/'><BiSearch className={styles.icon} /></Link >
                <Link className={styles.iconLink} to='/'><BiMenuAltRight className={styles.icon} /></Link >

            </div>

        </div>
    )
}
