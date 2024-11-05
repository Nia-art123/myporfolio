import "../pages/Hero.css"
import myImage from "../assets/myImage.jpg"
const Hero = () => {
  return (
    <div className="container">
        <div className="textSide">
            <h2>Hi, i`m</h2>
            <p>DA-ALA QUINCY</p>

            <button className="button">Get Started</button>
        </div>

        <div className="myImage">
              <img src={myImage} alt="" />

        </div>
    </div>
  )
}

export default Hero