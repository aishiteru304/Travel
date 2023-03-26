import React, { useEffect, useState } from 'react'
import styles from './Banner.module.scss'

export default function Banner() {
  const backgroundImgUrl = ['https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/skiing-slider-img-2.jpg',
    'https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/skiing-slider-img-1.jpg']

  const titleBanner = ['winter vacations', 'snow adventure']

  const desBanner = ['The majestic beauty of winter promises you the most wonderful experiences. Feel nature in the most authentic way. Let is start the journey now',
    'Lorem ipsum dolor sit amet, consectetuer adipis cing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis theme natoque']
  const [indexUrl, setIndexUrl] = useState(0)

  useEffect(() => {

    const intervalId = setInterval(() => {
      setIndexUrl(prevIndex => (prevIndex + 1) % 2);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [])


  return (
    <div className={styles.wrap}>
      <div className={styles.banner}
        style={{
          backgroundImage: `url(${backgroundImgUrl[indexUrl]})`,
          animationName: styles.zoom,
          animationDuration: '5s',
          animationIterationCount: 'infinite',
          animationFillMode: "forwards"
        }}>
      </div>
      <div className={styles.text}>
        <div className={styles.title}>{titleBanner[indexUrl]}</div>
        <div className={styles.des}>{desBanner[indexUrl]}</div>
      </div>
    </div>
  )
}
