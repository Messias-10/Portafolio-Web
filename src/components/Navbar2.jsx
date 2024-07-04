import logo from "../assets/kevinRushLogo.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

const Navbar2 = () => {
  return (
  <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        {//Aqui esta el codigo que es del Texto
        }
            <h1 class="animate-typing overflow-hidden font-thin whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold">LuckasDev</h1>
    </div>
    <div className="m-10 flex items-center justify-center gap-4 text-2xl">
      <a href="https://www.linkedin.com/in/luckasreyesg%C3%B3mez/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
        <FaGithub />
        <FaInstagram />
    </div>
  </nav>
  )
}

export default Navbar2
