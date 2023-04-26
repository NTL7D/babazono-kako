import React, { useCallback, useState } from "react";
import { Editor, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Underline } from "@tiptap/extension-underline";
import { Image } from "@tiptap/extension-image";
import { Color } from "@tiptap/extension-color";
import { TextAlign } from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import {
    FiAlignLeft,
    FiAlignRight,
    FiAlignCenter,
    FiAlignJustify,
    FiBold,
    FiItalic,
    FiUnderline,
} from "react-icons/fi";
import "./test.scss";
import CopyComponent from "./copy";
import { BsImages } from "react-icons/bs";
import axios from "axios";
import { useParams } from "react-router-dom";

type HeadingLevel = 1 | 2 | 3;

type AlignDirection = "left" | "center" | "right" | "justify";

type TextStyle = {
    color?: string;
    textAlign?: AlignDirection;
};

const EditorComponent: React.FC<{}> = () => {
    //params
    const { contentid } = useParams();
    //useState
    const [isActive, setIsActive] = useState(false);
    const [jsonData, setJsonData] = useState("");
    const [htmlData, setHtmlData] = useState("");

    //tiptap extensions
    const editor = useEditor({
        content: jsonData,
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
        onUpdate: ({ editor }) => {
            setJsonData(JSON.stringify(editor.getJSON()));
            setHtmlData(editor.getHTML());
        },
    });
    //submit handler
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const res1 = await axios.get(`api/content/${contentid}`);
            if (res1) {
            } else {
                const res2 = await axios.post(`api/content`);
                console.log(res2.data);
            }
        } catch (err) {
            console.log(err);
        }
    };

    //button handlers
    const handleHeadingClick = (level: HeadingLevel, editor: Editor) => {
        const currentAlign = editor.getAttributes("textStyle").textAlign;
        editor
            .chain()
            .focus()
            .toggleHeading({ level: level as HeadingLevel })
            .setTextAlign(currentAlign)
            .run();

        setIsActive(!isActive);
    };

    const handleAlignClick = (align: AlignDirection, editor: Editor) => {
        editor
            .chain()
            .focus()
            .setTextAlign(align as AlignDirection)
            .run();
        setIsActive(!isActive);
    };

    const handleBoldClick = (editor: Editor) => {
        editor.chain().focus().toggleBold().run();
        setIsActive(!isActive);
    };

    const handleItalicClick = (editor: Editor) => {
        editor.chain().focus().toggleItalic().run();
        setIsActive(!isActive);
    };

    const handleUnderlineClick = (editor: Editor) => {
        editor.chain().focus().toggleUnderline().run();
        setIsActive(!isActive);
    };

    //image handler
    const addImage = useCallback(() => {
        const url = window.prompt("URL");

        if (url) {
            (editor as Editor).chain().focus().setImage({ src: url }).run();
            setIsActive(!isActive);
        }
    }, [editor]);

    //check if style is exist
    if (!editor) {
        return null;
    }

    return (
        <div className='content-container'>
            <div className='content-wrapper'>
                <CopyComponent />
                <div className='content-buttons'>
                    {/* text heading buttons */}
                    {/* //text-align buttons */}
                    <button
                        className={`editor-btn ${isActive ? "active" : ""}`}
                        onClick={() => handleHeadingClick(1, editor)}>
                        <strong className='btn-text'>H1</strong>
                    </button>
                    <button
                        className={`editor-btn ${isActive ? "active" : ""}`}
                        onClick={() => handleHeadingClick(2, editor)}>
                        <strong className='btn-text'>H2</strong>
                    </button>
                    <button
                        className={`editor-btn ${isActive ? "active" : ""}`}
                        onClick={() => handleHeadingClick(3, editor)}>
                        <strong className='btn-text'>H3</strong>
                    </button>
                    <button
                        className={`editor-btn ${isActive ? "active" : ""}`}
                        onClick={() => handleAlignClick("left", editor)}>
                        <FiAlignLeft className='btn-text' />
                    </button>
                    <button
                        className={`editor-btn ${isActive ? "active" : ""}`}
                        onClick={() => handleAlignClick("center", editor)}>
                        <FiAlignCenter className='btn-text' />
                    </button>
                    <button
                        className={`editor-btn ${isActive ? "active" : ""}`}
                        onClick={() => handleAlignClick("right", editor)}>
                        <FiAlignRight className='btn-text' />
                    </button>
                    <button
                        className={`editor-btn ${isActive ? "active" : ""}`}
                        onClick={() => handleAlignClick("justify", editor)}>
                        <FiAlignJustify className='btn-text' />
                    </button>
                    {/* //font styling buttons */}
                    <button
                        className={`editor-btn ${isActive ? "active" : ""}`}
                        onClick={() => handleBoldClick(editor)}>
                        <FiBold className='btn-text' />
                    </button>
                    <button
                        className={`editor-btn ${isActive ? "active" : ""}`}
                        onClick={() => handleItalicClick(editor)}>
                        <FiItalic className='btn-text' />
                    </button>
                    <button
                        className={`editor-btn ${isActive ? "active" : ""}`}
                        onClick={() => handleUnderlineClick(editor)}>
                        <FiUnderline className='btn-text' />
                    </button>
                    {/* //etc */}
                    <button
                        className={`editor-btn ${isActive ? "active" : ""}`}
                        onClick={addImage}>
                        <BsImages className='btn-text' />
                    </button>
                    <input
                        type='color'
                        className='editor-in'
                        onInput={(event: React.ChangeEvent<HTMLInputElement>) =>
                            editor
                                .chain()
                                .focus()
                                .setColor(event.target.value)
                                .run()
                        }
                        value={
                            editor.getAttributes("textStyle").color || `#000000`
                        }
                    />
                </div>
                <div className='content-editor'>
                    {/*content editor */}
                    <EditorContent className='editor' editor={editor} />
                </div>
                <form className='submit-form' onSubmit={handleSubmit}>
                    <button className='submit-button' type='submit'>
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
};
export default EditorComponent;
