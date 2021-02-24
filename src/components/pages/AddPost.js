import React, {useState ,useEffect} from 'react';
import { Button } from '../Button';
import '../../App.css';
import './AddPost.css';
import '../Button.css';

export default function AddPost() {
    
    const serverPath = 'http://localhost:5000';  

    const [imgname, setImgName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [errText, setErrText] = useState('');
    const [blogs, setBlogs] = useState([]);
    const [blogChecker, setBlogChecker] = useState(false);

      const onSubmit = (e) => {
        e.preventDefault();
            if(!imgname){
                setErrText('Please input a image name.') 
                return;
            } 
            if(!description) {
                setErrText('Please input a description.') 
                return;
            }
            if(!category) {
                setErrText('Please input a category.') 
                return;    
            }   
            addBlog(
                {
                    description: description,
                    img_name: imgname,
                    category: category
                }
            )

            setDescription('');
            setCategory('');
            setImgName('');
            setErrText('New Blog added.');
            setBlogChecker(true);
      }

      useEffect( () => {
        const getBlogs = async () => {
            const blogsFromServer = await fetchBlogs();
            setBlogs(blogsFromServer);
        }
        getBlogs();
    }, []);


    //get blog;
    const fetchBlogs = async () => {
        const res = await fetch(`${serverPath}/blogs`);
        const data = await res.json();
        return data;
    }
    


        //add Blog
  const addBlog = async(blog) => {
    const res = await fetch(`${serverPath}/blogs`, { 
      method: 'POST', 
      headers: {
          'Content-type': 'application/json'
      },
      body: JSON.stringify(blog)      
    })
     const data = await res.json();
     setBlogs([...blogs, data]);
    }

    console.log(blogs);
    return (
        <>
        <form className='add-post-form' onSubmit={onSubmit}>
            <div className="add-post-container">
                <div className="post-header">
                    Create a post
                </div>
                <div className={`post-error-area ${blogChecker ? 'post-error-area-black' : ''}`}> 
                    {errText}
                </div>
                <div className="form-control">
                    <label>Image Name:</label>
                    <input type="text" value={imgname} className="post-img_name" placeholder='Add Image Name' onChange={(e) => setImgName(e.target.value)} />                    
                </div>
                <div className="form-control">
                    <label>Description:</label>
                    <input type="text" value={description} className="post-description" placeholder='Add Description' onChange={(e) => setDescription(e.target.value)} />                    
                </div>
                <div className="form-control">
                    <label>Category: </label>
                    <input type="text" value={category}  className="post-category" placeholder='Add Category' onChange={(e) => setCategory(e.target.value)} />                    
                </div>               
                <Button className='post-btn btn-mobile' buttonStyle='btn--primary' buttonSize='btn--large' type='submit'> 
                    Create Post
                </Button>                
            </div>
        </form>        
        </>
    )
}
