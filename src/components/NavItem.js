 import React from 'react'
 import { Link } from 'react-router-dom'
 
 function NavItem(props) {
     return (
         <>
             <li className='nav__item'>
                 <Link className="nav_item_link" to={props.path}> 
                 <figure className="nav__item__pic-wrap" data-category={props.label}>
                     <img src={props.src} alt="placeholder"
                     className="nav__item__img"/>
                 </figure>
                 <div className='nav__item__info'>
                     <h5 className='nav__item__text'>{props.text}</h5>
                 </div>
                 </Link>
             </li>
         </>
     )
 }
 
 export default NavItem
 