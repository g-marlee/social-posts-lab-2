import './SocialPosts.css';
import { useState } from "react";
import { Post } from "../App";
import PostForm from "./PostForm";
import PostInList from "./PostInList";

export default function SocialPosts() {
    const [modalIsOpen, setModalOpen] = useState(false);
    const [postList, setPostList] = useState<Post[]>([]);

    const createNewPost = (post: Post) => {
        setPostList([post, ...postList])
        closeForm();
    }

    function closeForm() {
        setModalOpen(false);
    }

    function deletePost(id: string) {
        setPostList(postList.filter(post => post.id !== id));
    }

    return (
        <div className='posts-container'>
            <button className='new-post-button' onClick={() => setModalOpen(true)}>New Thought</button>
            <PostForm openForm={modalIsOpen} onSubmit={createNewPost} onClose={closeForm}/>
            <div className='social-post-container'>
                {postList.map(post => (
                    <PostInList key={post.id} post={post} onDelete={deletePost}/>
                ))}
            </div>

        </div>
    )

}