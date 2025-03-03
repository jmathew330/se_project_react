import closeButton from "../../assets/close.svg";
import "./DeleteModal.css";
function DeleteModal({ isOpen, onClose, card, onDeleteItemSubmit }) {
  const handleDeleteClick = () => {
    onDeleteItemSubmit(card._id);
  };

  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content modal__content_delete">
        <h2 className="modal__title modal__title_delete">
          Are you sure you want to delete this item?<br></br>This action is
          irreversible.
        </h2>
        <div className="modal__options">
          <button onClick={handleDeleteClick} className="modal__delete-btn">
            Yes, delete item
          </button>
          <button onClick={onClose} className="modal__cancel-btn">
            Cancel
          </button>
        </div>
        <button onClick={onClose} type="button" className="modal__close">
          <img
            src={closeButton}
            alt="modal close btn icon"
            className="modal__close-icon"
          />
        </button>
      </div>
    </div>
  );
}

export default DeleteModal;
