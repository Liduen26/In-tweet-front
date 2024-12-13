import axios from "axios";
import { Button } from "primereact/button";
import { confirmPopup, ConfirmPopup } from "primereact/confirmpopup";
import { Toast } from "primereact/toast";
import { useRef } from "react";
import { useState } from "react";

export default function Post({post, isAdminMode, refreshPosts}) {

    const formattedDate = new Date(post.createdAt).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const toast = useRef(null);
    const [isLiked, setIsLiked] = useState(false);

    const toggleLike = () => {
        setIsLiked(!isLiked);
        //ne pas oublier la requete bak
    };

    const acceptDelete = () => {
        axios.delete(
            "http://localhost:8080/post/" + post.id
        ).then(() => {
            toast.current.show({ severity: 'success', summary: 'Success', detail: 'Post deleted successfully', life: 3000 });
            
            refreshPosts();
        }).catch((err) => {
            toast.current.show({ severity: 'error', summary: 'Oh oh ..', detail: err.message, life: 3000 });
        });
        
    };
    const acceptBan = () => {
        axios.post(
            "http://localhost:8080/user/ban/" + post.user.username
        ).then(() => {
            toast.current.show({ severity: 'success', summary: 'Success', detail: post.user.username + ' has been thrown out the window !', life: 3000 });
            
            refreshPosts();
        }).catch((err) => {
            toast.current.show({ severity: 'error', summary: 'Oh oh ..', detail: err.message, life: 3000 });
        });
    };


    const confirmDeletePost = (event) => {
        confirmPopup({
            target: event.currentTarget,
            message: `Are you sure you want to delete this post?`,
            icon: 'pi pi-eraser',
            defaultFocus: 'accept',
            accept: acceptDelete
        });
    };
    const confirmBan = (event) => {
        confirmPopup({
            target: event.currentTarget,
            message: `Are you sure you want to ban the user ${post.user.username}?`,
            icon: 'pi pi-hammer',
            defaultFocus: 'accept',
            acceptClassName: 'p-button-danger',
            accept: acceptBan,
        });
    };

    return (
        <div className="flex flex-column post py-4 px-5 border-solid border-none border-bottom-1 border-gray-500">
            <div id="title-post mb-1" >
                <label className="text-lg font-bold ">
                    {post.user.username}
                </label>
                <label className="text-sm opacity-50 ml-2">
                    {formattedDate}
                </label>
            </div>
            <div id="post-content" className="p-1">
                {post.body}
            </div>
            {
                !isAdminMode && 
                <div id="action-bar" className="flex justify-content-between select-none pt-2 text-600">
                    <div>
                        {/* <label className="flex gap-2 hover:text-red-500 align-items-center transition-colors transition-duration-100 cursor-pointer">
                            <i className="pi pi-heart text-sm"></i>
                            Likes {post.likes}
                        </label> */}
                        <label 
                            className="flex gap-2 align-items-center cursor-pointer transition-colors transition-duration-100" 
                            onClick={toggleLike}>
                            <i className={`pi ${isLiked ? 'pi-heart-fill text-red-500' : 'pi-heart'} text-sm`}></i>
                            Likes {isLiked ? post.likes + 1 : post.likes}
                        </label>
                        {/* GARDER LE FONCTIONNEMENT ICI JAI FAIT EN DUR PR MONTRER LE FONCTIONNEMENT A LA PROF MAIS PAS FAIT LE BACK ENCORE */}
                    </div>
                    <div>
                        <label className="flex gap-2 hover:text-primary-500 align-items-center transition-colors transition-duration-100 cursor-pointer">
                            <i className="pi pi-reply text-sm"></i>
                            Répondre
                        </label>
                    </div>
                </div>
            }
            {
                isAdminMode &&
                <div className="mt-3 flex gap-2">
                    <Button icon="pi pi-eraser" label="Delete" severity="warning" size="small" className="px-3 py-1" onClick={confirmDeletePost}/>
                    <Button icon="pi pi-hammer" label="Ban" severity="danger" size="small" className="px-3 py-1" onClick={confirmBan}/>
                    <ConfirmPopup className="text-sm" />
                    <Toast ref={toast} />
                </div>
            }
        </div>
    );
}