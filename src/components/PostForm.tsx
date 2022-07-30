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
            return setPost({...post, title: e.target.value})
        }
        if (e.target.name === "thought") {
            return setPost({...post, thought: e.target.value});
        }
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setPost({...post, id: nanoid(5)});
        onSubmit(post);
        clearFormValues();
        onClose();
        console.log(post)
    }

    function clearFormValues() {
        setPost({title: '', thought: '', id: ''});
    }


    return (
        <>
            <Modal isOpen={openForm}>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="title" placeholder='Title' value={post.title} onChange={handleChange}/>
                    <input type="text" name='thought' placeholder='Thought' value={post.thought} onChange={handleChange}/>
                    <button type='submit'>Post</button>
                    <button onClick={onClose}>Close</button>
                </form>
            </Modal>
        </>

    )
}