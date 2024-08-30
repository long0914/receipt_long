//import { useState } from 'react';
import styles from './NewPost.module.css';
import { useState } from 'react';

function NewPost(props) {
  const [author, setAuthor] = useState('');
  const [coauthor, setCoauthor] = useState('');

  const authorChangeHandler = (event) => {
    setAuthor(event.target.value);
    props.onNameChange(event);
  };

  const coauthorChangeHandler = (event) => {
    setCoauthor(event.target.value);
    props.onMsgChange(event);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const postData = {
      name: event.target.name.value,
      body: event.target.body.value
    };
    props.onSubmit(postData);
  };

  return (
    <div className={styles.newPostContainer} >
      <form className={styles.newPostForm} onSubmit={onSubmitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea name="body" id="body" required rows={3} onChange={coauthorChangeHandler}/>
        </p>
        
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required onChange={authorChangeHandler}/>
        </p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewPost;