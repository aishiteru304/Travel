import { useEffect, useRef, useState } from 'react';
import styles from './TopReview.module.scss';
import { AiOutlineStar, AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'

const list = [{
    avatar: 'https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/user-img-1.png',
    title: 'Beautiful Holland',
    star: '4',
    text: 'Fo etor uvluoc iwpodit res, vet of nihc egam yubulas. Al uavq',
    name: 'Carol Silva'
},
{
    avatar: 'https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/user-img-2.png',
    title: 'Barcelona',
    star: '5',
    text: 'Fa etor eviuas lwqedit tas, vut et nihc egam yubulas. Ei euvy ',
    name: 'Jame Fisher'
},
{
    avatar: 'https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/user-img-3.png',
    title: 'Kaohsiung',
    star: '5',
    text: 'Te utar uvlues iwqodit tas, vut et nihc egam yubulas. Ei euvy',
    name: 'Roger Brooks'
},
{
    avatar: 'https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/user-img-4.png',
    title: 'Taipei',
    star: '5',
    text: 'Fo etor uvluoc iwpodit res, vet of nihc egam yubulas. Al uavq',
    name: 'Susan Day'
},
{
    avatar: 'https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/user-img-5.png',
    title: 'Tagagona',
    star: '5',
    text: 'Fa etor eviuas lwqedit tas, vut et nihc egam yubulas. Ei euvy ',
    name: 'Carl Moore'
},
{
    avatar: 'https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/user-img-6.png',
    title: 'Madrid',
    star: '5',
    text: 'Te utar uvlues iwqodit tas, vut et nihc egam yubulas. Ei euvy',
    name: 'Sam Smith'
},
]

export default function TopReview() {
    const itemsRef = useRef();
    const currentItemRef = useRef(1);
    const translateXRef = useRef(0);
    const [numSlide, setNumSlide] = useState(2)


    useEffect(() => {
        const handleResize = () => {
            setNumSlide(Math.round(itemsRef.current.scrollWidth / itemsRef.current.clientWidth))
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    const hanldeLeft = () => {
        if (currentItemRef.current > 1) {
            currentItemRef.current--
            translateXRef.current += 100
            itemsRef.current.style.transform = `translateX(${translateXRef.current}%)`
        }
    }

    const handleRight = () => {
        // const numberSlide = Math.round(itemsRef.current.scrollWidth / itemsRef.current.clientWidth)
        if (currentItemRef.current < numSlide) {
            currentItemRef.current++
            translateXRef.current -= 100
            itemsRef.current.style.transform = `translateX(${translateXRef.current}%)`
        }
    }

    const handleStart = () => {
        if (currentItemRef.current > 1) {
            translateXRef.current += 100 * (currentItemRef.current - 1)
            itemsRef.current.style.transform = `translateX(${translateXRef.current}%)`
            currentItemRef.current = 1
        }
    }

    const handleEnd = () => {
        // const numberSlide = Math.round(itemsRef.current.scrollWidth / itemsRef.current.clientWidth)
        if (currentItemRef.current < numSlide) {
            translateXRef.current -= 100 * (numSlide - currentItemRef.current)
            itemsRef.current.style.transform = `translateX(${translateXRef.current}%)`
            currentItemRef.current = numSlide
        }
    }




    return (
        <div className={styles.wrap}>
            <div className={`${styles.items} row`} ref={itemsRef}>

                {
                    list.map((item, index) => (
                        <div key={index} className='col-lg-4 col-md-6 col-sm-12 col-12'>
                            <div className={styles.itemContent}>
                                <div className={styles.avatar}><img alt='' src={item.avatar}></img></div>
                                <div className={styles.infor}>
                                    <div className={styles.title}>{item.title}</div>
                                    <div className={styles.star}>{item.star}<AiOutlineStar /></div>
                                    <div className={styles.text}>{item.text}</div>
                                    <div className={styles.name}>{item.name}</div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
            <div className={styles.reviewBtn}>
                <div className={styles.start} onClick={handleStart}>1</div>
                <div className={styles.left} onClick={hanldeLeft}><AiOutlineLeft /></div>
                <div className={styles.right} onClick={handleRight}><AiOutlineRight /></div>
                <div className={styles.end} onClick={handleEnd}>{numSlide}</div>
            </div >
        </div>
    );
}
