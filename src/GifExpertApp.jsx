import { useState } from "react";
import { AddCategory, GifGrid } from "./components/";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Mr. robot']);

  const onAddCategory = (newCategory) => {

    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]); //forma 1 de hacer
    // setCategories(cat => [...cat, 'Valorant']) forma 2
  }

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* input */}
      <AddCategory
        // setCategories={setCategories}
        onNewCategory={onAddCategory}//event => onAddCategory(event)
      />

      {/* listado de gifs */}
        {
          categories.map((category) => ( 
            <GifGrid
              key={category} // se envia la key de forma implicita en el GifGrid
              category={category} />
          ))
        }

    </>
  )
}