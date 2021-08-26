import React from 'react';
import './Highlights.css';

export default function Highlights() {
   return (
      <section id='highlights' className='highlights'>
         <div className='highlight highlight__left--img'>
            <div className='highlight__left'>
               <img
                  className='highlight__img'
                  src='https://res.cloudinary.com/duhbhavesh/image/upload/v1630002152/null%20brains/hightlight2_jiy3hw.png'
                  alt='Boost Productivity'
               />
            </div>
            <div className='highlight__right'>
               <h3 className='highlight__title'>Boost Productivity</h3>
               <p className='highlight__para'>
                  Build an atmosphere that creates productivity in your
                  organization and your company culture.
               </p>
               <ul className='highlight__points'>
                  <li className='highlight__point'>
                     <span className='highlight__bullet'>✓</span> Maxmimize
                     productivity and growth
                  </li>
                  <li className='highlight__point'>
                     <span className='highlight__bullet'>✓</span> Speed past
                     your competition
                  </li>
                  <li className='highlight__point'>
                     <span className='highlight__bullet'>✓</span> Learn the top
                     techniques
                  </li>
               </ul>
            </div>
         </div>
         <div className='highlight highlight__right--img'>
            <div className='highlight__left'>
               <img
                  className='highlight__img'
                  src='https://res.cloudinary.com/duhbhavesh/image/upload/v1630002152/null%20brains/hightlight1_vldi3l.png'
                  alt='Automated Tasks'
               />
            </div>
            <div className='highlight__right'>
               <h3 className='highlight__title'>Automated Tasks</h3>
               <p className='highlight__para'>
                  Save time and money with our revolutionary services. We are
                  the leaders in the industry.
               </p>
               <ul className='highlight__points'>
                  <li className='highlight__point'>
                     <span className='highlight__bullet'>✓</span> Automated task
                     management workflow
                  </li>
                  <li className='highlight__point'>
                     <span className='highlight__bullet'>✓</span> Detailed
                     analytics for your data
                  </li>
                  <li className='highlight__point'>
                     <span className='highlight__bullet'>✓</span> Some awesome
                     integrations
                  </li>
               </ul>
            </div>
         </div>
      </section>
   );
}
