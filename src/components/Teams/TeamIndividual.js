import React from 'react';
import './TeamIndividual.css';

export default function TeamIndividual({
   TeamIndividualImage,
   TeamIndividualName,
   TeamIndividualPosition,
   TeamIndividualTwitter,
   TeamIndividualGithub,
}) {
   return (
      <div className='team__card'>
         <div className='team__img--wrapper'>
            <img className='team__img' src={TeamIndividualImage} alt='' />
         </div>
         <div className='team__card--name'>{TeamIndividualName}</div>
         <div className='team__card--position'>{TeamIndividualPosition}</div>
         <div className='team__card--socials'>
            <div className='team__card--icon team__card--twitter'>
               {TeamIndividualTwitter}
            </div>
            <div className='team__card--icon team__card--github'>
               {TeamIndividualGithub}
            </div>
         </div>
      </div>
   );
}
