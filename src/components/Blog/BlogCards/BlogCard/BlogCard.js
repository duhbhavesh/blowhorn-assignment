import React from 'react';
import './BlogCard.css';

export default function BlogCard({
   BlogCategoryImage,
   BlogCategory,
   BlogCategoryTitle,
   BlogCategoryExcerpt,
}) {
   return (
      <article className='blog__card'>
         <div className='blog__card--image--wrapper'>
            <img className='blog__card--image' src={BlogCategoryImage} alt='' />
         </div>
         <div className='blog__card--details'>
            <div className='blog__card--badge'>{BlogCategory}</div>
            <div className='blog__card--title'>{BlogCategoryTitle}</div>
            <div className='blog__card--excerpt'>{BlogCategoryExcerpt}</div>
         </div>
      </article>
   );
}
