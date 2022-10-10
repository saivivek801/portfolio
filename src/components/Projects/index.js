import {useEffect} from 'react'
import "./index.css"
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const projectsData = [
    {"id":"44ddf267-4a56-4c34-992d-361770a699c9","name":"Emoji Game",
    "image_url":"https://assets.ccbp.in/frontend/react-js/projects-showcase/emoji-game-img.png"},
    {"id":"38b968fd-8b0e-4919-a899-dc232b4f87ca","name":"App Store",
    "image_url":"https://assets.ccbp.in/frontend/react-js/projects-showcase/app-store-img.png"},
    {"id":"add3496a-4bac-44a0-8b1d-6529ddb7525d","name":"Gradient Generator",
    "image_url":"https://assets.ccbp.in/frontend/react-js/projects-showcase/gradient-generator-img.png"},
    {"id":"b5a791fc-6395-4223-8af1-5b161652a166","name":"Gallery App",
    "image_url":"https://res.cloudinary.com/dyr0qg5sy/image/upload/v1664697593/gallery-app-img_copy_xho4pw.png"},
]

const Projects = () => {
    useEffect(()=>{
        const title = document.getElementsByTagName("title")
        title[0].innerHTML = "SAIVIVEK | Projects"
    },[])
    return (        
    <>
    <motion.div  initial={{width:0}} animate={{width:"100%"}} exit={{x:-window.innerWidth,transition:{duration:0.1}}}>
        <div className='container mt-lg-5 projectCenter'>
            <ul className='listStyle'>
            {projectsData.map((each,i) => (
                <motion.li  key={each.id} initial={{opacity : 0, translateY:1000}} animate={{opacity : 1, translateY:0}} transition={{duration : 1, delay : i * 0.1}} className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 text-center">
                    <Link to={`/projects/${each.name}`}><motion.img whileHover={{scale:1.2}} whileTap={{scale:2}} src={each.image_url} alt={each.name} className="imgBg"/></Link>
                </motion.li>
            ))}
            </ul>
        </div>
        </motion.div>
        </>
    )
}

export default Projects
