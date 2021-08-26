import React from 'react';
import './Feature.css';

export default function Feature({ FeatureTitle, FeaturePara, FeatureIcon }) {
   return (
      <div className='feature__card'>
         <span className='feature__icon'>{FeatureIcon}</span>
         <div className='feature__title'>{FeatureTitle}</div>
         <div className='feature__para'>{FeaturePara}</div>
      </div>
   );
}
