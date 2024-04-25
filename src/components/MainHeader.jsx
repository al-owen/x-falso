import classes from './MainHeader.module.css'
function MainHeader(props) {
    return (
      <header className={classes.header}>
        <h1 className={classes.logo}>X-Falso</h1>
        <p>
          <button className={classes.button} onClick={props.onCreatePost}>New Post</button>
        </p>
      </header>
    );
  }
  
  export default MainHeader