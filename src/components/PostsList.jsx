import { useState, useEffect } from 'react'
import classes from './PostsList.module.css'
import '../App.css'
import Post from './Post.jsx'
import Modal from './Modal.jsx'
import NewPost from './NewPost.jsx'

function App({modalIsEnabled, onStopPosting}) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function handleGetPost() {
      const response = await fetch('http://localhost:8080/posts')
      const data = await response.json()
      setPosts(data.posts)  
    }
    handleGetPost()
  }, [])
  
  
  
  function handleAddPost(postData) {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
    setPosts(posts => [...posts, postData])
  }

  return (
    <>
      {modalIsEnabled ? 
        <Modal onCloseModal={onStopPosting}>
          <NewPost 
          onAddPost={handleAddPost}
          onCancel={onStopPosting}/>
        </Modal>
      : null }
      <main className={classes.posts}>
        {
          posts.map((post)=>
            <Post key={post.contenido} autor={post.autor} contenido={post.contenido}/>
          )
          // <Post autor=posts contenido= />
        }
      </main>
    </>
  )
}

export default App
