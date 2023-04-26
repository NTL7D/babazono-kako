import React, { useCallback, useEffect, useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import { Editor } from "@tiptap/core";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import Color from "@tiptap/extension-color";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import { GrBold, GrItalic, GrUnderline } from "react-icons/gr";
import { BsImages, BsLink45Deg } from "react-icons/bs";
import { FiAlignCenter, FiAlignLeft, FiAlignRight } from "react-icons/fi";
import { Link as Back, useParams } from "react-router-dom";
import CopyComponent from "../../utils/copy";
import api from "../../../../config/axios";
import "./textEditor.style.scss";
import { HiListBullet } from "react-icons/hi2";

type HeadingLevel = 1 | 2 | 3;

type AlignDirection = "left" | "center" | "right";

const NewTextEditor = () => {
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const { id } = useParams();
    const editor = useEditor({
        content: content,
        extensions: [
            StarterKit.configure({
                heading: {
                    levels: [1, 2, 3],
                },
            }),
            TextAlign.configure({
                types: ["heading", "paragraph"],
                defaultAlignment: "justify",
            }),
            Image,
            TextStyle,
            Color,
            Underline,
            Link,
        ],
        onUpdate: () => {
            const json = editor?.getJSON();
            setContent(JSON.stringify(json));
        },
    });

    useEffect(() => {
        if (id) {
            api.get(`/content/${id}`)
                .then((res) => {
                    setTitle(res.data.title);
                    setContent(res.data.content);
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    }, [id]);

    const addImage = useCallback(() => {
        const url = window.prompt("URL");

        if (url) {
            (editor as Editor).chain().focus().setImage({ src: url }).run();
        }
    }, [editor]);

    const setLink = useCallback(() => {
        const previousUrl = (editor as Editor).getAttributes("link").href;
        const url = window.prompt("URL", previousUrl);
        // cancelled
        if (url === null) {
            return;
        }
        // empty
        if (url === "") {
            (editor as Editor)
                .chain()
                .focus()
                .extendMarkRange("link")
                .unsetLink()
                .run();
            return;
        }
        // update link
        (editor as Editor)
            .chain()
            .focus()
            .extendMarkRange("link")
            .setLink({ href: url })
            .run();
    }, [editor]);

    if (!editor) {
        return null;
    }
    const toggleHeadingHandler = (level: HeadingLevel) => {
        editor
            .chain()
            .focus()
            .toggleHeading({ level: level as HeadingLevel })
            .run();
    };

    const toggleAlignHandler = (align: AlignDirection) => {
        editor
            .chain()
            .focus()
            .setTextAlign(
                editor.isActive({ textAlign: align }) ? "justify" : align
            )
            .run();
    };

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const saveNews = async () => {
        if (id) {
            await api
                .put(`/content/${id}`, {
                    title: title,
                    content: content,
                })
                .then(() => {
                    console.log("Content updated");
                })
                .catch((err) => {
                    console.error(err);
                });
        } else {
            await api
                .post("/content", {
                    title: title,
                    content: content,
                })
                .then(() => {
                    console.log(`Content saved`);
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    };

    return (
        <div className='editor-container'>
            <div className='editor'>
                <div className='title-n-image'>
                    {id ? <h1>Sửa bài viết</h1> : <h1>Thêm bài viết</h1>}
                    <CopyComponent />
                </div>
                <form></form>
                <input
                    className='editor-title'
                    type='text'
                    placeholder='Thêm tiêu đề...'
                    value={title}
                    onChange={handleTitleChange}
                />
                <div className='button-container'>
                    <div className='button-wrapper'>
                        <button
                            className={`hbtn ${
                                editor.isActive("heading", { level: 1 })
                                    ? "is-active"
                                    : ""
                            }`}
                            onClick={() => toggleHeadingHandler(1)}>
                            <strong className='btn-text'>H1</strong>
                        </button>
                        <button
                            className={`hbtn ${
                                editor.isActive("heading", { level: 2 })
                                    ? "is-active"
                                    : ""
                            }`}
                            onClick={() => toggleHeadingHandler(2)}>
                            <strong className='btn-text'>H2</strong>
                        </button>
                        <button
                            className={`hbtn ${
                                editor.isActive("heading", { level: 3 })
                                    ? "is-active"
                                    : ""
                            }`}
                            onClick={() => toggleHeadingHandler(3)}>
                            <strong className='btn-text'>H3</strong>
                        </button>
                        <button
                            onClick={() => toggleAlignHandler("left")}
                            className={`hbtn ${
                                editor.isActive({ textAlign: "left" })
                                    ? "is-active"
                                    : ""
                            }`}>
                            <FiAlignLeft />
                        </button>
                        <button
                            onClick={() => toggleAlignHandler("center")}
                            className={`hbtn ${
                                editor.isActive({ textAlign: "center" })
                                    ? "is-active"
                                    : ""
                            }`}>
                            <FiAlignCenter />
                        </button>
                        <button
                            onClick={() => toggleAlignHandler("right")}
                            className={`hbtn ${
                                editor.isActive({ textAlign: "right" })
                                    ? "is-active"
                                    : ""
                            }`}>
                            <FiAlignRight />
                        </button>
                        <button
                            onClick={() =>
                                editor.chain().focus().toggleBulletList().run()
                            }
                            className={`hbtn ${
                                editor.isActive("bulletList") ? "is-active" : ""
                            }`}>
                            <HiListBullet/>
                        </button>
                        <button
                            onClick={() =>
                                editor.chain().focus().toggleBold().run()
                            }
                            className={`hbtn ${
                                editor.isActive("bold") ? "is-active" : ""
                            }`}>
                            <GrBold />
                        </button>
                        <button
                            onClick={() =>
                                editor.chain().focus().toggleItalic().run()
                            }
                            className={`hbtn ${
                                editor.isActive("italic") ? "is-active" : ""
                            }`}>
                            <GrItalic />
                        </button>
                        <button
                            onClick={() =>
                                editor.chain().focus().toggleUnderline().run()
                            }
                            className={`hbtn ${
                                editor.isActive("underline") ? "is-active" : ""
                            }`}>
                            <GrUnderline />
                        </button>
                        <button
                            onClick={setLink}
                            className={`hbtn ${
                                editor.isActive("link") ? "is-active" : ""
                            }`}>
                            <BsLink45Deg />
                        </button>

                        <button className={`hbtn`} onClick={addImage}>
                            <BsImages />
                        </button>
                        <input
                            type='color'
                            className='editor-in'
                            onInput={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) =>
                                editor
                                    .chain()
                                    .focus()
                                    .setColor(event.target.value)
                                    .run()
                            }
                            value={
                                editor.getAttributes("textStyle").color ||
                                `#000000`
                            }
                        />
                    </div>
                </div>
                <div className='editor-content'>
                    <EditorContent editor={editor} />
                </div>
            </div>
            <div className='submit'>
                <Back to='/admin/news'>
                    <button className='sbtn back-btn'>Quay lại</button>
                </Back>
                <button className='sbtn submit-btn' onSubmit={saveNews}>
                    Đăng
                </button>
            </div>
        </div>
    );
};

export default NewTextEditor;
