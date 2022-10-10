import React, { useEffect } from 'react'
import {motion} from "framer-motion"
import "./index.css"

const Home = () => {
    useEffect(()=>{
        const title = document.getElementsByTagName("title")
        title[0].innerHTML = "SAIVIVEK | Home"
    },[])
    return (
        <>
        <motion.div  initial={{width:0}} animate={{width:"100%"}} exit={{x:-window.innerWidth,transition:{duration:0.1}}}>
        <div  className='homeCenter'>
        <motion.h1 initial={{x:"1500",opacity:0}} animate={{x:0,opacity:1}} transition={{delay : 0.4,duration:0.6, type:"spring"}} className='myName'>Hey, I'm Sai Vivek</motion.h1>
        <motion.div initial={{x:"-1500",opacity:0}} animate={{x:0,opacity:1}} transition={{delay : 0.5,duration:0.7, type:"spring",}} >
        <p className='myInfo'>A Frontend focused Web Developer building the Frontend of Websites.</p>
        <p className='myInfo'>I’m focused on building accessible, human-centered products.</p>
        </motion.div >
        
        </div>
        </motion.div>
        </>
    )
}

export default Home
