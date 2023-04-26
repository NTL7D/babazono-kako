import "./tiptap.style.scss";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import TextStyle from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";
import Image from "@tiptap/extension-image";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
    CiTextAlignLeft,
    CiTextAlignRight,
    CiTextAlignCenter,
    CiTextAlignJustify,
} from "react-icons/ci";
import {
    BsTypeBold,
    BsTypeItalic,
    BsTypeUnderline,
    BsImage,
} from "react-icons/bs";
import { HiListBullet } from "react-icons/hi2";
import { useCallback, useState } from "react";
import axiosAPI from "./axios";
import CopyComponent from "./copy";

const Tiptap = () => {
    const [h1ButtonActive, setH1ButtonActive] = useState(false);
    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                heading: {
                    levels: [1, 2, 3],
                },
            }),
            TextAlign.configure({
                types: ["heading", "paragraph"],
            }),
            Underline,
            TextStyle,
            Color,
            Image,
        ],
        content: `<h1 style="text-align: center">
                    <span>Hello World from duck</span>
                </h1>
                <img src="https://pbs.twimg.com/media/Fs-oCtSaIAUFf2d?format=jpg&amp;name=large" contenteditable="false" draggable="true" class="">
                <p style="text-align: center">
                <em>source: <span style="color: inherit">@kapebeansies (Twitter)</span>
                </em>
                </p>
        `,
    });

    const addImage = useCallback(() => {
        const url = window.prompt("URL");

        if (url) {
            editor?.chain().focus().setImage({ src: url }).run();
        }
    }, [editor]);

    if (!editor) {
        return null;
    }

    const HandleH1Click = () => {
        editor.chain().focus().toggleHeading({ level: 1 }).run();
        setH1ButtonActive(!h1ButtonActive);
    };

    return (
        <div className='flex-box'>
            <div className='editor-container'>
                <CopyComponent />
                <div className='editor-buttons'>
                    <button
                        onClick={HandleH1Click}
                        aria-level={1}
                        className={`  editor-btn ${
                            editor.isActive("heading", { level: 1 })
                                ? "is-active"
                                : ""
                        }`}>
                        H1
                    </button>
                    <button
                        onClick={() =>
                            editor
                                .chain()
                                .focus()
                                .toggleHeading({ level: 2 })
                                .run()
                        }
                        aria-level={1}
                        className={`editor-btn ${
                            editor.isActive("heading", { level: 2 })
                                ? "is-active"
                                : ""
                        }`}>
                        H2
                    </button>
                    <button
                        onClick={() =>
                            editor
                                .chain()
                                .focus()
                                .toggleHeading({ level: 3 })
                                .run()
                        }
                        aria-level={1}
                        className={
                            editor.isActive("heading", { level: 3 })
                                ? "is-active"
                                : ""
                        }>
                        H3
                    </button>
                    <button
                        onClick={() =>
                            editor.chain().focus().toggleBold().run()
                        }
                        aria-level={1}
                        className={editor.isActive("bold") ? "is-active" : ""}>
                        <BsTypeBold />
                    </button>
                    <button
                        onClick={() =>
                            editor.chain().focus().toggleItalic().run()
                        }
                        aria-level={1}
                        className={
                            editor.isActive("italic") ? "is-active" : ""
                        }>
                        <BsTypeItalic />
                    </button>
                    <button
                        onClick={() =>
                            editor.chain().focus().toggleUnderline().run()
                        }
                        aria-level={1}
                        className={
                            editor.isActive("underline") ? "is-active" : ""
                        }>
                        <BsTypeUnderline />
                    </button>
                    <button
                        onClick={() =>
                            editor.chain().focus().setTextAlign("left").run()
                        }
                        aria-level={1}
                        className={
                            editor.isActive({ textAlign: "left" })
                                ? "is-active"
                                : ""
                        }>
                        <CiTextAlignLeft />
                    </button>
                    <button
                        onClick={() =>
                            editor.chain().focus().setTextAlign("center").run()
                        }
                        aria-level={1}
                        className={
                            editor.isActive({ textAlign: "center" })
                                ? "is-active"
                                : ""
                        }>
                        <CiTextAlignCenter />
                    </button>
                    <button
                        onClick={() =>
                            editor.chain().focus().setTextAlign("right").run()
                        }
                        aria-level={1}
                        className={
                            editor.isActive({ textAlign: "right" })
                                ? "is-active"
                                : ""
                        }>
                        <CiTextAlignRight />
                    </button>
                    <button
                        onClick={() =>
                            editor.chain().focus().setTextAlign("justify").run()
                        }
                        aria-level={1}
                        className={
                            editor.isActive({ textAlign: "justify" })
                                ? "is-active"
                                : ""
                        }>
                        <CiTextAlignJustify />
                    </button>
                    <button
                        onClick={() =>
                            editor.chain().focus().toggleBulletList().run()
                        }
                        aria-level={1}
                        className={
                            editor.isActive("bulletList") ? "is-active" : ""
                        }>
                        <HiListBullet />
                    </button>
                    <button aria-level={1} onClick={addImage}>
                        <BsImage />
                    </button>
                    <input
                        type='color'
                        className='color'
                        onInput={(event) =>
                            editor
                                .chain()
                                .focus()
                                .setColor(
                                    (event.target as HTMLInputElement)?.value
                                )
                                .run()
                        }
                        value={
                            editor.getAttributes("textStyle").color || "#000000"
                        }
                    />
                </div>
                <div className='editor-content'>
                    <EditorContent
                        className='editor-content-editor'
                        editor={editor}
                    />
                </div>
            </div>
        </div>
    );
};

export default Tiptap;
