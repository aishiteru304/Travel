import React from 'react'
import styles from './Main.module.scss'
import Banner from './banner'
import Slider from './slider'
import Video from './video'
import TopReview from './topReview'

export default function Main() {
    return (
        <div className={styles.wrap}>
            <Banner />
            <Slider />
            <Video />
            <TopReview />
        </div>
    )
}
