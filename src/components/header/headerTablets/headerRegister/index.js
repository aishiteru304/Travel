import React, { Fragment } from 'react'
import styles from './HeaderRegister.module.scss'

export default function Register() {
    return (
        <Fragment >
            <div className={styles.type}>
                <div className={styles.login}>LOGIN</div>
                <div className={styles.register}>REGISTER</div>
            </div>
            <div className={styles.formContent}>
                <div className={styles.input}>
                    <input placeholder='Username' type='text'></input>
                    <input placeholder='Password' type='password'></input>
                    <input placeholder='Repeat Password' type='password'></input>
                </div>
                <div className={styles.registerBtn}>
                    REGISTER
                </div>
            </div>
        </Fragment>
    )
}
