import React from 'react';
import './BlogCategoryCard.css';

export default function BlogCategoryCard({
   BlogCategoryImage,
   BlogCategory,
   BlogCategoryTitle,
   BlogCategoryExcerpt,
}) {
   return (
      <article className='blog__category--card'>
         <div className='blog__category--image--wrapper'>
            <img
               className='blog__category--image'
               src={BlogCategoryImage}
               alt=''
            />
         </div>
         <div className='blog__category--details'>
            <div className='blog__category--badge'>{BlogCategory}</div>
            <div className='blog__category--title'>{BlogCategoryTitle}</div>
            <div className='blog__category--excerpt'>{BlogCategoryExcerpt}</div>
         </div>
      </article>
   );
}
