import Circle from '../components/Circle'
import React from 'react'
import style from '../styles/contact.module.css'
function contact() {
    return (
        <div className={style.container}>
            <Circle backgroundColor="green" top='-70vh' left='20%' />
            <h1 className={style.h1}>GET IN TOUCH WITH US</h1>
            <form className={style.form}>
                <input className={style.inputS} type="text" placeholder="Name" />
                <input className={style.inputS} type="text" placeholder="Phone" />
                <input className={style.inputL} type="text" placeholder="Email" />
                <input className={style.inputL} type="text" placeholder="Subject" />
                <textarea
                    className={style.textArea}
                    type="text"
                    rows={6}
                    placeholder="Message"
                />
                <button className={style.button}>SUBMIT</button>
            </form>
        </div>
    )
}

export default contact