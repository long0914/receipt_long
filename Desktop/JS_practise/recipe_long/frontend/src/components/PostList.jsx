import React, { useState } from 'react';
import styles from './PostList.module.css';
import Modal from './Modal';
import NewPost from './NewPost';
import Post from './Post';

function PostList() {
  const [showModal, setShowModal] = useState(false);
  const [posts, setPosts] = useState([]);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const onSubmitHandler = (postData) => {
    setPosts((prevPosts) => [postData, ...prevPosts]);
    closeModal();
  };

  return (
    <>
      <button className={styles.newPostButton} onClick={openModal}>New Post</button>
      {!showModal && <p>You can click the new post button to input your recipe</p>}
      <div className={styles.postList}>
        <Modal show={showModal} close={closeModal}>
          <NewPost onSubmit={onSubmitHandler} />
        </Modal>

        {posts.length === 0 && <p>No recipes yet. Be the first one to post!</p>}
    
        {posts.length > 0 && (
          posts.map((post, index) => (  
            <Post key={index} author={post.author} ingredients={post.ingredients} />
          ))
        )}
      </div>
    </>
  );
}

export default PostList;