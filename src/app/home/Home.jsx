import { AcUnit } from "@material-ui/icons"
import Featured from "../../components/featured/Featured"
import Navbar from "../../components/Navbar"
import "./home.scss"

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <Featured type="movie"/>
    
 

      </div>
  )
}

export default Home