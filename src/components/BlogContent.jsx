import React from 'react'
import { useParams } from 'react-router-dom'

const BlogContent = ({blogs}) => {
  
  
  const {id}=useParams()

  let blog={}
  if(blog){
       let arr= blogs.data.filter(blog => blog.id == id)
       blog = arr[0]
  }
  else{
    blog={}
  }
  console.log("Blog Conetent Page")
  console.log(blog)

  // const blogs= [
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
    
    <div className='w-full pb-10 bg-[#f9f9f9]'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 ss:grid-cols-1
            md:gap-x-8 md:gap-y-8 sm:gap-y-8 ss:gap-y-8 ss:gap-x-4 sm:gap-x-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black'>
               
                <div className='lg:col-span-2 md:ol-span-2 gap-x-8 gap-y-8 sm:col-span-1 ss:col-span-1'>
                    <img className="h-56 w-full object-cover min-h-[400px] rounded-lg" src={`http://localhost:1337${blog.attributes.coverImg.data.attributes.url}`}/>
                    <h1 className='font-bold text-2xl my-1 pt-5'>{blog.attributes.blogTitle}</h1>
                    <div className='pt-5'>
                      <p>{blog.attributes.blogContent}</p>
                    </div>
                </div>

                <div className='w-full bg-white rounded-xl overflow-hidden drop-shadow-md py-5 max-h-[250px]'>
                  <div>
                    <img  className="p-2 w-28 h-28 object-cover rounded-full mx-auto shadow-lg bg-gray-800" src={`http://localhost:1337${blog.attributes.authorImg.data.attributes.url}`} />
                    <h2 className='font-bold text-xl text-center text-gray-800 pt-3'>{blog.attributes.authorName}</h2>
                    <p className='text-center text-gray-900 font-medium'>{blog.attributes.authorDesc}</p>
                  </div>
                </div>

            </div>
            
        </div>
    </div>
  )
    
}

export default BlogContent