import React from 'react';
import Companies from '../Companies/Companies';
import './Hero.css';

export default function Hero() {
   return (
      <div className='container'>
         <section id='home' className='hero'>
            <h1 className='hero__title'>
               Start Crafting Your <br />
               <span className='hero__title--color'>Next Great Idea</span>
            </h1>
            <p className='hero__para'>
               Simplifying creation of landing pages, blog pages, application
               pages and so much more!
            </p>
            <button className='hero__btn'>Purchase Now</button>
            <a href='#' className='hero__link'>
               Learn More
            </a>
         </section>
         <Companies />
      </div>
   );
}
