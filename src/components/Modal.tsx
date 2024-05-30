import Modal from 'react-modal';
import './SocietyModal.css';

Modal.setAppElement('#root'); // Ensure accessibility

const SocietyModal = ({ isOpen, onRequestClose, society }) => {
  if (!society) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Society Details"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <button className="modal-close" onClick={onRequestClose}>X</button>
      <h2>{society.name}</h2>
      <p>Year: {society.year}</p>
      <p>Size: {society.size}</p>
      <p>Symbol: {society.symbol}</p>
      <a href={society.link} target="_blank" rel="noopener noreferrer">Visit Society</a>
    </Modal>
  );
};

export default SocietyModal;
