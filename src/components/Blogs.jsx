import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';


const Blogs = ({blogs}) => {
  

  // const blogs1 = [
   
  //   {
  //     "id":1,
  //     "title": "Blog Title1",
  //     "desc": "Lorem Decription",
  //     "coverImg": "https://miro.medium.com/max/1100/1*a_s3z4aUQ9JBoK9L8FqmaQ.webp",
  //     'authorName':'John Doe',
  //     'authorImg' :'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
  //     'authorDesc':'Web Developer'
  //   },
  //   {
  //     "id":2,
  //     "title": "Blog Title2",
  //     "desc": "Lorem Decription",
  //     "coverImg": "https://miro.medium.com/max/1100/1*a_s3z4aUQ9JBoK9L8FqmaQ.webp",
  //     'authorName':'John Doe',
  //     'authorImg' :'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
  //     'authorDesc':'Web Developer'
  //   },
  //   {
  //     "id":3,
  //     "title": "Blog Title3",
  //     "desc": "Lorem Decription",
  //     "coverImg": "https://miro.medium.com/max/1100/1*a_s3z4aUQ9JBoK9L8FqmaQ.webp",
  //     'authorName':'John Doe',
  //     'authorImg' :'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
  //     'authorDesc':'Web Developer'
  //   },
  //   {
  //     "id":4,
  //     "title": "Blog Title4",
  //     "desc": "Lorem Decription",
  //     "coverImg": "https://miro.medium.com/max/1100/1*a_s3z4aUQ9JBoK9L8FqmaQ.webp",
  //     'authorName':'John Doe',
  //     'authorImg' :'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
  //     'authorDesc':'Web Developer'
  //   },
  //   {
  //     "id":5,
  //     "title": "Blog Title5",
  //     "desc": "Lorem Decription",
  //     "coverImg": "https://miro.medium.com/max/1100/1*a_s3z4aUQ9JBoK9L8FqmaQ.webp",
  //     'authorName':'John Doe',
  //     'authorImg' :'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
  //     'authorDesc':'Web Developer'
  //   }

  // ]
  

  return (
    <div className="w-full py-[50px] z-99 relative h-full" >
      <div className='max-w-[1240px] mx-auto'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 gap-8 px-4 text-black'>

        
          {blogs.data.map( (blog) =>

              <Link key={blog.id} to={`/blog/${blog.id}`}>
              <div className='bg-white rounded-xl overflow-hidden drop-shadow-md min-h-[450px]'>
                <img className='h-56 w-full object-cover' src={`http://localhost:1337${blog.attributes.coverImg.data.attributes.url}`} />
                <div className='p-8'>
                  <h3 className='font-bold text-2xl my-1'>{blog.attributes.blogTitle}</h3>
                  <p className='text-gray-600 text-md'>{blog.attributes.blogDesc}</p>
                </div>
              </div>
              </Link>

          )}
        
        
          

          
        </div>
      </div>
    </div>
  )
}

export default Blogs