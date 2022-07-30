import { Post } from "../App";

interface PostInListProps {
    post: Post;
    onDelete: (id: string) => void;
}

export default function PostInList({post, onDelete}: PostInListProps) {
    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.thought}</p>
            <button onClick={() => onDelete(post.id)}></button>
        </div>
    )
    
}