import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const NewPage = () => {
    const { postId } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`https://dummyjson.com/products/${postId}`);
                setPost(response.data);
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };
        fetchPost();
    }, [postId]);

    return (
        <div>
            {post && (
                <>
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <p>{post.price}</p>
                    <p>{post.category}</p>
                    <Link to={post.thumbnail}>Thumbnail Link</Link>
                </>
            )}
        </div>
    );
};

export default NewPage;

