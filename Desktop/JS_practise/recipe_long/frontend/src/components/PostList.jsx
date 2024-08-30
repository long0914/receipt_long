import React, { useState } from 'react';
import styles from './PostList.module.css';
import Modal from './Modal';
import NewPost from './NewPost';
import Post from './Post';



function PostList() {
  const [showModal, setShowModal] = useState(false);
  const [enteredName, setEnteredName] = useState('');
  const [enteredMsg, setEnteredMsg] = useState('');
  const [postList, setPostList] = useState([]);


  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const nameChangeHandler = (event) => setEnteredName(event.target.value);
  const msgChangeHandler = (event) => setEnteredMsg(event.target.value);
  const onSubmitHandler = (postData) => {
    setPostList((prevPostList) => {
      return [postData, ...prevPostList];
    });
    closeModal();
  }


  return (
    <>
    <button className={styles.newPostButton} onClick={openModal}>New Post</button>
    {!showModal&& <p> you can click new post button to input your message</p>}
    <div className={styles.postList}>

      <Modal show={showModal} close={closeModal} onContainerChange = {closeModal}>
        
          <NewPost onMsgChange={msgChangeHandler} onNameChange={nameChangeHandler} onSubmit={onSubmitHandler}/>
      </Modal>

        {postList.length === 0 && <p>No posts yet. Be the first one to post!</p>}
    
        {postList.length > 0 && (
           postList.map((post, index) => (  
            <Post key={index} author={post.name} coauthor={post.body}  />
          ))
        )}
       
    </div>
    </>
  );
}

export default PostList;