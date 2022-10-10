import React from 'react'
import { useParams } from 'react-router-dom'
import EmojiGame from "../../ProjectsComponents/EmojiGame/EmojiGame/index"
import AppStore from '../../ProjectsComponents/AppStore/AppStore'
import GradientGenerator from "../../ProjectsComponents/GradientGenerator/GradientGenerator"
import Gallery from "../../ProjectsComponents/GalleryApp/Gallery"
import {motion} from "framer-motion"


const RenderProjects = () => {
        const {name} = useParams()
        const getProject = () => {
            switch (name) {
                case "Emoji Game":
                    return <EmojiGame/>
                case "App Store":
                    return <AppStore/>
                case "Gradient Generator":
                    return <GradientGenerator/>
                case "Gallery App":
                    return <Gallery/>
                default:
                    return null
            }
        }

    return (
        <motion.div  initial={{width:0}} animate={{width:"100%"}} exit={{x:-window.innerWidth,transition:{duration:0.1}}}>
        <div className='container'>
            {getProject()}
        </div>
        </motion.div>
    )
}

export default RenderProjects
