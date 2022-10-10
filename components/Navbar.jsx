import Link from 'next/link'
import React,{useState} from 'react'
import style from '../styles/Navbar.module.css'
function Navbar() {
    const[open,setOpen]=useState(false)
  return (
 <div className={style.container}>
            <div onClick={()=>setOpen(false)} >
          <Link href={'/'}>AVOCADO</Link>
            </div>
         <ul className={style.list}>
            <li className={style.listItem}>
                <Link href={'/products/design'}>PROJECTS</Link>
            </li>
            <li className={style.listItem}>
                <Link href={'/products/development'}>DEVELOPMNET</Link>
            </li>
            <li className={style.listItem}>
                <Link href={'/products/production'}>PRODUCTION</Link>
            </li>
            <li className={style.listItem}>
                <Link href={'/products/photography'}>PHOTOGRAPHY</Link>
            </li>
            <li className={style.listItem}>
                <Link href={'/contact'}>CONTACT</Link>
            </li>
         </ul>
         
         <div onClick={()=>setOpen(!open)} className={style.menu}>
            <div className={style.line}></div>
            <div className={style.line}></div>
            <div className={style.line}></div>
         </div>
         {/*  menu item */}
         <ul onClick={()=>setOpen(false)} style={{right:open?'0':'-50vh'}} className={style.MenuItemCotainer}>
            <li className={style.menuItem}>
                <Link href={'/products/design'}>PROJECTS</Link>
            </li>
            <li className={style.menuItem}>
                <Link href={'/products/development'}>DEVELOPMNET</Link>
            </li>
            <li className={style.menuItem}>
                <Link href={'/products/production'}>PRODUCTION</Link>
            </li>
            <li className={style.menuItem}>
                <Link href={'/products/photography'}>PHOTOGRAPHY</Link>
            </li>
            <li className={style.menuItem}>
                <Link href={'/contact'}>CONTACT</Link>
            </li>
         </ul>

    </div>
  )
}

export default Navbar