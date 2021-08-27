import React from 'react';
import { companies } from './CompaniesData';
import './Companies.css';

export default function Companies() {
   return (
      <div className='container'>
         <div className='companies'>
            <div className='companies__heading'>
               Trusted by Top-Leading Companies.
            </div>
            <div className='companies__images'>
               {companies.map((item) => (
                  <img
                     className='company__img'
                     src={item.link}
                     key={item.id}
                     alt=''
                  />
               ))}
            </div>
         </div>
      </div>
   );
}
