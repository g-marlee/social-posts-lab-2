import { useState } from "react";
import { Post } from "../App";
import PostForm from "./PostForm";

export default function SocialPosts() {
    const [modalIsOpen, setModalOpen] = useState(false);
    const [postList, setPostList] = useState<Post[]>([]);

    const createNewPost = (post: Post) => {
        setPostList([post, ...postList])
        setModalOpen(false);
    }

    function closeForm() {
        setModalOpen(false);
    }

    return (
        <>
            <button onClick={() => setModalOpen(true)}>New Thought</button>
            <PostForm openForm={modalIsOpen} onSubmit={createNewPost} onClose={closeForm}/>
        </>
    )

}