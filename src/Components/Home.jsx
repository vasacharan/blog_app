import React, { createContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BlogDetails from './BlogDetails';

export const blogUserData =createContext();

const Home = () => {

const [blogData, setBlogData] = useState(null);
const [readMore, setReadMore ] = useState(false);
const [loader, setLoader] = useState(false);

    useEffect(()=>{
      fetchData();
    },[])

    const handleReadMore =()=>{
    setReadMore(prev=>!prev)
    }

    const url = "https://blog-application-qiks.onrender.com/api/v1/blog/allBlogs";

    async function fetchData(){
      const loaderTag = `<div class="loader"></div>`;
      setLoader(loaderTag);
      //fetching data from API
    fetch(url).then(resp=>resp.json())
    .then(response=>setBlogData(response));

  }
console.log("blogdata: ",blogData);
  return (
    <div>
      <div className="row">
        
          {
            blogData && 
            blogData.data.map((blog)=>{
              return (  
                
              <div className="col-lg-4 mb-3 mb-sm-0" key={blog._id}>
                <div className='card mt-5 mb-3' >
                  <figure>
                  <img src={`https://source.unsplash.com/random?${blog.topic}`} alt='blog_img' width="100%" height="200px" />
                  </figure>
                  
                  <div className='card-body text-start' style={{backgroundColor:"#ffd3b6"}}>
                    
                      <h6 className='d-inline-block text-start p-2 rounded' style={{maxWidth:"100%", backgroundColor:"#FF8C00", alignItems:'start'}}>Author : {blog.user.name}</h6><span className='text-end p-2 rounded'>{blog.createdAt}</span><br />
                      <h6 className='d-inline-block text-start p-2 rounded' style={{maxWidth:"100%", backgroundColor:"#4c9173"}}>Title : {blog.title}</h6><br />
                      <h5 className='text-end bg-secondary rounded p-2'>Topic : {blog.topic}</h5><br />
                      <p> {blog.content.slice(0,200)}</p>
                      <Link to={`/Home/${blog._id}`} onClick={handleReadMore}>Read More</Link>
                      
                  </div>
                </div>
                
           
              </div>
              
            )})
          }
          
      </div>
      <blogUserData.Provider value={blogData}>
      { readMore && <BlogDetails  />}
      </blogUserData.Provider>
    </div>
  )
}

export default Home;


// <img src={https://source.unsplash.com/random?${blog.topic}} alt="" className='image_blog'/>
// <button onClick={fetchData}>For blogs click</button>
