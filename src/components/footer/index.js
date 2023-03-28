import React from 'react'
import styles from './Footer.module.scss'
import { AiFillMail, AiFillPhone } from 'react-icons/ai'
import { TiLocation } from 'react-icons/ti'
import { RxAvatar } from 'react-icons/rx'
import { MdCopyright } from 'react-icons/md'

export default function Footer() {
    return (
        <div className={styles.wrap}>
            <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
                <div className={styles.wrapContent}>
                    <img alt='' src='https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/logo.png'></img>
                    <div className='pt-2'>Lorem ipsum dolor sit ametco nsec te tuer adipiscing elitae</div>
                    <div className='d-flex align-items-center mt-2'>
                        <div><AiFillMail /></div>
                        <p className='ps-2 m-0 d-flex align-items-center'>setsail@example.com</p>
                    </div>
                    <div className='d-flex align-items-center mt-2'>
                        <div><AiFillPhone /></div>
                        <p className='ps-2 m-0 d-flex align-items-center'>1 562 867 5309</p>
                    </div>
                    <div className='d-flex align-items-center mt-2'>
                        <div><TiLocation /></div>
                        <p className='ps-2 m-0 d-flex align-items-center'>Morris St, New York</p>
                    </div>
                </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
                <div className={styles.wrapContent}>
                    <div className='h5'>Our Recent Posts</div>
                    <div className='h10 text-secondary pt-3 pb-1'>Visit Thailand and China</div>
                    <div className='h7'>September 7, 2016</div>
                    <div className='h10 text-secondary pt-3 pb-1'>The Sound Of Our Jungle</div>
                    <div className='h7'>September 7, 2016</div>
                    <div className='h10 text-secondary pt-3 pb-1'>New Year, New Resolutions!</div>
                    <div className='h7'>September 7, 2016</div>
                </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
                <div className={styles.wrapContent}>
                    <div className='h5'>Subscribe to our Newsletter</div>
                    <div className='h9 text-secondary pt-3 pb-1'>Etiam rhoncus. Maecenas temp us, tellus eget condimentum rho</div>
                    <div className={styles.wrapInput}>
                        <RxAvatar className='ms-1' />
                        <input className='p-1 ps-2 w-100' placeholder='Name'></input>
                    </div>
                    <div className={styles.wrapInput}>
                        <AiFillMail ps-2 className='ms-1' />
                        <input className='p-1 ps-2 w-100' placeholder='Email'></input>
                    </div>
                </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
                <div className={styles.wrapContent}>
                    <div className='h5'>Our Instagram</div>
                    <div className='h10 text-secondary pt-3 pb-1'>Aliquam lorem ante, dapibus inviver raqui feugiat a, tellus. Phasellus null</div>
                    <div style={{ height: '80px' }} className='d-flex justify-content-between w-100 mt-3'>
                        <div className='w-30 '><img className='w-100 h-100' alt='' src='https://scontent-iad3-2.cdninstagram.com/v/t51.2885-15/40550729_1902988519791897_8155378118322146980_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=xN5fGpZF8gAAX8jQXvB&_nc_ht=scontent-iad3-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfARcdoXZ7J65lVEkD-XSZrMNJmP0MhlEEwSwyrPJ4hxzA&oe=64242292'></img></div>
                        <div className='w-30 '><img className='w-100 h-100' alt='' src='https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/40481446_312794325966573_7238021377612713413_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=yZQgVB1rvqYAX_IHXy9&_nc_ht=scontent-iad3-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfA-sQdWQ6jx6r8NKFmlrDiOsz0mEJ3olP8I5vd2lJDPKA&oe=6423FDBA'></img></div>
                        <div className='w-30 '><img className='w-100 h-100' alt='' src='https://scontent-iad3-2.cdninstagram.com/v/t51.2885-15/41087687_720569758279116_5219986637256948209_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=2tt-iCDsq-gAX_nvGr2&_nc_ht=scontent-iad3-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAIrpZSly_0RIKH2YDxigNfd_-vFJRFEptfBqHuBd9q9Q&oe=6423BCDF'></img></div>
                    </div>
                    <div style={{ height: '80px' }} className='d-flex justify-content-between w-100 mt-3'>
                        <div className='w-30 '><img className='w-100 h-100' alt='' src='https://scontent-iad3-2.cdninstagram.com/v/t51.2885-15/40419870_296084594511455_8682518320629895026_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=FQGf374LXV8AX8m2j3l&_nc_ht=scontent-iad3-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfB39N3ludZCB6qAzO_1FVWTQIEBZWhWHliEVjvcUfVuEg&oe=64239E1E'></img></div>
                        <div className='w-30 '><img className='w-100 h-100' alt='' src='https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/39933078_1778861865537301_9178762990586169390_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=PwVVcRowyf0AX-qQCDx&_nc_ht=scontent-iad3-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAIwRojXKBG_a6y-UR8E9MXkoGNo8tIh3uiCQPOrscS1g&oe=6424DBED'></img></div>
                        <div className='w-30 '><img className='w-100 h-100' alt='' src='https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/40808933_1806822246105865_2770821415596652047_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=v-OKFpDgtDYAX8cVy11&_nc_ht=scontent-iad3-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfD0J64Ccz2HsvJXNFVhg4Q9wdnN-1FxYqWfc0rN85ttUA&oe=64245EAA'></img></div>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                <MdCopyright /> Copyright Aishiteru
            </div>
        </div>
    )
}
