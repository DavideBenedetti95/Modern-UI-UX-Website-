import React, { useEffect }  from 'react'
import {features} from '../constants'
import styles, {layout} from '../style'
import Button from './Button'
import {useAnimation, motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";


const FeaturesCard = ({index,icon,content,title}) => {
  return (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length -1  ? "mb-6" : "mb-0"} feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt="icon" className='w-[50%] h-[50%] object-contain ' />
      </div>

      <div className='flex-1 flex flex-col ml-3'>
        <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>{title}</h4>
        <p className='font-poppins font-semibold text-dimWhite text-[16px] leading-[23px] mb-1'>{content}</p>
      </div>
    </div>
  )
}


const Business = () => {

  const opacityVariants = {
    visible: { opacity: 1, transition: { duration: 2} },
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
    <section id='features' className={`${layout.section} mt-20`}>Business
      <motion.div ref={ref} animate={controls} variants={opacityVariants} initial='hidden' className={layout.sectionInfo}>
        <h2 className={styles.heading2}>You do the business, <br className='sm:block hidden' /> we’ll handle the money.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        
        <Button styles="mt-10"></Button>
      </motion.div>

      <motion.div ref={ref} animate={controls} variants={opacityVariants} initial='hidden' className={`${layout.sectionImg} flex-col`}>
        {features.map((e, index)=>(
          <FeaturesCard key={e.id} {...e} index={index}/>
        ))}
      </motion.div>
    </section>
  )
}

export default Business