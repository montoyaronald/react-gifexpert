import { useState } from "react";
import { AddCategory, GifGrid } from './components';

const GifExpertApp = () => {

  const [ categories, setCategories ] = useState([ 'One Punch' ]);

  const onAddCategory = ( newCategory ) => {
    // Validamos
    if(categories.includes(newCategory)) return;
    //setCategories( (categories) => ( [...categories, 'd'] ) );
    //console.log(newCategory)
    setCategories( (categories) => [newCategory, ...categories] );
  }

  return (
    <>
      {/* API KEY: pVUriuD5l0hPwG9O6fuisz2YF8VAaeW9 */}
      {/* Titulo */}
       <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory
        //onAddCategory = { setCategories }
        //onNewCategory = { onAddCategory }

        onNewCategory = { onAddCategory }
      />

      {/* Listado de Gif */}
    
      {
        categories.map( category =>
        <GifGrid key={ category } category={ category } />
        )
      }

      {/* Gif Item */}

    </>
  )
}

export default GifExpertApp;