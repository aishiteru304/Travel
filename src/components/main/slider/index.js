import React from 'react'
import styles from './Slider.module.scss'
import { useRef } from 'react'
import { AiOutlineStar, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const list = [
    {
        urlImg: 'https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-17.jpg',
        name: 'Skiing In Alps',
        des: 'Lorem ipsum dolor sit amet, consectetuer adipis cing elit.',
        price: '$900',
        star: '7'
    },
    {
        urlImg: 'https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-18.jpg',
        name: 'Snows Surfing',
        des: 'Lorem ipsum dolor sit amet, consectetuer adipis cing elit.',
        price: '$720',
        star: '7.3'
    }, {
        urlImg: 'https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-19.jpg',
        name: 'Kids Ski School',
        des: 'Lorem ipsum dolor sit amet, consectetuer adipis cing elit.',
        price: '$1600',
        star: '7.5'
    }, {
        urlImg: 'https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-16.jpg',
        name: 'Magic Of Italy',
        des: 'Lorem ipsum dolor sit amet, consectetuer adipis cing elit.',
        price: '$1000',
        star: '6.7'
    }, {
        urlImg: 'https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-15.jpg',
        name: 'Winter Action',
        des: 'Lorem ipsum dolor sit amet, consectetuer adipis cing elit.',
        price: '$960',
        star: '6.7'
    }, {
        urlImg: 'https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-14.jpg',
        name: 'Active Winter',
        des: 'Lorem ipsum dolor sit amet, consectetuer adipis cing elit.',
        price: '$3600',
        star: '7.5'
    },
]



export default function Slider() {

    const itemsRef = useRef();
    const itemRef = useRef();
    const currentItemRef = useRef(0);
    const translateXRef = useRef(0);

    const hanldeLeft = () => {
        if (currentItemRef.current > 0) {
            currentItemRef.current--
            translateXRef.current += itemRef.current.clientWidth
            itemsRef.current.style.transform = `translateX(${translateXRef.current}px)`
        }
    }

    const handleRight = () => {
        const itemPerSlide = Math.round(itemsRef.current.clientWidth / itemRef.current.clientWidth)
        if (currentItemRef.current < list.length - itemPerSlide) {
            currentItemRef.current++
            translateXRef.current -= itemRef.current.clientWidth
            itemsRef.current.style.transform = `translateX(${translateXRef.current}px)`
        }
    }
    return (
        <div className={styles.wrap}>
            <div className={`${styles.items} row`} ref={itemsRef}>

                {
                    list.map((item, index) => (
                        <div key={index} className='col-lg-3 col-md-4 col-sm-6 col-12' ref={itemRef}>
                            <div className={styles.wrapItem}>
                                <div className={styles.wrapImg}><img alt='' src={item.urlImg}></img></div>
                                <div className={styles.name}>{item.name}</div>
                                <div className={styles.des}>{item.des}</div>
                                <div className={styles.reviews}>
                                    <div>{item.price}</div>
                                    <div className={styles.star}>{item.star}<AiOutlineStar /></div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
            <div className={styles.left} onClick={hanldeLeft}><AiOutlineLeft /></div>
            <div className={styles.right} onClick={handleRight}><AiOutlineRight /></div>
        </div>
    )
}







