import React, { Fragment, useEffect, useRef, useState } from 'react'
import { AiTwotoneCalendar, AiOutlineStar, AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'
import styles from './Slider.module.scss'
import { SmoothHorizontalScrolling } from './SilderFunction'

const list = [
    {
        urlImg: 'https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-17.jpg',
        name: 'Skiing In Alps',
        price: '$900',
        start: '7'
    },
    {
        urlImg: 'https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-18.jpg',
        name: 'Snows Surfing',
        price: '$720',
        start: '7.3'
    }, {
        urlImg: 'https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-19.jpg',
        name: 'Kids Ski School',
        price: '$1600',
        start: '7.5'
    }, {
        urlImg: 'https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-16.jpg',
        name: 'Magic Of Italy',
        price: '$1000',
        start: '6.7'
    }, {
        urlImg: 'https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-15.jpg',
        name: 'Winter Action',
        price: '$960',
        start: '6.7'
    }, {
        urlImg: 'https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/tour-featured-img-14.jpg',
        name: 'Active Winter',
        price: '$3600',
        start: '7.5'
    },
]

export default function Slider() {
    const wrapRef = useRef()
    const itemRef = useRef()
    const [start, setStart] = useState(0)
    const [isDrag, setIsDrag] = useState(false)
    const [enter, setEnter] = useState(0)

    const handleMoveRight = () => {
        const maxScroll = wrapRef.current.scrollWidth - wrapRef.current.clientWidth
        if (wrapRef.current.scrollLeft < maxScroll) {
            SmoothHorizontalScrolling(wrapRef.current,
                250,
                itemRef.current.clientWidth,
                wrapRef.current.scrollLeft)
        }
    }

    const handleMoveLeft = () => {
        if (wrapRef.current.scrollLeft) {
            SmoothHorizontalScrolling(wrapRef.current,
                250,
                -itemRef.current.clientWidth,
                wrapRef.current.scrollLeft)
        }
    }

    useEffect(() => {
        if (isDrag) {
            if (enter > start) handleMoveLeft()
            if (enter < start) handleMoveRight()
        }
    }, [isDrag, enter, start])


    const onDragStart = (e) => {
        setIsDrag(true)
        setStart(e.screenX)
    }

    const onDragEnter = (e) => {
        setEnter(e.screenX)
    }

    const onDragEnd = () => {
        setIsDrag(false)
    }


    return (
        <Fragment>

            <div className={styles.wrap} ref={wrapRef}
                dragble='true'
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
                onDragEnter={onDragEnter}
            >
                {
                    list.map((item, index) => (
                        <div key={index} className={`${styles.item} col-lg-3 col-md-4 col-sm-6 col-12`} ref={itemRef}>
                            < div className={styles.wrapContentItem}>
                                <div className={styles.wrapImg}>
                                    <div className={styles.itemBackground}
                                        style={{
                                            backgroundImage: `url(${item.urlImg})`
                                        }}>
                                    </div>
                                </div >
                                <div className={styles.label}>
                                    <div className={styles.labelContent}> <AiTwotoneCalendar /> <p>1</p></div>
                                    <div className={styles.labelContent}> <AiTwotoneCalendar /> <p>13+</p></div>
                                    <div className={styles.labelContent}> <AiTwotoneCalendar /> <p>Skiing</p></div>
                                </div>
                                <div className={styles.des}>
                                    <p>{item.name}</p>
                                    <h4>Lorem ipsum dolor sit amet, consectetuer adipis cing elit.</h4>
                                    <div className={styles.reviews}>
                                        <h2>{item.price}</h2>
                                        <h2>{item.start} <AiOutlineStar /></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div onClick={handleMoveRight} className={styles.right}><AiOutlineRight /></div>
            <div onClick={handleMoveLeft} className={styles.left}><AiOutlineLeft /></div>
        </Fragment>

    )
}






