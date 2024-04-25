import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost(props){
    const [autor, setAutor] = useState('')
    const [contenido, setContenido] = useState('')
  
    function handleAutorChange(e){
      setAutor(e.target.value)
    }
  
    function handleContentChange(e){
      setContenido(e.target.value)
    }

    function handleSubmit(e){
      e.preventDefault()
      const postData = {
        autor: autor,
        contenido: contenido
      }
      props.onAddPost(postData)
      props.onCancel()
    }

    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <div>
                <label htmlFor="autor">Autor</label>
                <input type="text" id="autor" name="autor" placeholder="Autor" onChange={handleAutorChange}/>
            </div>
            
            <div>
                <label htmlFor="contenido">Contenido</label>
                <textarea id="contenido" name="contenido" onChange={handleContentChange}/>
            </div>
            <p className={classes.actions}>
                <button type="submit">Publicar</button>
                <button type="button" onClick={props.onCancel}>Cancelar</button>
            </p>
        </form>
    )
}

export default NewPost