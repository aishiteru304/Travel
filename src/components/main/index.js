import React from 'react'
import styles from './Main.module.scss'
import Banner from './banner'
import Slider from './slider'
import Video from './video'
import TopReview from './topReview'
import Places from './places'
import Service from './service'
import Resort from './resort'

export default function Main() {
    return (
        <div className={styles.wrap}>
            <Banner />
            <Slider />
            <Video />
            <TopReview />
            <Places />
            <Service />
            <Resort />
        </div>
    )
}
