import React from 'react';
import Feature from './Feature';
import { features } from './FeaturesData';
import './Features.css';

export default function Features() {
   return (
      <div className='container'>
         <section id='features' className='features'>
            <div className='features__details'>
               <h3 className='features__title'>Our Features</h3>
               <p className='features__para'>
                  Check out our list of awesome features below.
               </p>
            </div>

            <div className='features__list'>
               {features.map((item) => {
                  return (
                     <Feature
                        key={item.id}
                        FeatureTitle={item.title}
                        FeaturePara={item.description}
                        FeatureIcon={item.icon}
                     />
                  );
               })}
            </div>
         </section>
      </div>
   );
}
