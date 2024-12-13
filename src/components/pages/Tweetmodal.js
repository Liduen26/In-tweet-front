import { Button } from 'primereact/button';
import { useState } from 'react';
import '@styles/style.scss';

export default function TweetModal({ visible, onClose }) {
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
                        onClick={onClose} 
                    />
                </div>
                <div className="modal-body">
                    <textarea
                        rows="5"
                        className="w-full border-round p-2"
                        placeholder="Quoi de neuf ?"
                    ></textarea>
                </div>
                <div className="modal-footer flex justify-content-end mt-3">
                    <Button label="Tweeter" className="p-button-success" onClick={onClose} />
                </div>
            </div>
        </div>
    );
}
