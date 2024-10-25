import React, { useState, ChangeEvent } from 'react';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react'; // Import the new emoji picker library

const Input: React.FC = () => {
    const [text, setText] = useState<string>(''); // Text input state
    const [file, setFile] = useState<File | null>(null); // File state (File type)
    const [filePreview, setFilePreview] = useState<string | null>(null); // Preview URL for images
    const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false); // Emoji picker visibility

    // Handle text input change
    const handleTextChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setText(e.target.value);
    };

    // Handle file change
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const selectedFile = e.target.files ? e.target.files[0] : null;
        if (selectedFile) {
            setFile(selectedFile);

            // If the file is an image, generate a preview URL
            if (selectedFile.type.startsWith('image/')) {
                const previewUrl = URL.createObjectURL(selectedFile);
                setFilePreview(previewUrl);
            }
        }
    };

    // Handle emoji selection
    const handleEmojiClick = (emojiData: EmojiClickData): void => {
        setText(text + emojiData.emoji); // Append selected emoji to the text
    };

    // Handle the send action (text and/or file)
    const handleSend = (): void => {
        if (!text && !file) {
            alert('Please enter text or upload a file!');
            return;
        }

        // Simulate sending data
        console.log('Message:', text);
        console.log('File:', file);

        // Reset the inputs after sending
        setText('');
        setFile(null);
        setFilePreview(null);
        setShowEmojiPicker(false);
    };

    return (
        <div className="input">
            {/* Text Input */}
            <input 
                type="text" 
                placeholder="Type something..." 
                value={text} 
                onChange={handleTextChange}
            />

            <div className="send">
                {/* Optional Preview of Uploaded Image */}
                {filePreview && (
                    <div className="file-preview">
                        <img src={filePreview} alt="Preview" width="100px" />
                    </div>
                )}

                {/* File Input */}
                <input 
                    type="file" 
                    style={{ display: "none" }} 
                    id="file" 
                    onChange={handleFileChange} 
                />
                <label htmlFor="file">
                    <img src="" alt="Upload file" />
                </label>

                {/* Emoji Picker Toggle */}
                <button type="button" onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
                    😀
                </button>

                {/* Emoji Picker */}
                {showEmojiPicker && (
                    <div style={{ position: 'absolute', zIndex: 100 }}>
                        <EmojiPicker onEmojiClick={handleEmojiClick} />
                    </div>
                )}

                {/* Send Button */}
                <button type="button" onClick={handleSend}>Send</button>
            </div>
        </div>
    );
};

export default Input;
