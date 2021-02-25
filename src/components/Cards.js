import React, { useState, useEffect } from 'react'
import CardItem from './CardItem'
import { localBlogSource } from './BlogItem';
import './Cards.css';

function Cards(props) {
    const { heading,closeIcon } = props;

    const serverPath = 'http://localhost:5000';    
    const [blogs, setBlogs] = useState([]);   
    const [numBlogs, setNumBlogs2] = useState(0);  

    


    useEffect( () => {
        const getBlogs = async () => {
            const blogsFromServer = await fetchBlogs();
            setBlogs(blogsFromServer);    
            // if no blog capture from JSON, get from local.
            if (blogsFromServer.length === 0 ) {               
                setBlogs(localBlogSource);
            }                       
        }
        getBlogs();                 
    }, []);


    //get blog;
    const fetchBlogs = async () => {
        const res = await fetch(`${serverPath}/blogs`);
        const data = await res.json();
        return data;
    }

    //delete blog
    const DeleteBlog = async(id) => {
        await fetch(`${serverPath}/blogs/${id}`, { method : 'DELETE'});
        setBlogs( blogs.filter( (blog) => blog.id !== id) ) 
    }
    
 
    return (
        <div className='cards'>
            { blogs.length>0 ? <h1> {heading}</h1> : <h1>No recent Blogs</h1> }
           <div className="cards--container"> 
                <div className="cards--wrapper">   
                        <ul className="cards--items">
                            {
                                blogs.map( (blog) => 
                                    (                                                                                                                                                                            
                                        <CardItem 
                                        key={blog.id}
                                        src={`/images/${blog.img_name}`}
                                        text={blog.description}
                                        label={blog.category}
                                        path='/blog'
                                        numBlogs={blogs.length} 
                                        closeIcon={closeIcon}  
                                        onDelete={ DeleteBlog }  
                                        id={blog.id}                                                                
                                        />   

                                    )   
                                )
                            }                                                   
                        </ul>                     
                 </div>  
            </div>             
        </div>
    );    
}

export default Cards

{/* <div className='cards'>
<h1> {heading}</h1> 
<div className="cards--container"> 
    <div className="cards--wrapper">   
        {
            rowUnique.map( (cont,contIndex) =>
                (
                    <ul key={contIndex} className="cards--items">
                        {
                            blogs.map( (blog,intd) => 
                                (                                                                                                                                                                            
                                     [blog.ord].includes(cont) && <CardItem 
                                            key={blog.id}
                                            src={`/images/${blog.img_name}`}
                                            text={blog.text}
                                            label={blog.label}
                                            path={blog.path}
                                        />   

                                )   
                            )
                        }                                                   
                    </ul> 
                )
            )
        }
     </div>  
</div>             
</div> */}