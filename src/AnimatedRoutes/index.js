import Home from "../components/Home"
import Projects from "../components/Projects"
import About from "../components/About"
import { Route, Routes, useLocation } from "react-router-dom"
import {AnimatePresence} from "framer-motion"
import Contact from "../components/Contact"
import RenderProjects from "../components/RenderProjects"

const AnimatedRoutes = () => {
    const location = useLocation()
    return(
        <AnimatePresence>
        <Routes location={location} key={location.pathname}> 
            <Route path="/saivivek" element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/projects/:name" element={<RenderProjects/>} />
        </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes