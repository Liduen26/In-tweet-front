import Post from "@generics/Post";
import axios from "axios";
import { useEffect, useState } from "react";

export default function PostsColumn() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(
            "http://localhost:8080/post"
        ).then((response) => {
            setPosts(response.data);
            setLoading(false);
        }).catch((err) => {
            setError(err.message);
            setLoading(false);
        });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            { posts.map((post, index) => (
                <Post key={index} post={post}/>
            )) }
        </>
    );
}