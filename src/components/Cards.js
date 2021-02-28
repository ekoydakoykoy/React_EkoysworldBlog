import React, { useState, useEffect } from 'react'
import CardItem from './CardItem'
import { localBlogSource } from './BlogItem';
import './Cards.css';
import Pagination from './Pagination';

function Cards(props) {
    const { heading, closeIcon, numOfPageToShow  } = props;

    const serverPath = 'http://localhost:5000';    
    const [blogs, setBlogs] = useState([]);   
    // const [numBlogs, setNumBlogs2] = useState(0);  
    const [offlineBlogSource, setOfflineBlogSource] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(numOfPageToShow);

    useEffect( () => {
        const getBlogs = async () => {

            // initially set to local from JSON, get from local.
            setBlogs(localBlogSource);
      
            try {
                const blogsFromServer = await fetchBlogs();
                if (blogsFromServer.length > 0 ) {         
                    setBlogs([]);
                    setBlogs(blogsFromServer);                     
                } 
            } catch(e)  {
                setOfflineBlogSource(true);                                
            }
                                                                               
        }
        getBlogs();           
                      
    }, []);

    
    //get blog;
    const fetchBlogs = async () => {        
        try{
            const res = await fetch(`${serverPath}/blogs`);
            const data = await res.json();
             return data;
        }catch {
            console.error('nothing to fetch');
        }    
    }

    //delete blog
    const DeleteBlog = async(id) => {
        try{
            await fetch(`${serverPath}/blogs/${id}`, { method : 'DELETE'});
            setBlogs( blogs.filter( (blog) => blog.id !== id) ) 
        }catch {
            console.error('nothing to delete');
        }
    }

    //show numberof items in the show cards ;
    const indexOfLastBlog = currentPage * postPerPage;
    const indexOfFirstBlog = indexOfLastBlog - postPerPage;
    const currentPosts = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
    
    //paginate function 
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
 
    return (
        <div className='cards'>
            { blogs.length>0 ? <h1> {heading}</h1> : <h1>No recent Blogs</h1> }
           <div className="cards--container"> 
                <div className="cards--wrapper">   
                        <ul className="cards--items">
                            {
                                currentPosts.map( (blog) => 
                                    (                                                                                                                                                                            
                                        <CardItem 
                                        key={blog.id}
                                        src={`/images/${blog.img_name}`}
                                        text={blog.description}
                                        label={blog.category}
                                        path='/blog'
                                        numBlogs={currentPosts.length} 
                                        closeIcon={closeIcon}  
                                        onDelete={ DeleteBlog }  
                                        id={blog.id}  
                                        offlineBlogSource = {offlineBlogSource}                                                                                                  
                                        />   

                                    )   
                                )
                            }                                                   
                        </ul>   

                 </div> 
                 { closeIcon && <Pagination postPerPage={postPerPage} totalBlogs={blogs.length} paginate={paginate} currentPage={currentPage}/> }      
            </div>             
        </div>
    );    
}

export default Cards