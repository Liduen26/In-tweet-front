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

    if (loading) return (
        <span className="h-full flex flex-column justify-content-center align-items-center">
            <i className="pi pi-spin pi-spinner text-4xl"></i>
        </span>
    );
    if (error) return <p className="text-red-500">Error: {error}</p>;

    return (
        <>
            { posts.map((post, index) => (
                <Post key={index} post={post}/>
            )) }
        </>
    );
}