import React from 'react';
import Companies from '../Companies/Companies';
import './Hero.css';

export default function Hero() {
   return (
      <>
         <section id='home' className='hero'>
            <div className='container'>
               <h1 className='hero__title'>
                  Start Crafting Your <br />
                  <span className='hero__title--color'>Next Great Idea</span>
               </h1>
               <p className='hero__para'>
                  Simplifying creation of landing pages, blog pages, application
                  pages and so much more!
               </p>
               <div className='hero__cta'>
                  <button className='hero__btn'>
                     Purchase Now
                     <span className='hero__btn--badge'>only $15/mo</span>
                  </button>
               </div>
               <a href='#home' className='hero__link'>
                  Learn More
               </a>
            </div>
            <Companies />
         </section>
      </>
   );
}
