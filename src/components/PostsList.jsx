import { useState } from 'react'
import classes from './PostsList.module.css'
import '../App.css'
import Post from './Post.jsx'
import Modal from './Modal.jsx'
import NewPost from './NewPost.jsx'

function App({modalIsEnabled, onStopPosting}) {
  const [posts, setPosts] = useState([])

  function handleAddPost(postData) {
    posts.push(postData)
    setPosts(posts)
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
