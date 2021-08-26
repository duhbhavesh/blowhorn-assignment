import React from 'react';
import { headerLinks } from './HeaderData';
import { FaSearch } from 'react-icons/fa';
import '../../index.css';
import './Header.css';

export default function Header() {
   return (
      <div className='container header__container'>
         <div className='header'>
            <div className='header__brand'>nullBrains.</div>
            <div className='header__menu'>
               <ul className='header__links'>
                  {headerLinks.map((item) => (
                     <li className='header__link' key={item.id}>
                        <a className='header__link--item' href={item.link}>
                           {item.text}
                        </a>
                     </li>
                  ))}
               </ul>
               <div className='header__search'>
                  <FaSearch color='#717886' />
               </div>
            </div>
            <div className='header__auth'>
               <button className='header__auth--btn header__signin--btn'>
                  Sign In
               </button>
               <button className='header__auth--btn header__signup--btn'>
                  Sign Up
               </button>
            </div>
         </div>
      </div>
   );
}
