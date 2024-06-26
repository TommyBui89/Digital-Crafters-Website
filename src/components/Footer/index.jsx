import React from 'react'
import { menu } from '../../data'
import "./Footer.css"
import { Link } from 'react-scroll'


const Footer = () => {
  return (
    <footer id="footer">
       <div className="section__wrapper">
          <ul className='nav__link__container'>
             {
              menu.map((list,index)=>(
                <li key={index}>
                    <Link
                      className='nav__link'
                      to={list.name.toLowerCase()}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                     >              
                      {list.name}
                    </Link>
                </li>
              ))
             }
          </ul>
         <div className="copyright__container">
             <h3>Copyright &copy; All right reserved -  | 2024</h3>
             <p className="text__muted">Built by Digital Crafters </p>
          </div>
       </div>

    </footer>
  )
}

export default Footer
