import { InputTextarea } from "primereact/inputtextarea";
import 'primeflex/primeflex.css';
import { Button } from "primereact/button";

export default function Post() {
    let author = "Liduen";
    let content = "Lorem Ipsum";

    return (
        <div className="flex flex-column post p-3 border-y-1 border-x-none border-solid border-gray-500">
            <div id="author" className="text-lg font-bold ">
                {author}
            </div>
            <div id="post-content" className="p-1">
                {content}
            </div>
            <div id="action-bar" className="flex justify-content-between">
                <div>
                    <label className="flex gap-2 hover:text-red-500 align-items-center transition-colors transition-duration-100">
                        <i className="pi pi-heart text-sm"></i>
                        Liker
                    </label>
                </div>
                <div>
                    <label className="flex gap-2 hover:text-primary-500 align-items-center transition-colors transition-duration-100">
                        <i className="pi pi-reply text-sm"></i>
                        Répondre
                    </label>
                </div>
            </div>
        </div>
    );
}