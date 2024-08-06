'use client'
import { UploadCloudIcon,CheckCircleIcon,CircleArrowDown,HammerIcon,RocketIcon,SaveIcon } from 'lucide-react';
import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

function FileUploader() {
    const onDrop = useCallback((files: File[]) => {
        console.log(files);
    }, [])
    const { getRootProps, getInputProps, isDragActive, isFocused,isDragAccept } = useDropzone({ onDrop })

    return (
        <div className="flex flex-col gap-4 items-center max-w-7xl mx-auto">

            <div {...getRootProps()} className={`rounded-xl h-96 p-10 border-indigo-600 text-indigo-600 border-2  mt-10 w-[90%] flex items-center justify-center flex-col ${isFocused || isDragAccept ? "bg-indigo-300 border-2":"bg-indigo-100 border-dashed" }`}>
 
                <input {...getInputProps()} />
                {
                    isDragActive ?
                    <>
                        <RocketIcon className='h-20 w-20 animate-ping'/>
                        <p>Drop the files here ...</p> 
                    </>:<>
                        <CircleArrowDown className='h-20 w-20 animate-bounce'/>
                        <p className='text-center'>Drag n drop some files here, or click to select files</p>
                        </>
                }
            </div>
        </div>
    )
}

export default FileUploader;
