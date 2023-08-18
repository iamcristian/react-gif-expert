import { useState } from "react"
import PropTypes from 'prop-types'

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    // setCategories(categories => [inputValue, ...categories]);//setCategories envie en el callback el parametro del useState
    onNewCategory(inputValue.trim());
    setInputValue('');
  }

  return (
    <form onSubmit={ onSubmit }> {/*resumido de: (event) => onSubmit(event)*/}
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}//version resumida de: (event) => onInputChange(event)
      />
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func
}