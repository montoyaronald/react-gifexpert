import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

   const [inputValue, setInputValue] = useState('');

  const onInputChange = (e) => {
    setInputValue(  e.target.value );
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    if( inputValue.trim().length <= 1 ) return;
    //onAddCategory( (categories) => [...categories, inputValue] );
    onNewCategory( inputValue.trim() );
    setInputValue('');
  }

  return (
    <form onSubmit={ onFormSubmit }>
        <input
            type="text"
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
  )
}