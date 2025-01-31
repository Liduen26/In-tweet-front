import { Button } from 'primereact/button';
import { useState } from 'react';
import '@styles/style.scss';
import axios from 'axios';

export default function TweetModal({ visible, onClose, setRefetch }) {
    const API_BASE = process.env.API_URL;

    const [tweetContent, setTweetContent] = useState('');
    const maxCharacters = 160;

    const handleInputChange = (e) => {
        if (e.target.value.length <= maxCharacters) {
            setTweetContent(e.target.value);
        }
    };

    function closeModal() {
        setTweetContent("");
        onClose();
    }

    function sendTweet() {
        axios.post(
            API_BASE + "/post",
            { body: tweetContent },
            { headers: { "Authorization": "Bearer " + localStorage.getItem("accessToken") }}
        ).then((response) => {
            console.log(response.data);
            setRefetch(true);
            setTweetContent("");
        }).catch((err) => {
            console.error(err.response.data);
        });
        onClose();
    };

    if (!visible) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header flex justify-content-between align-items-center">
                    <h3>Écrivez votre in'Tweet</h3>
                    <Button 
                        icon="pi pi-times" 
                        className="p-button-rounded p-button-text p-button-danger"
                        aria-label="Close" 
                        onClick={closeModal} 
                    />
                </div>
                <div className="modal-body">
                    <textarea
                        rows="5"
                        className="w-full border-round p-2"
                        placeholder="Quoi de neuf ?"
                        value={tweetContent}
                        onChange={handleInputChange}
                    ></textarea>
                </div>
                <div className="modal-footer flex justify-content-between align-items-center mt-3">
                    <span className="text-sm text-gray-400">
                        Caractères restants : {maxCharacters - tweetContent.length}
                    </span>
                    <Button 
                        label="Tweeter" 
                        className="p-button-success" 
                        onClick={sendTweet}
                        disabled={tweetContent.length === 0}
                    />
                </div>
            </div>
        </div>
    );
}
