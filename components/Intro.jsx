import React from 'react'
import style from '../styles/Intro.module.css'
import image from '../public/images/menu.png'
import Image from 'next/image'
import Circle from './Circle'
function Intro() {
    return (
        <div className={style.container}>
            <Circle backgroundColor="#b0ff49" top="-50vh"  left="-40vh" />
            <Circle backgroundColor="#b0ff49"   right="-40vh"/>
            <div className={style.card}>
                <h1 className={style.h1}><brand className={style.brand}>AVOCADO</brand> DIGITAL PRODUCT AGENCY</h1>
                <p className={style.para}>Create live segments and target the right people for messages based on their behaviors</p>
                <button className={style.button}>DISCOVER</button>
            </div>
            <div className={style.card}>
                <Image src={image} width="100%" height='100%' layout='fill' ></Image>
            </div>
        </div>
    )
}

export default Intro