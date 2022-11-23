import faceboot from '../../assets/fb.png'
import twitter from '../../assets/tw.png'
import instagram from '../../assets/ig.png'
import logo from '../../assets/logo.png'

export function Footer() {
  return (
    <footer className='flex justify-between items-center p-20 bg-primary-blue text-primary-white'>
      <ul >
        <li className='inline-block mr-8'><img src={faceboot} alt="Facebook ícone" /></li>
        <li className='inline-block mr-8'><img src={twitter} alt="Twitter ícone" /></li>
        <li className='inline-block'><img src={instagram} alt="Instagram ícon" /></li>
      </ul>
      <img src={logo} alt="logotipo" />
      <p>Desenvolvido por ladeia.dev.br</p>
    </footer>
  )
}