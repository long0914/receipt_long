import React from 'react';
import PropTypes from 'prop-types';
import styles from './Post.module.css';


function random(){
  return Math.floor(Math.random() * 5);
}

const nameList = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

function Post(props) {
  return (
    <div className={styles.post}>
      <p>{nameList[0]} {props.author}</p>
      <p>{nameList[1]} {props.coauthor}</p>
      <p>{nameList[random()]} {props.coauthor}</p>
    </div>
  );
}

Post.propTypes = {
  coauthor: PropTypes.string,
  author: PropTypes.string
};

export default Post;