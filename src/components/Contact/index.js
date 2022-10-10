import {useEffect} from 'react'
import {motion} from "framer-motion"
import "./index.css"

const onClickContact = () => {
    window.open("https://www.linkedin.com/in/sai-vivek009/")
}

const Contact = () => {
    useEffect(()=>{
        const title = document.getElementsByTagName("title")
        title[0].innerHTML = "SAIVIVEK | Contact"
    },[])
    return (
        <motion.div initial={{width:0}} animate={{width:"100%"}} exit={{x:-window.innerWidth,transition:{duration:0.1}}}>
        <div className='contact-center'>
            <motion.h1 initial={{opacity:0,y:-500}} animate={{opacity:1,y:0}} transition={{duration:0.8, delay:0.3}}>Contact Me</motion.h1>
            <motion.ul initial={{y:"1500",opacity:0}} animate={{y:0,opacity:1}} transition={{delay : 0.6,duration:0.8, type:"spring"}} className='iconList'>
            <motion.li whileHover={{scale:1.4,color:"#3399FF"}} initial={{scale:1}} onClick={onClickContact}><i className="fa-brands fa-linkedin iconFont"></i></motion.li>
        </motion.ul>
        </div>
        </motion.div>
    )
}

export default Contact
