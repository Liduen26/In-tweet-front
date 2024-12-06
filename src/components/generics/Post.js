import { InputTextarea } from "primereact/inputtextarea";
import 'primeflex/primeflex.css';
import { Button } from "primereact/button";

export default function Post({post}) {

    const formattedDate = new Date(post.createdAt).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

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
            <div id="action-bar" className="flex justify-content-between select-none pt-2 text-600">
                <div>
                    <label className="flex gap-2 hover:text-red-500 align-items-center transition-colors transition-duration-100 cursor-pointer">
                        <i className="pi pi-heart text-sm"></i>
                        Likes {post.likes}
                    </label>
                </div>
                <div>
                    <label className="flex gap-2 hover:text-primary-500 align-items-center transition-colors transition-duration-100 cursor-pointer">
                        <i className="pi pi-reply text-sm"></i>
                        Répondre
                    </label>
                </div>
            </div>
        </div>
    );
}