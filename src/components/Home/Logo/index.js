import './index.scss'
import LogoS from '../../../assets/images/side-image.png'
import { useEffect, useRef } from 'react'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import gsap from 'gsap-trial'

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="coding-image" src={LogoS} />
    </div>
  )
}

export default Logo
