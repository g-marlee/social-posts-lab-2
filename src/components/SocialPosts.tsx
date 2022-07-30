import { useState } from "react";
import { Post } from "../App";
import PostForm from "./PostForm";
import PostInList from "./PostInList";

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

    function deletePost(id: string) {
        setPostList(postList.filter(post => post.id !== id));
    }

    return (
        <>
            <button onClick={() => setModalOpen(true)}>New Thought</button>
            <PostForm openForm={modalIsOpen} onSubmit={createNewPost} onClose={closeForm}/>
            <div>
                {postList.map(post => (
                    <PostInList key={post.id} post={post} onDelete={deletePost}/>
                ))}
            </div>

        </>
    )

}