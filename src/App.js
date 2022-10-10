import "./App.css"
import NavbarJs from "./components/NavbarJs"
import MouseCanvas from "./components/MouseCanvas"
import AnimatedRoutes from "./AnimatedRoutes/index"

const App = () => {
    return(
        <div style={{overflow:"hidden",minHeight:"100vh",backgroundRepeat:"repeat-y", backgroundImage:"url(https://d33wubrfki0l68.cloudfront.net/daac8858fd4a0ccea44f59dfd079c3c16c263f33/c157c/assets/svg/common-bg.svg)"}}>
        <MouseCanvas/>
        <div className="nav-page">
        <NavbarJs/>
        <AnimatedRoutes/>
        </div>
        </div>
    )
}

export default App