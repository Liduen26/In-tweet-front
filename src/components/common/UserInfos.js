import axios from "axios";
import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserInfos({isAdminMode, setIsAdminMode, isBanned}) {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const adminSeverity = isAdminMode ? "success" : "";
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(
            "http://localhost:8080/user/profile",
            { headers: { "Authorization": "Bearer " + localStorage.getItem("accessToken") }}
        ).then((response) => {
            setUser(response.data);
            setLoading(false);
            isBanned(response.data.banned);
        }).catch((err) => {
            setError(err.response.data.message);
            setLoading(false);
        });
    }, []);
    
    function switchAdmin() {
        setIsAdminMode(!isAdminMode);
    }

    function signOut() {
        localStorage.clear();
        navigate("/login");
    }

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
                    <div className="flex gap-3 align-items-center">
                        <label className="font-bold text-xl">{user.username}</label>
                        <Button onClick={signOut} icon="pi pi-sign-out" rounded severity="danger" aria-label="Cancel" outlined/>
                    </div>
                    <label className="mt-4"><i className="pi pi-heart-fill text-sm"></i> total : {user.totalLikes}</label>
                    {
                        user.admin &&
                        <Button className="mt-2" label="Admin mode" severity={adminSeverity} onClick={switchAdmin} />
                    }
                </>
            }
        </div>
    );
}