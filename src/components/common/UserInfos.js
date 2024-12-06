import axios from "axios";
import { useEffect, useState } from "react";

export default function UserInfos() {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        axios.get(
            "http://localhost:8080/user/profile"
        ).then((response) => {
            setUser(response.data);
            setLoading(false);
        }).catch((err) => {
            setError(err.message);
            setLoading(false);
        });
    }, []);

    return (
        <div id="user-infos" className="w-11 p-3 border-1 border-solid border-gray-500 border-round flex flex-column">
            {
                loading && 
                <span className="h-full flex flex-column justify-content-center align-items-center">
                    <i className="pi pi-spin pi-spinner text-4xl"></i>
                </span>
            }
            {
                error &&
                <p className="text-red-500">Error: {error}</p>
            }
            {
                user &&
                <>
                    <label className="font-bold text-xl">{user.username}</label>
                    <label className="mt-4"><i className="pi pi-heart-fill text-sm"></i> total : {user.totalLikes}</label>
                </>
            }
        </div>
    );
}