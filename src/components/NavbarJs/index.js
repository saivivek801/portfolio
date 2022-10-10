import React from 'react'
import "./index.css"
import { Link,useLocation } from 'react-router-dom'
import {motion} from "framer-motion"

const NavbarJs = () => {
    const location = useLocation()

    const homeClass = location.pathname === "/" ? "active" : null
    const projectsClass = location.pathname === "/projects" ? "active" : null
    const aboutClass = location.pathname === "/about" ? "active" : null
    const contactClass = location.pathname === "/contact" ? "active" : null

    return (
        <motion.div initial={{y:-100}} animate={{y:0,}} transition={{delay : 0.2,duration:0.5}}>
        <nav className="navbar navbar-expand-lg glassBg">
        <div className="container">
        <Link to="/" className="menuLogo">SAI VIVEK</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
        <ul className="navbar-nav ms-auto text-sm-center text-center ">
            <motion.li whileHover={{scale : 1.2}} initial={{scale:1}}>
            <Link to="/" className={`menuText ${homeClass}`}>Home</Link>
            </motion.li>
            <motion.li whileHover={{scale : 1.2}} initial={{scale:1}}>
            <Link to="/projects" className={`menuText ${projectsClass}`}>Projects</Link>
            </motion.li>
            <motion.li whileHover={{scale : 1.2}} initial={{scale:1}}>
            <Link to="/about" className={`menuText ${aboutClass}`}>About</Link>
            </motion.li>
            <motion.li whileHover={{scale : 1.2}} initial={{scale:1}}>
            <Link to="/contact" className={`menuText ${contactClass}`}>Contact</Link>
            </motion.li>
        </ul>
        </div>
        </div>
        </nav>
        </motion.div>
    )
}

export default NavbarJs
