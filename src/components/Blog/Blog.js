import React from 'react';
import BlogCard from './BlogCards/BlogCard/BlogCard';
import BlogCategoryCard from './BlogCards/BlogCategoryCard/BlogCategoryCard';
import { blogArticle, blogCategory } from './BlogData';
import './Blog.css';

export default function Blog() {
   return (
      <section id='blogs' className='blogs'>
         <div className='container'>
            <div className='blogs__details'>
               <div className='blogs__title'>The Project Blog</div>
               <p className='blogs__para'>
                  Designs and layouts to help you with your app.
               </p>
            </div>

            <div className='blogs__categories'>
               {blogCategory.map((item) => {
                  return (
                     <BlogCategoryCard
                        key={item.id}
                        BlogCategoryImage={item.image}
                        BlogCategory={item.category}
                        BlogCategoryTitle={item.title}
                        BlogCategoryExcerpt={item.excerpt}
                     />
                  );
               })}
            </div>

            <div className='blogs__posts'>
               {blogArticle.map((item) => {
                  return (
                     <BlogCard
                        key={item.id}
                        BlogCategoryImage={item.image}
                        BlogCategory={item.category}
                        BlogCategoryTitle={item.title}
                        BlogCategoryExcerpt={item.excerpt}
                     />
                  );
               })}
            </div>
         </div>
      </section>
   );
}
