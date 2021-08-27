import React from 'react';
import TeamIndividual from './TeamIndividual';
import { teams } from './TeamsData';
import './Teams.css';

export default function Teams() {
   return (
      <section id='team' className='teams'>
         <div className='container'>
            <div className='teams__details'>
               <div className='teams__title'>OUR TEAM</div>
               <p className='teams__para'>
                  An incredible team of amazing individuals
               </p>
            </div>

            <div className='teams__list'>
               {teams.map((item) => {
                  return (
                     <TeamIndividual
                        key={item.id}
                        TeamIndividualImage={item.image}
                        TeamIndividualName={item.name}
                        TeamIndividualPosition={item.position}
                        TeamIndividualTwitter={item.twitter}
                        TeamIndividualGithub={item.github}
                     />
                  );
               })}
            </div>
         </div>
      </section>
   );
}
