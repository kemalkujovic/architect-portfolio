import Modal from "./Modal";
import classes from "./ErrorModal.module.css";
const ErrorModal = ({ title, style, children, closeModal }) => {
  console.log(closeModal);
  return (
    <Modal closeModal={closeModal}>
      <div>{children}</div>
      <span className={classes.title}>{title}</span>
      <div className={classes.button} style={style} onClick={closeModal}>
        Close
      </div>
    </Modal>
  );
};

export default ErrorModal;
