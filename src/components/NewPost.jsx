

function NewPost(props){
    // const [autor, setAutor] = useState('')

    return (
        <form>
            <div>
                <label htmlFor="autor">Autor</label>
                <input type="text" id="autor" name="autor" placeholder="Autor" onChange={props.changeEvent}/>
            </div>
            
            <div>
                <label htmlFor="contenido">Contenido</label>
                <textarea id="contenido" name="contenido" onChange={props.changeContentEvent}/>
            </div>
        </form>
    )
}

export default NewPost