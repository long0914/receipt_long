import React, { useState } from 'react';
import styles from './NewPost.module.css';

function NewPost(props) {
  const [author, setAuthor] = useState('');
  const [ingredients, setIngredients] = useState([{ name: '', amount: '' }]);

  const authorChangeHandler = (event) => {
    setAuthor(event.target.value);
  };

  const ingredientChangeHandler = (index, field, value) => {
    const newIngredients = ingredients.map((ingredient, i) => {
      if (i === index) {
        return { ...ingredient, [field]: value };
      }
      return ingredient;
    });
    setIngredients(newIngredients);
  };

  const addIngredientHandler = () => {
    setIngredients([...ingredients, { name: '', amount: '' }]);
  };

  const removeIngredientHandler = (index) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const postData = {
      author,
      ingredients: ingredients.filter(ing => ing.name && ing.amount)
    };
    props.onSubmit(postData);
  };

  return (
    <div className={styles.newPostContainer}>
      <form className={styles.newPostForm} onSubmit={onSubmitHandler}>
        <p>
          <label htmlFor="author">Your name</label>
          <input 
            type="text" 
            id="author" 
            required 
            value={author} 
            onChange={authorChangeHandler} 
          />
        </p>
        {ingredients.map((ingredient, index) => (
          <div key={index} className={styles.ingredientInputs}>
            <input
              type="text"
              placeholder="Ingredient name"
              value={ingredient.name}
              onChange={(e) => ingredientChangeHandler(index, 'name', e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Amount"
              value={ingredient.amount}
              onChange={(e) => ingredientChangeHandler(index, 'amount', e.target.value)}
              required
            />
            <button type="button" onClick={() => removeIngredientHandler(index)}>Remove</button>
          </div>
        ))}
        <button type="button" onClick={addIngredientHandler}>Add Ingredient</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewPost;