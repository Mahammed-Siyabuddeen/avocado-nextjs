import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import style from '../styles/Services.module.css'
function Services({ services }) {
    return (
        <div className={style.container}>
            <h1 className={style.title}> What We Can Do?</h1>
            <h1 className={style.subTitle}>Services We Can Help You With </h1>
            <div className={style.services}>
                {
                    services.map((service)=>(
                        <Link passHref  key={service.id} href={`/products/${service.name}`}>
                            <div className={style.service}>
                                <div className={style.desc}>{service.desc}</div>
                                <span className={style.cat}>{service.title}</span>
                                <div className={style.media}>
                                    {
                                        service.video?(
                                            <video src={`/images/${service.video}`}
                                            autoPlay
                                            muted
                                            loop
                                            className={style.video}
                                            />
                                        ):(
                                            <Image src={`/images/${service.photo}`}
                                            width="100%"
                                            height="100%"
                                            layout='responsive'
                                            objectFit='cover'
                                            />
                                        )

                                        
                                    }
                                </div>
                            </div>
                         </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Services