import React from 'react'
import styles from './Places.module.scss'

const list = [
    {
        urlImg: 'https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/h1-custom-icon-img-1.png',
        name: 'restaurants',
        des: 'Aenean commodo ligula eget dolor. Lorem ipsum'
    },
    {
        urlImg: 'https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/h1-custom-icon-img-2.png',
        name: 'sightseeing',
        des: 'Aenean commodo ligula eget dolor. Lorem ipsum'
    }, {
        urlImg: 'https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/h1-custom-icon-img-3.png',
        name: 'shops',
        des: 'Aenean commodo ligula eget dolor. Lorem ipsum'
    }, {
        urlImg: 'https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/h1-custom-icon-img-4.png',
        name: 'where to stay',
        des: 'Aenean commodo ligula eget dolor. Lorem ipsum'
    }
]

export default function Places() {
    return (
        <div className={styles.wrap}>
            <div className={styles.titleExtra}>enjoy your</div>
            <div className={styles.titleMain}>winter holiday</div>
            <div className={styles.des}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor lorem ipsum.</div>
            <div className='row'>
                {
                    list.map((item, index) => (
                        <div key={index} className='col-lg-3 col-md-3 col-sm-6 col-12'>
                            <div className={styles.wrapImg}><img alt='' src={item.urlImg}></img></div>
                            <div className={styles.placeName}>{item.name}</div>
                            <div className={styles.des}>{item.des}</div>
                        </div>
                    ))
                }


            </div>
        </div>
    )
}
