import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { headerLinks } from '../HeaderData';
import './HeaderMobile.css';

export default function HeaderMobile() {
   const [isActive, setActive] = useState(false);

   const handleToggle = () => {
      setActive(!isActive);
   };

   return (
      <div className='container'>
         <div className='header__mobile'>
            <a href='/' className='header__brand'>
               nullBrains.
            </a>
            <ul
               className={
                  isActive ? 'header__mobile--links show__nav' : 'hide__nav'
               }>
               {headerLinks.map((item) => (
                  <li className='header__mobile--link' key={item.id}>
                     <a className='header__mobile--link--item' href={item.link}>
                        {item.text}
                     </a>
                  </li>
               ))}
               <div className='header__auth header__mobile__auth'>
                  <button className='header__auth--btn header__signin--btn header__mobile--btn'>
                     Sign In
                  </button>
                  <button className='header__auth--btn header__signup--btn header__mobile--btn'>
                     Sign Up
                  </button>
               </div>
            </ul>
            <div className='header__bars'>
               <FaBars onClick={handleToggle} color='717886' />
            </div>
         </div>
      </div>
   );
}
