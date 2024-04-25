import MainHeader from './components/MainHeader.jsx';
import PostsList from './components/PostsList.jsx'
import { useState } from 'react'
function App(){
  const [modalIsEnabled, setModalIsEnabled] = useState(false)

  function handleShowModal(e){
    setModalIsEnabled(true)
  }
  function handleHideModal(e){
    setModalIsEnabled(false)
  }

  return(
    <>
    <MainHeader onCreatePost={handleShowModal}/>
    <main>
      <PostsList modalIsEnabled={modalIsEnabled} onStopPosting={handleHideModal}/>
    </main>
    </>
  );
}

export default App