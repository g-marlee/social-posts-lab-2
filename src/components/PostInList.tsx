import { Post } from "../App";
import './PostInList.css'

interface PostInListProps {
    post: Post;
    onDelete: (id: string) => void;
}

export default function PostInList({post, onDelete}: PostInListProps) {
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.thought}</p>
            <button onClick={() => onDelete(post.id)}>Delete</button>
        </div>
    )
    
}