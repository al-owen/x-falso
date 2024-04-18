import { useState } from 'react'
import Post from './components/Post.jsx'
import './App.css'
import NewPost from './components/NewPost.jsx'

function App() {
  const [autor, setAutor] = useState('')
  const [contenido, setContenido] = useState('')

  function handleAutorChange(e){
    setAutor(e.target.value)
  }

  function handleContentChange(e){
    setContenido(e.target.value)
  }


  return (
    <>
      <NewPost changeEvent={handleAutorChange} changeContentEvent={handleContentChange}/>
      <Post autor={autor} contenido={contenido}/>
      <Post autor="Alvaro" contenido="Hola Mundo 2" />
    </>
  )
}

export default App
