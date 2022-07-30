import { useState } from "react";
import PostForm from "./PostForm";

export default function SocialPosts() {
    const [modalIsOpen, setModalOpen] = useState(false);

    const createNewPost = () => {

    }

    const closeForm = () => {

    }
    
    const openForm= () => {
        setModalOpen(true);
    }

    return (
        <>
            <button onClick={openForm}>New Thought</button>
            <PostForm openForm={modalIsOpen} onSubmit={createNewPost} onClose={closeForm}/>
        </>
    )

}