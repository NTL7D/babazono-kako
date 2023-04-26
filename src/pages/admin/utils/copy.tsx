import React, { useState } from "react";
import "./copy.style.scss";
import { BiCopy } from "react-icons/bi";
import { BsImages } from "react-icons/bs";
import axios from "axios";

const CopyComponent = () => {
    const [copy, setCopy] = useState<string>("");
    const [file, setFile] = useState<File | null>(null);

    function handleCopyChange(event: React.ChangeEvent<HTMLInputElement>) {
        setCopy(event.target.value);
    }

    async function handleCopyClick() {
        if (copy) {
            await navigator.clipboard.writeText(copy);
        } else {
            alert("There are nothing to copy");
        }
    }

    function handleUploadImage(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files) {
            setFile(e.target.files[0]);
            const formData = new FormData();
            formData.append("image", e.target.files[0]);
            axios
                .post("/v1/image/upload-image", formData)
                .then((res) => {
                    setCopy(res.data.uri);
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    }
    return (
        <div className='copy-container'>
            <div className='copy-wrapper'>
                <div className='copy-text'>
                    <input
                        className='copy-same copy-input'
                        type='text'
                        value={copy || "idle"}
                        onChange={handleCopyChange}
                        disabled
                    />
                    <button
                        className='copy-same copy-btn'
                        onClick={handleCopyClick}>
                        <BiCopy />
                    </button>
                </div>
                <label className='upload-image' htmlFor='direct-upload'>
                    <BsImages />
                    <input
                        id='direct-upload'
                        type='file'
                        style={{ display: "none" }}
                        onChange={handleUploadImage}
                    />
                </label>
            </div>
        </div>
    );
};

export default CopyComponent;
