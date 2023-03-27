import React from 'react'
import styles from './Video.module.scss'

export default function Video() {
    return (
        <div className={styles.wrap}>
            <div className={styles.titleExtra}>try now</div>
            <div className={styles.titleMain}>winter sport</div>
            <div className={styles.wrapVideo}><iframe title='advertiseVideo' src='https://www.youtube.com/embed/xd39Ho1kfqc'></iframe></div>
            <div className={styles.des}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis sit amet, consectetuer adipiscing elit Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit ame</div>
            <div className={styles.viewMore}>view more</div>
        </div>
    )
}
