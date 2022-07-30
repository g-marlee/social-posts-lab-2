import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import Modal from 'react-modal';
import { Post } from '../App';

interface PostFormProps {
    openForm: boolean;
    onSubmit: (Post: Post) => void;
    onClose: () => void;
}



export default function PostForm({openForm, onSubmit, onClose}: PostFormProps) {
    const [post, setPost] = useState<Post>({title: '', thought: '', id: ''})

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.name === "title") {
            return setPost({...post, id: nanoid(5), title: e.target.value})
        }
        if (e.target.name === "thought") {
            return setPost({...post, id: nanoid(5), thought: e.target.value});
        }
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
            <Modal isOpen={openForm}>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="title" placeholder='Title' value={post.title} required onChange={handleChange}/>
                    <input type="text" name='thought' placeholder='Thought' value={post.thought} required onChange={handleChange}/>
                    <button type='submit'>Post</button>
                    <button onClick={handleClose}>Close</button>
                </form>
            </Modal>
        </>

    )
}