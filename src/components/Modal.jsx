import classes from './Modal.module.css';
function Modal(props){
    return (
        <>
            <div className={classes.backdrop} onClick={props.onCloseModal}/>
            <dialog open className={classes.modal}>
                {props.children}
            </dialog>
        </>
    );
}
export default Modal;