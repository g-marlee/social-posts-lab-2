import { faAngleDown, faAngleUp, faTrashCan, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Post } from "../App";
import './PostInList.css'

interface PostInListProps {
    post: Post;
    onDelete: (id: string) => void;
}

export default function PostInList({post, onDelete}: PostInListProps) {
    const [postCount, setPostCount] = useState(0);

    return (
        <div className="post-box">
            <div className="text-container">
                <h2>{post.title}</h2>
                <p>{post.thought}</p>
            </div>
            <div className="buttons-container">
            <button className="vote-button" onClick={() => setPostCount(prevCount => prevCount + 1)}><FontAwesomeIcon className="icon" icon={faAngleUp} size={'lg'} /></button>
            <p>{postCount}</p>
            <button className="vote-button" onClick={() => setPostCount(prevCount => prevCount - 1)}><FontAwesomeIcon className="icon" icon={faAngleDown} size={'lg'} /></button>
            <button className={"delete-button"}  onClick={() => onDelete(post.id)}><FontAwesomeIcon icon={faTrashCan} size={'lg'} /></button>
            </div>
        </div>
    )
    
}