import React, { useState } from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import { BsMinecart } from 'react-icons/bs'
import { AiOutlineCloseSquare } from 'react-icons/ai'
import { BiMenuAltRight, BiSearch } from 'react-icons/bi'
import { FaPinterestP } from 'react-icons/fa'
import { CiTwitter, CiFacebook, CiInstagram } from 'react-icons/ci'
import HeaderHome from './headerHome'
import HeaderPages from './headerPages'
import HeaderDestinations from './headerDestinations'
import HeaderTours from './headerTours'
import HeaderBlog from './headerBlog'
import HeaderShop from './headerShop'
import HeaderElements from './headerElements'


export default function HeaderPc() {
    const [isShowSearch, setIsShowSearch] = useState(false)
    const [isShowMenu, setIsShowMenu] = useState(false)

    const handleSearch = () => {
        setIsShowSearch(!isShowSearch)
    }

    const handleMenu = () => {
        setIsShowMenu(!isShowMenu)
    }

    const handleChildClick = (event) => {
        event.stopPropagation();
        // Xử lý khi click vào phần tử con
    }

    return (
        <div className={styles.wrap}>
            <div className={styles.headerLogo}>
                <Link to='/Travel'><img src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/logo.png" alt=''></img></Link>
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
                <div className={styles.iconLink} ><BsMinecart className={styles.icon} />
                    <div className={styles.cartItem}>No Items</div>
                </div >
                <div onClick={handleSearch} className={styles.iconLink} ><BiSearch className={styles.icon} />
                    {isShowSearch &&
                        <div className={styles.headerSearch}>
                            <div className={styles.searchContent} onClick={handleChildClick}>
                                <input placeholder='Search...'></input>
                                <div className={styles.find}>FIND NOW</div>
                            </div>
                        </div>}
                </div >
                <div onClick={handleMenu} className={styles.iconLink} ><BiMenuAltRight className={styles.icon} />
                    {isShowMenu &&
                        <div className={styles.headerMenu} onClick={handleChildClick}>
                            <div onClick={handleMenu} className={styles.exit}>
                                <AiOutlineCloseSquare className={styles.iconExit} />
                            </div>
                            <div className={styles.menuLogo}>
                                <img src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/logo.png" alt=''></img>
                            </div>
                            <div className={styles.menuMap}>
                                <img src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/sidearea-img.jpg" alt=''></img>
                            </div>
                            <div className={styles.social}>
                                <div className={styles.titleSocial}>Follow Me</div>
                                <div className={styles.socialContent}>
                                    <div className={styles.socialItem}><CiTwitter /></div>
                                    <div className={styles.socialItem}><FaPinterestP /></div>
                                    <div className={styles.socialItem}><CiFacebook /></div>
                                    <div className={styles.socialItem}><CiInstagram /></div>
                                </div>
                            </div>
                        </div>
                    }
                </div >

            </div>

        </div>
    )
}
