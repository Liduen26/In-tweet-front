import { InputTextarea } from "primereact/inputtextarea";

export default function Post() {
    let author = "Liduen";
    let content = "Lorem Ipsum";

    return (
        <div className="post">
            <div id="author" className="text-lg font-bold ">
                {author}
            </div>
            <div id="post-content">
                {content}
            </div>
            <div id="action-bar">

            </div>
        </div>
    );
}