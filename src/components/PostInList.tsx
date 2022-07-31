import { faTrashCan, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Post } from "../App";
import './PostInList.css'

interface PostInListProps {
    post: Post;
    onDelete: (id: string) => void;
}

export default function PostInList({post, onDelete}: PostInListProps) {
    return (
        <div className="post-box">
            <div className="text-container">
                <h2>{post.title}</h2>
                <p>{post.thought}</p>
            </div>
            <button className="delete-button" onClick={() => onDelete(post.id)}><FontAwesomeIcon icon={faTrashCan} size={'lg'} /></button>
        </div>
    )
    
}