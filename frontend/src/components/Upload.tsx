import { ChangeEvent, useState, DragEvent } from "react";
import { useNavigate } from 'react-router-dom'; 
import upload from '../assets/images/upload.png';
import axios from "axios";


//npm install @google/genai

const Upload = () => {
    const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const navigate = useNavigate(); 
    const userEmail = localStorage.getItem('userEmail');

    const activeColor = "#45B2FF";

    const processFiles = (files: FileList | null, source: 'drop' | 'click') => {
        if (files && files.length > 0) {
            const file = files[0];
            console.log(`File processed via ${source}:`, file);
            setSelectedFile(file);
            setSelectedFileName(file.name);
        } else {
            console.log("no valid file list provided.");
            setSelectedFileName(null);
            setSelectedFile(null);
        }
    };

    const uploadFile = async () => {
        if(!selectedFile) {
            alert("No file selected!");
            return;
        }
        try {
            const formData = new FormData();
            formData.append("file", selectedFile);
            formData.append("email", userEmail || "");

            if(selectedFile.type === "application/pdf") {
                const response = await axios.post('http://localhost:4000/api/auth/pdf', formData, {
                    headers: {'Content-Type': 'multipart/form-data'}
                });
                console.log("PDF upload success:", response.data);
                navigate('/feed', { state: {userEmail: userEmail, userName: response.data.name} });
            } else if (selectedFile.type === 'image/jpeg' || selectedFile.type === 'image/jpg') {
                const response = await axios.post('http://localhost:4000/api/auth/image', formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
                console.log("Image upload success:", response.data);
                navigate('/feed', { state: {userEmail: userEmail, userName: response.data.name} });
            } else {
                alert("Unsupported file type. Please upload a PDF.");
                setSelectedFileName(null);
                setSelectedFile(null);
            }
        } catch (error) {
            console.error("Upload error:", error);
            setSelectedFileName(null);
            setSelectedFile(null);
        }
    };

    const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        processFiles(event.target.files, 'click'); 
    };

    const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
        setIsDragging(true);
    };

    const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
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
                 <div className="flex justify-center items-center mb-4 pointer-events-none">
                        <img src={upload} className="w-24 h-24 object-contain" alt="Upload icon" />
                 </div>

                <label className="block text-gray-500 mb-4 pointer-events-none">
                    Drag and Drop a PDF Here
                    <br />
                    or 
                    
                </label>

                <input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    onChange={handleFileInputChange}
                    accept="application/pdf"
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

                {selectedFile && (
                    <button
                        onClick = {uploadFile}
                        className={`
                        cursor-pointer inline-block
                        bg-white
                        text-[${activeColor}]
                        font-semibold
                        border-[2px]
                        border-[${activeColor}]
                        rounded-[10px]
                        mt-3
                        px-6 py-2
                        hover:bg-gray-50
                        focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[${activeColor}]
                        transition duration-150 ease-in-out
                    `}
                    >
                        Submit
                    </button>
                )}
            </div>
        </>
    );
};

export default Upload;