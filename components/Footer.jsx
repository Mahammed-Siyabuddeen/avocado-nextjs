import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import style from '../styles/Footer.module.css'
function Footer() {
  return (
    <div className={style.container}>
      <div className={style.brand}>
         <h1 className={style.brandName}>AVOCADO CREATIVES.</h1>
         <Link className={style.brandLink} passHref href={'/contacts'}>
          <span className={style.brandSpan}>WORK WITH US</span>
         </Link>
         <Image width='30px' height='30px'  className={style.image} objectFit='cover'  src={'/images/link.png'}/>
      </div>
      <p className={style.para}> 12 adam setreet ny usa contact@lama dev 213 1243 12312</p>
      <p className={style.para}>follow us:<br/>_fb_in_be_Tw<br/>2022 lama interactive all right reserved</p>
    </div>
  )
}

export default Footer