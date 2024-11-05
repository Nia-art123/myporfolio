import "./Header.css"
import { FaGithub, FaLinkedin  } from "react-icons/fa";


const Header = () => {
  return (
    <div className="header">
            <nav>Home</nav>
            <nav>My Works</nav>
            <nav>Skills</nav>
            <nav>Contact me</nav>

            <div className="socials">
                <FaGithub />
                <FaLinkedin  />
            </div>
    </div>
  )
}

export default Header