import Post from "@generics/Post";
import axios from "axios";
import { useEffect, useState } from "react";

export default function PostsColumn({isAdminMode, refetch, setRefetch}) {

    const API_BASE = process.env.API_URL;

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (refetch) {
            getPostList();
        }
    }, [refetch]);
    
    const getPostList = () => {
        axios.get(API_BASE + "/post", { headers: { "Authorization": "Bearer " + localStorage.getItem("accessToken") }})
        .then((response) => {
            setPosts(response.data);
            setLoading(false);
            setRefetch(false);
        }).catch((err) => {
            setError(err.response.data.message);
            setLoading(false);
            setRefetch(false);
        });
    }

    if (loading) return (
        <span className="h-full flex flex-column justify-content-center align-items-center">
            <i className="pi pi-spin pi-spinner text-4xl"></i>
        </span>
    );
    if (error) return <p className="text-red-500">Error: {error}</p>;

    return (
        <>
            { posts.map((post, index) => (
                <Post key={index} post={post} isAdminMode={isAdminMode} refreshPosts={getPostList}/>
            )) }
        </>
    );
}