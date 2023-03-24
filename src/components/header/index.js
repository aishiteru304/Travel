import React, { Fragment } from 'react'
import { useState, useEffect } from 'react';
import HeaderPc from './headerPc'
import HeaderTablets from './headerTablets'


function Header() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return (
        <Fragment>
            {width > 1024 ? <HeaderPc /> : <HeaderTablets />}
        </Fragment>

    )
}

export default Header