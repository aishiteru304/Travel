import React, { Fragment } from 'react'
import styles from './HeaderLogin.module.scss'

export default function Login() {
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
                </div>
                <div className={styles.signIn}>
                    SIGN IN
                </div>
            </div>
            <div className={styles.social}>
                <div className={styles.facebook}>FACEBOOK</div>
                <div className={styles.google}>GOOGLE</div>
            </div>
        </Fragment>
    )
}
