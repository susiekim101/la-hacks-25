import React, { ChangeEvent, useState, DragEvent } from "react";
import { useNavigate } from 'react-router-dom'; // <-- Import useNavigate
import upload from '../assets/images/upload.png';
// import axios from "axios";

const Upload = () => {
    const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const navigate = useNavigate(); // <-- Initialize useNavigate hook

    // Define the custom color for reuse
    const activeColor = "#45B2FF";

    // --- Helper function to process files ---
    // Added 'source' parameter to know if it came from 'drop' or 'click'
    const processFiles = (files: FileList | null, source: 'drop' | 'click') => {
        if (files && files.length > 0) {
            const file = files[0];
            console.log(`File processed via ${source}:`, file);
            setSelectedFileName(file.name);

            // ----> ADD YOUR ACTUAL UPLOAD LOGIC HERE <----
            // Ideally, you would navigate *after* a successful upload response from the server.
            // For now, we navigate immediately after local processing if the source is 'drop'.
            // Example (replace with your actual async upload):
            // const uploadFile = async () => {
            //   try {
            //     const formData = new FormData();
            //     formData.append("file", file);
            //     // const response = await axios.post("/api/upload", formData);
            //     // console.log("Upload success:", response);
            //     // if (source === 'drop') { // Navigate after successful UPLOAD from drop
            //     //   navigate('/confirm-matching');
            //     // }
            //   } catch (error) {
            //     console.error("Upload error:", error);
            //     // Handle upload error (e.g., show message)
            //     setSelectedFileName(null); // Clear selection on error maybe?
            //   }
            // };
            // uploadFile(); // Call the async upload function
            // ----------------------------------------------


            // ----> Conditional Navigation <----
            // Navigate immediately if the source was 'drop'
            if (source === 'drop') {
                 // Optional but recommended: Check if it's actually an image file type
                 if (file.type.startsWith('image/')) {
                    console.log("Navigating to /confirm-matching after image drop...");
                    navigate('/confirm-matching'); // <-- Navigate here
                 } else {
                    console.warn("Dropped file is not an image. Upload processed, but not navigating automatically.");
                    // Handle non-image drop scenario if needed (e.g., show a message)
                 }
            }

        } else {
            console.log("No valid file list provided.");
            setSelectedFileName(null);
        }
    };

    // --- Event Handlers ---

    const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        processFiles(event.target.files, 'click'); // <-- Pass 'click' as source
    };

    const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
        setIsDragging(true);
    };

    const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
        // Check if the leave is going outside the component bounds
         if (!event.currentTarget.contains(event.relatedTarget as Node)) {
            setIsDragging(false);
         }
    };

    const handleDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
        setIsDragging(false);

        const files = event.dataTransfer.files;
        processFiles(files, 'drop'); // <-- Pass 'drop' as source
    };

    return (
        <>
            {/* Outer container - Drop zone */}
            <div
                className={`
                    bg-white p-8 rounded-3xl shadow-lg w-96 sm:w-96 text-center
                    border border-gray-400
                    transition-all duration-200 ease-in-out /* Use transition-all */
                    ${isDragging ? `border-solid border-[${activeColor}] border-2 scale-105 bg-blue-50` : 'border-gray-400 scale-100 bg-white'} /* Example: Added scale/bg change */
                `}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                style={isDragging ? { borderColor: activeColor } : {}}
            >
                 {/* Content inside the drop zone */}
                 <div className="flex justify-center items-center mb-4 pointer-events-none">
                        <img src={upload} className="w-24 h-24 object-contain" alt="Upload icon" />
                 </div>

                <label className="block text-gray-500 mb-4 pointer-events-none">
                    Drag and Drop an Image Here
                    <br />
                    or 
                    
                </label>

                <input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    onChange={handleFileInputChange}
                     accept="image/*" // <-- Good practice to only accept images if navigating based on image drop
                />

                <label
                    htmlFor="file-upload"
                    className={`
                        cursor-pointer inline-block
                        bg-white
                        text-[${activeColor}]
                        font-semibold
                        border-[2px]
                        border-[${activeColor}]
                        rounded-[10px]
                        px-6 py-2
                        hover:bg-gray-50
                        focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[${activeColor}]
                        transition duration-150 ease-in-out
                    `}
                    style={{ borderColor: activeColor, color: activeColor }}
                >
                    Upload File
                </label>

                {selectedFileName && (
                    <div className="mt-4 text-sm text-gray-600">
                        Selected: {selectedFileName}
                    </div>
                )}
            </div>
        </>
    );
};

export default Upload;