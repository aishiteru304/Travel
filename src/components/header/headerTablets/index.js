import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BiMenuAltRight } from 'react-icons/bi'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { RxAvatar } from 'react-icons/rx'
import Login from './headerLogin'
import Register from './headerRegister'
import styles from './HeaderTablets.module.scss'

export default function HeaderTablets() {
    const subMenu = ['Home', 'Pages', 'Destinations', 'Tours', 'Blog', 'Shop', 'Elements']
    const [isShowCatelogy, setIsShowCatelogy] = useState(false)
    const [isShowCover, setIsShowCover] = useState(false)
    const [isShowLogin, setIsShowLogin] = useState(true)
    const [isShowRegister, setIsShowRegister] = useState(false)

    const handleCatelogy = () => {
        setIsShowCatelogy(!isShowCatelogy)
    }

    const handleCover = () => {
        setIsShowCover(!isShowCover)
    }

    const handleChildClick = (event) => {
        event.stopPropagation();
        // Xử lý khi click vào phần tử con
    }


    return (
        <div className={styles.headerTablets}>
            <div className={styles.tabletsMenu}>
                <BiMenuAltRight className={styles.iconMenu} onClick={handleCatelogy} />
                <div className={`${styles.catelogy} ${isShowCatelogy ? styles.show : ''}`}>
                    {
                        subMenu.map(item => (
                            <Link key={item} to='/' className={styles.subMenu}>
                                <p>{item}</p>
                                <MdOutlineArrowForwardIos />
                            </Link>
                        ))
                    }
                </div>
            </div>
            <div className={styles.tabletsLogo}>
                <Link to='/'> <img alt='' src='https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/logo-mobile-img.png'></img></Link>
            </div>
            <div className={styles.tabletsAvatar}>
                <RxAvatar className={styles.iconAvatar} onClick={handleCover} />
                <div onClick={() => { setIsShowCover(false) }} className={`${styles.cover} ${isShowCover ? styles.showCover : ''}`}>
                    <div className={styles.formRegister} onClick={handleChildClick}>
                        {isShowLogin && <Login />}
                        {isShowRegister && <Register />}
                        <div className={styles.loginRegister}>
                            <div onClick={() => { setIsShowLogin(true); setIsShowRegister(false) }} className={styles.loginBtn}></div>
                            <div onClick={() => { setIsShowLogin(false); setIsShowRegister(true) }} className={styles.registerBtn}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
