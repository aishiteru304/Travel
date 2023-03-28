import React from 'react'
import styles from './Resort.module.scss'

const list = [
    {
        urlImg: 'https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/destinations-featured-img-8-1.jpg',
        place: 'slovenia'
    },
    {
        urlImg: 'https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/destinations-featured-img-9-1.jpg',
        place: 'france'
    },
    {
        urlImg: 'https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/destinations-featured-img-10-1.jpg',
        place: 'switgerland'
    }
]

export default function Resort() {
    return (
        <div className={styles.wrap}>
            <div className={styles.titleExtra}>choose your</div>
            <div className={styles.titleMain}>winter resort</div>
            <div className={styles.des}>Skiing is one of the most popular sports nowadays, especially the countries have cold weather with snow in the winter. This sport is not popular in Viet Nam, because they do not have snow and just play with it at sport center in the city.</div>
            <div className='row'>

                {
                    list.map((item, index) => (

                        <div key={index} className='col-lg-4 col-md-4 col-sm-12 col-12'>
                            <div className={styles.wrapContent}>
                                <div className={styles.wrapImg}>
                                    <img alt='' src={item.urlImg}></img>
                                </div>
                                <div className={styles.place}>{item.place}</div>
                            </div>


                        </div>
                    ))
                }


            </div>
        </div>
    )
}
