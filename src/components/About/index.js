    import {useEffect} from 'react'
    import "./index.css"
    import {motion} from "framer-motion"

    const About= () => {
        useEffect(()=>{
            const title = document.getElementsByTagName("title")
            title[0].innerHTML = "SAIVIVEK | About"
        },[])
    return (
        <motion.div initial={{width:0}} animate={{width:"100%"}} exit={{x:-window.innerWidth,transition:{duration:0.1}}}>
        <div className='container'>
        <motion.h1 initial={{opacity:0,y:700}} animate={{opacity:1,y:0}} transition={{duration:0.5,delay:0.1}} className='aboutMe m-3 text-center mt-lg-5 mb-lg-5'>About Me</motion.h1>
        <div className='d-flex flex-lg-row flex-md-row flex-column justify-content-between align-content-between'>
        <motion.div initial={{opacity:0,x:-500}} animate={{opacity:1,x:0}} transition={{duration:0.5,delay:0.3}} className='col-lg-6 me-lg-5 mt-lg-5'>
        <h1 className='aboutMe'>Get To Know Me!</h1>
        <p>I'm a Frontend Web Developer building the Front-end of Websites and Web Applications. Check out some of my work in the Projects section. </p>
        <p>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me. </p>
        <h1 className='aboutMe'>Experiences</h1>
        <p>I'm a beginner Web Developer. <br/> For the past 9 months, I started learning web development.</p>

        </motion.div>
        <motion.div initial={{opacity:0,x:500}} animate={{opacity:1,x:0}} transition={{duration:0.5,delay:0.3}} className='col-lg-6 me-lg-5 mt-lg-5'>
            <h1 className='text-center mySkills'>My Skills</h1>
        <div className='m-0 p-0  d-flex flex-wrap'>
            <motion.h1 whileHover={{scale:1.2}} className='m-2 skillsIcons1'>HTML</motion.h1>
            <motion.h1 whileHover={{scale:1.2}} className='m-2 skillsIcons2'>CSS</motion.h1>
            <motion.h1 whileHover={{scale:1.2}} className='m-2 skillsIcons3'>JAVASCRIPT</motion.h1>
            <motion.h1 whileHover={{scale:1.2}} className='m-2 skillsIcons4'>BOOTSTRAP</motion.h1>
            <motion.h1 whileHover={{scale:1.2}} className='m-2 skillsIcons5'>REACT</motion.h1>
            <motion.h1 whileHover={{scale:1.2}} className='m-2 skillsIcons6'>SQL Basics</motion.h1>
            <motion.h1 whileHover={{scale:1.2}} className='m-2 skillsIcons7'>NODE.JS Basics</motion.h1>
            <motion.h1 whileHover={{scale:1.2}} className='m-2 skillsIcons5'>EXPRESS.JS Basics</motion.h1>
        </div></motion.div>
        </div>
        </div>
        </motion.div>
    )
    }

    export default About
