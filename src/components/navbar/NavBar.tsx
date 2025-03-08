import logo from '../../assets/logo.png'
import { FaLinkedin, FaGithub, FaBehance, FaWhatsapp } from 'react-icons/fa'

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between py-6" > 
        <div className="flex items-center flex-shrink-0">
            <a href="/" aria-label="Home">
              <img src={logo} alt="Logo" className='mx-2' width={150} height={33}/>
            </a>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://www.linkedin.com/in/rama-otero-frontend/"
               target='_blank' 
               rel='noopener noreferrer' 
               arial-label='LinkedIn'>
              < FaLinkedin />
            </a>
            <a href="https://github.com/RamaOtero"
               target='_blank' 
               rel='noopener noreferrer' 
               arial-label='GitHub'>
              < FaGithub />
            </a>
            <a href="https://www.behance.net/ramirootero1"
               target='_blank' 
               rel='noopener noreferrer' 
               arial-label='Behance'>
              < FaBehance />
            </a>
            <a href="https://wa.me/+5492214958365"
               target='_blank' 
               rel='noopener noreferrer' 
               arial-label='WhatsApp'>
               < FaWhatsapp />
            </a>
        </div>
    </nav>
  )
}

export default NavBar