import { useState } from 'react';
import Modal from 'react-modal';

interface PostFormProps {
    openForm: boolean;
    onSubmit: () => void;
    onClose: () => void;
}

export default function PostForm({openForm, onSubmit, onClose}: PostFormProps) {
    const [modalIsOpen, setModalOpen] = useState(false);

    function openModal() {
        onSubmit();
        setModalOpen(true);
    }

    function closeModal() {
        onClose();
        setModalOpen(false);
    }


    return (
        <div>
            <Modal isOpen={openForm}>
                <form>
                    <input type="text" name="title" placeholder='Title' />
                    <input type="text" name='thought' placeholder='Thought' />
                    <button onClick={closeModal}>Close</button>
                </form>
                
            </Modal>
        </div>

    )
}