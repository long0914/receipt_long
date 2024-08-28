
import NewPost from './NewPost';
import Post from './Post';
import styles from './PostList.module.css';

function PostList(){
  return (
    <div className={styles.postList}>
      <div className={styles.newPostContainer}>
      <NewPost/>
      </div>

      <Post author="author" coauthor="coauthor"/>
      
      <Post author="author" coauthor="coauthor"/>

      <Post author="author" coauthor="coauthor"/>
      
      <Post author="author" coauthor="coauthor"/>

      <Post author="author" coauthor="coauthor"/>
      
      <Post author="author" coauthor="coauthor"/>
      <Post author="author" coauthor="coauthor"/>
      
      <Post author="author" coauthor="coauthor"/>
    </div>

  );
  
}

export default PostList;