import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './PostList.module.css';
import Modal from './Modal';
import NewPost from '../routes/NewPost';
import Post from './Post';

function PostList() {
  const [showModal, setShowModal] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const onSubmitHandler = async (postData) => {
    try {
      const response = await axios.post('http://localhost:8080/api/posts', postData);
      setPosts((prevPosts) => [response.data, ...prevPosts]);
      closeModal();
    } catch (error) {
      console.error('Error saving post:', error);
    }
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
          posts.map((post) => (  
            <Post key={post._id} author={post.author} ingredients={post.ingredients} />
          ))
        )}
      </div>
    </>
  );
}

export default PostList;