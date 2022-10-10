import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Intro from '../components/Intro'
import {services,users} from '../Data'
import Services from '../components/Services'
import Testimonial from '../components/Testimonial'
export default function Home({services,users}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>shihab</title>
        <meta name="description" content="mahammed siyabuddeen mangalore fullstack developer this is the project website " />
      </Head>
      <Intro/>
      <Services services={services}/>
      <Testimonial users={users}/>
    </div>
  )
}
export const  getStaticProps=async()=>{
  return{
    props:{services,users}
  }
}
