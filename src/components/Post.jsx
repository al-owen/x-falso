import classes from './Post.module.css'

function Post(props){
    return (
        <div className={classes.post} >
            <h2>{props.autor}</h2>
            <p>{props.contenido}</p>
        </div>
    )
}

export default Post