import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { blogUserData } from './Home';



const BlogDetails = ({blogData}) => {

  const eachBlog = useContext(blogUserData);
  console.log("using useContext", eachBlog);

    const {blogId} = useParams();
   
console.log("props data",blogData);
const blogDetailsData =  blogData?.data.find((eachBlog)=>eachBlog.user._id == blogId);
console.log("BD",blogDetailsData);
  return (
    <div>
    <h3>Blog details</h3>
    <ul>
    <li>{blogDetailsData?.topic}</li>  
    <li>{blogDetailsData?.title}</li>
    <li>{blogDetailsData?.content}</li>
    <li>{blogDetailsData?.user.name}</li>
    </ul>

    </div>
  )
}

export default BlogDetails;

 
