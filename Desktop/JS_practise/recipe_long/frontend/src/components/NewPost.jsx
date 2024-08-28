import { useState } from 'react';
import styles from './NewPost.module.css';

function NewPost() {
  const [body, setBody] = useState('');

  function bodyChangeHandler(event) {
    setBody(event.target.value); //declare a function that sets the body state to the value of the event target // dont know what event.target.value is
  } 

  const bodyData = body;
  

  return (
    <div className={styles.newPostContainer}>
      <form className={styles.newPostForm}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea name="body" id="body" required rows={3} onChange={bodyChangeHandler}/>
        </p>
        <p>{bodyData}</p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required />
        </p>
      </form>
    </div>
  );
}

export default NewPost;