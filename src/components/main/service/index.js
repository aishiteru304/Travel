import React, { Fragment, useState } from 'react'
import { useEffect, useRef } from 'react';
import styles from './Service.module.scss'
import { CiTwitter, CiInstagram, CiFacebook } from 'react-icons/ci'
import { FaPinterestP } from 'react-icons/fa'

const list = [
    {
        urlImg: 'https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/our-team-img-6-1.jpg',
        name: 'Joe Avery',
        des: 'Peq des sut perspi ciatis ynde oninis iste matus error sit bolu ptato dolor'
    },
    {
        urlImg: 'https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/our-team-img-7-1.jpg',
        name: 'Joe Avery',
        des: 'Peq des sut perspi ciatis ynde oninis iste matus error sit bolu ptato dolor'

    },
    {
        urlImg: 'https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/our-team-img-8-1.jpg',
        name: 'Joe Avery',
        des: 'Peq des sut perspi ciatis ynde oninis iste matus error sit bolu ptato dolor'

    },
    {
        urlImg: 'https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/our-team-img-9.jpg',
        name: 'Joe Avery',
        des: 'Peq des sut perspi ciatis ynde oninis iste matus error sit bolu ptato dolor'
    },
]

export default function Service() {
    const itemsRef = useRef();

    const inforRef = useRef()
    const [isActive, setIsActive] = useState(true)
    const [tourists, setTourists] = useState(0)
    const [years, setYears] = useState(0)
    const [cottages, setCotages] = useState(0)
    const [restaurants, setRestaurants] = useState(0)



    useEffect(() => {

        const handleScroll = () => {
            if (isActive) {
                const inforRect = inforRef.current.getBoundingClientRect() //Tính vị trí của inforRef
                if (inforRect.top < 600) {

                    const touristsInterval = setInterval(() => {
                        setTourists(prevTourists => {
                            if (prevTourists < 452) {
                                return prevTourists + 1;
                            } else {
                                clearInterval(touristsInterval);
                                return 452;
                            }
                        });
                    }, 10);

                    const restaurantsInterval = setInterval(() => {
                        setRestaurants(prevRestaurants => {
                            if (prevRestaurants < 197) {
                                return prevRestaurants + 1;
                            } else {
                                clearInterval(restaurantsInterval);
                                return 197;
                            }
                        });
                    }, 10);

                    const yearsInterval = setInterval(() => {
                        setYears(prevYears => {
                            if (prevYears < 120) {
                                return prevYears + 1;
                            } else {
                                clearInterval(yearsInterval);
                                return 120;
                            }
                        });
                    }, 10);

                    const cottagesInterval = setInterval(() => {
                        setCotages(prevCottages => {
                            if (prevCottages < 283) {
                                return prevCottages + 1;
                            } else {
                                clearInterval(cottagesInterval);
                                return 283;
                            }
                        });
                    }, 10);

                    setIsActive(false)
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isActive]);

    return (
        <Fragment>
            <div className={styles.wrap}>
                <div className={`${styles.items}`} ref={itemsRef}>
                    {
                        list.map((item, index) => (
                            <div key={index} className='col-lg-3 col-md-6 col-sm-6 col-12'>
                                <div className={styles.wrapImg}>
                                    <img alt='' src={item.urlImg}></img>
                                    <div className={styles.infor}>
                                        <div className={styles.name}>{item.name}</div>
                                        <div className={styles.des}>{item.des}</div>
                                        <div className={styles.socialContent}>
                                            <div className={styles.socialItem}><CiTwitter /></div>
                                            <div className={styles.socialItem}><FaPinterestP /></div>
                                            <div className={styles.socialItem}><CiFacebook /></div>
                                            <div className={styles.socialItem}><CiInstagram /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
            <div className={`${styles.wrapInfor} row`} ref={inforRef}>
                <div className='col-lg-3 col-md-3 col-sm-6 col-12'>
                    <div className={styles.amount}>{tourists}</div>
                    <div className={styles.type}>tourist</div>
                </div>
                <div className='col-lg-3 col-md-3 col-sm-6 col-12'>
                    <div className={styles.amount}>{years}</div>
                    <div className={styles.type}>years</div>
                </div>
                <div className='col-lg-3 col-md-3 col-sm-6 col-12'>
                    <div className={styles.amount}>{cottages}</div>
                    <div className={styles.type}>cottages</div>
                </div>
                <div className='col-lg-3 col-md-3 col-sm-6 col-12'>
                    <div className={styles.amount}>{restaurants}</div>
                    <div className={styles.type}>restaurants</div>
                </div>
            </div>
        </Fragment>
    )
}
