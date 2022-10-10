import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {services} from '../../Data'
import style from '../../styles/product.module.css'
function ProductName({data}) {
  return (
    <div className={style.container} >
      <div className={style.card}>
          {
            data.images.map((image,i)=>(
              <div key={i} className={style.imageContainer}>
                <Image
                src={image.url}
                objectFit="cover"
                layout='fill'
                />
                </div>
            ))
          }
      </div>
      <div className={style.details}>
            <h1 className={style.h1}>{data.title}</h1>
            <p className={style.para}>{data.desc} </p>
            <Link href={'/contact'}>
            <button className={style.button}>Contact</button>
            </Link>
      </div>
    </div>
   
  )
}

export const getStaticPaths=async()=>{
  const paths=services.map((service)=>{
    return{
      params:{name:service.name}
    }
  })
    return{
        paths,
        fallback:false,
    }
}
export const getStaticProps=async(context)=>{
    const data=services.filter((service)=>service.name===context.params.name)[0];
    return{
        props:{data}
    }
}
export default ProductName