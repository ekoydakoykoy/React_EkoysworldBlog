import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CardItem.css';
import { Button } from './Button';

import { useDispatch, useSelector } from 'react-redux';
import { changePage } from './redux/ducks/CurrentPage';

function CardItem(props) {                                                               
    const {id, src, text, label, path, numBlogs,closeIcon, onDelete} = props;
    
    const [dblclick, setDblClick] = useState(false);
    const [newDescription, setNewDescription] = useState('');
    const [errorNewDescription, setErrorNewDescription] = useState('');
    const [finalDescription, setFinalDescription] = useState(text);

    const serverPath = 'http://localhost:5000'; 
    
    useEffect(() => {
        setErrorNewDescription('');
        setNewDescription('');
    }, [dblclick])


    const getNewText = (e) =>{
        e.preventDefault();
        
        if(!newDescription){
            setErrorNewDescription('Please input a new description.') 
            return;
        } 
        setFinalDescription(newDescription);
        editDescription(id,newDescription);
        setNewDescription('');
        setDblClick(false);        
        
     }     

     //get the 1 blogs
     const fetchBlog = async(id) => {
         try {
            const res = await fetch(`${serverPath}/blogs/${id}`);
            const data = await res.json(); 
            return data;
         } catch {
                console.error('error sa pag fetch 1');
         }

     }
     
    // //get all blog;
    // const fetchBlogs = async () => {
    //     const res = await fetch(`${serverPath}/blogs`);
    //     const data = await res.json();
    //     return data;
    // }

     const editDescription = async(id, desc) => {
        try {
            const allBlog = await fetchBlog(id);
            const updateBlog ={ ...allBlog, description: desc }
            const res = await fetch(`${serverPath}/blogs/${id}`, {
                method: 'PUT',
                headers: {
                  'Content-type': 'application/json'
                },
                body: JSON.stringify(updateBlog)
               })   
        } catch {
            console.error('error sa page update');
        }
 
     }
     
        //redux call function
        const dispatch = useDispatch();
        const handleChangePage = (id) => {        
            dispatch(changePage(id));
        }

       // console.log(currentPage);

    return (
        <>
            <li className={`cards--item  ${numBlogs >= 3 ? 'cards3' : `cards${numBlogs}`}`} >            
                     { closeIcon && <div className="cards--item--del" onClick={() =>  onDelete(id) }>
                        <i className="fas fa-times-circle"></i>
                    </div> }
                    <Link className={`cards--item--link`}  to={path} onClick={() => handleChangePage(id / 2)}>
                        <figure className={`cards--item--pic-wrap`} data-category={label} >
                            <img src={src} alt="Travel Image" className={`cards--item--img`}/>
                        </figure>   
                        <div onDoubleClick={() => {  setDblClick(!dblclick); }} className="cards--item--info">
                            <h5 className="cards--item--text">{finalDescription}</h5> 
  
                    </div>                                   
                    </Link>   
                  
                            <div className={`cards-edit-container `}>   
                            { closeIcon && dblclick && (      
                                    <form className='cards-edit-form' onSubmit={getNewText}>  
                                      <div className="cards-edit-error"> {errorNewDescription}</div>                                                                                                  
                                        <textarea 
                                        onChange={(e) => setNewDescription(e.target.value)} 
                                        value={newDescription} name="cards-text-edit" 
                                        className="cards-text-edit" cols="" rows="" 
                                        placeholder='Add new description' />                                             
                                        <Button type='submit' buttonStyle='btn--outline'> Edit Post</Button>          
                                    </form>   
                             )}                       
                            </div>                                
                            
                                   
            </li>
        </>
    )
}

export default CardItem
