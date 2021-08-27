import React from 'react';
import '../../index.css';
import HeaderDesktop from './HeaderDesktop/HeaderDesktop';
import HeaderMobile from './HeaderMobile/HeaderMobile';

export default function Header() {
   return (
      <div className='container'>
         <HeaderDesktop />
         <HeaderMobile />
      </div>
   );
}
