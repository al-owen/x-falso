import classes from './Post.module.css'

function Post(props){
    return (  
        <div className={classes.post} >
            <h2 className={classes.author}>{props.autor}</h2>
            <p className={classes.content}>{props.contenido}</p>
        </div>
    )
}

export default Post