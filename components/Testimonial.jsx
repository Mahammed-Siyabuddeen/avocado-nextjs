import React from 'react'
import Circle from './Circle'
import style from '../styles/Testimonial.module.css'
import Image from 'next/image'
function Testimonial({users}) {
  return (
        <div className={style.container}>
            <Circle backgroundColor="darkblue" top='-70vh' left='0' right='0'/>
            <h1 className={style.title}>Testimonial</h1>
            <div className={style.wrapper}>
                {users.map((user)=>(
                    <div key={user.id} className={style.card}>
                        <div className={style.logo}>
                            <Image src={`/images/${user.logo}`}
                            width='30'
                            height='30'

                        />
                        </div>
                        <p className={style.comment}>{user.comment}</p>
                        <div className={style.personal}>
                            <Image
                            src={`/images/${user.avatar}`}
                            width="45"
                            height="45"
                            objectFit='cover'
                            className={style.Avatar}
                            />
                            <div className={style.info}>
                            <p className={style.name}>{user.name}</p>
                            <p className={style.jobTitle}>{user.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Testimonial