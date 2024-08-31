import React from 'react';
import styles from './Post.module.css';

function Post({ author, ingredients }) {
  return (
    <div className={styles.post}>
      <h2>{author}'s Recipe</h2>
      <h3>Ingredients:</h3>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient.name}: {ingredient.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Post;