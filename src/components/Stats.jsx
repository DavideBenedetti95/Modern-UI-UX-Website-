import React, { useEffect } from 'react'
import {stats} from '../constants'
import styles from '../style'
import {useAnimation, motion} from 'framer-motion'
import { useInView } from "react-intersection-observer";


const Stats = () => {
  
  const opacityVariants = {
    visible: { opacity: 1, transition: { duration: 3 } },
    hidden: { opacity: 0}
  }

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(()=>{
    if(inView){
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.section ref={ref} animate={controls} variants={opacityVariants} initial='hidden' className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((e)=>(
        <div key={e.id} className={`flex justify-start items-center flex-row ml-3`}>
          <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[50px] leading-[40px] text-white'>{e.value}</h4>
          <p className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[25px] leading-[20px] text-gradient mx-5 uppercase'>{e.title}</p>
        </div>
      ))}
    </motion.section>
  )
}

export default Stats