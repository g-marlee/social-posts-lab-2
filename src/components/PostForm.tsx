import './PostForm.css';
import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import Modal from 'react-modal';
import { Post } from '../App';
import { faHome, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface PostFormProps {
    openForm: boolean;
    onSubmit: (Post: Post) => void;
    onClose: () => void;
}



export default function PostForm({openForm, onSubmit, onClose}: PostFormProps) {
    
    const [post, setPost] = useState<Post>({title: '', thought: '', id: ''})

    function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
        return setPost({...post, id: nanoid(5), title: e.target.value});
    }

    function handleThoughtChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        return setPost({...post, id: nanoid(5), thought: e.target.value});
    }

    function handleClose() {
        clearFormValues();
        onClose();
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        onSubmit(post);
        clearFormValues();
        onClose();
    }

    function clearFormValues() {
        setPost({title: '', thought: '', id: ''});
    }

    Modal.setAppElement('body');

    return (
        <>
            <Modal isOpen={openForm} className="modal">
                <form onSubmit={handleSubmit}>
                    <button onClick={handleClose} className='close-button'><FontAwesomeIcon icon={faXmarkCircle} size={'lg'} /></button>
                    <label htmlFor="title" className='label'>Title</label>
                    <input type="text" className='title-input' name="title" placeholder='Title' value={post.title} required onChange={handleTitleChange}/>
                    <label htmlFor="thought" className='label'>Thought</label>
                    <textarea className='thought-input' name='thought' placeholder='Thought' value={post.thought} required onChange={handleThoughtChange}/>
                    <button type='submit' className='post-button'>Post</button>
                </form>
            </Modal>
        </>

    )
}