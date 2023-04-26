import React, { useState } from "react";
import { BiCopy } from "react-icons/bi";
import api from "../config/axios";
import "./copy.style.scss";
import { BsImages } from "react-icons/bs";
const CopyComponent = () => {
    const [copyText, setCopyText] = useState("");
    const [file, setFile] = useState<File | null>(null);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setCopyText(e.target.value);
    }

    const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
            const formData = new FormData();
            formData.append("image", e.target.files[0]);

            api
                .post("/images", formData)
                .then((res) => {
                    console.log(res.data);
                })
                .catch((e) => {
                    console.log(e.message);
                });
        }
    };

    async function handleClick() {
        if (copyText) {
            await navigator.clipboard.writeText(copyText);
            alert("copied");
        } else {
            alert("There's nothing to copy");
        }
    }
    return (
        <div className='editor-copy'>
            <div className='copy'>
                <input
                    className='copy-txt'
                    type='text'
                    value={copyText || " Có cái nịt"}
                    onChange={handleChange}
                    disabled
                />
                <button className='copy-btn' onClick={handleClick}>
                    <BiCopy />
                </button>
            </div>
            <div className='upload-container'>
                <label htmlFor='direct-upload' className='image-btn'>
                    <p>
                        <BsImages />
                    </p>
                    <input
                        id='direct-upload'
                        type='file'
                        style={{ display: "none" }}
                        onChange={handleImageSelect}
                        required
                    />
                </label>
            </div>
        </div>
    );
};

export default CopyComponent;
