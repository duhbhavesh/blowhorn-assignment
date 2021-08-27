import React from 'react';
import { footerLinks, footerSocials } from './FooterData';
import './Footer.css';

export default function Footer() {
   return (
      <footer className='footer'>
         <div className='container'>
            <ul className='footer__links'>
               {footerLinks.map((item) => (
                  <li className='footer__link' key={item.id}>
                     <a className='footer__link--item' href={item.link}>
                        {item.text}
                     </a>
                  </li>
               ))}
            </ul>

            <ul className='footer__socials'>
               {footerSocials.map((item) => (
                  <li className='footer__social--link' key={item.id}>
                     {item.icon}
                  </li>
               ))}
            </ul>

            <div className='footer__bottom'>
               © 2021 nullBrains, Inc. All rights reserved.
            </div>
         </div>
      </footer>
   );
}
