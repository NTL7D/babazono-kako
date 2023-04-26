import React, { useCallback, useEffect, useState } from "react";
import api from "../../../../config/axios";
import "./new.style.scss";
import CopyComponent from "../../utils/copy";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import Color from "@tiptap/extension-color";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import { useParams, Link as Back } from "react-router-dom";
import Select, { ActionMeta, MultiValue } from "react-select";
import makeAnimated from "react-select/animated";
import { Editor } from "@tiptap/core";
import { FiAlignCenter, FiAlignLeft, FiAlignRight } from "react-icons/fi";
import { BsLink45Deg, BsImages } from "react-icons/bs";
import { GrBold, GrItalic, GrUnderline } from "react-icons/gr";
import { HiListBullet } from "react-icons/hi2";

//react-selection
import {
    Option,
    CategoryOption,
    ExperienceOption,
    SkillOption,
    PositionOption,
    LocationOption,
} from "../option";

type HeadingLevel = 1 | 2 | 3;
type AlignDirection = "left" | "center" | "right";

interface Options {
    id: number;
    name: string;
}
const animatedComponents = makeAnimated();

const CreateJobForm: React.FC = () => {
    const [title, setTitle] = useState<string>("");
    const [image, setImage] = useState<string>("");
    const [date, setDate] = useState<Date | null>(null);
    const [minimum, setMinimum] = useState<number>(0);
    const [maximum, setMaximum] = useState<number>(0);
    const [content, setContent] = useState<string>("");
    const [category, setCategory] = useState<MultiValue<Option>>([]);
    const [experience, setExperience] = useState<Option | null>(null);
    const [skill, setSkill] = useState<MultiValue<Option>>([]);
    const [position, setPosition] = useState<MultiValue<Option>>([]);
    const [location, setLocation] = useState<MultiValue<Option>>([]);

    const { id } = useParams();

    useEffect(() => {
        if (id) {
            api.get("/contents")
                .then((res) => {
                    console.log("andrew");
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    }, [id]);
    
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
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setImage(e.target.value);
    };
    const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDate(new Date(e.target.value));
    };
    const handleMinimalWageChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value = parseInt(e.target.value);
        setMinimum(value);
    };

    const handleMaximumWageChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value = parseInt(e.target.value);
        setMaximum(value);
    };

    const handleCategorySelect = (
        option: MultiValue<Option>,
        actionMeta: ActionMeta<Option>
    ) => {
        setCategory(option);
    };

    const handleExperienceSelect = (option: Option | null) => {
        setExperience(option);
    };

    const handleSkillSelect = (
        option: MultiValue<Option>,
        actionMeta: ActionMeta<Option>
    ) => {
        setSkill(option);
    };

    const handlePositionsSelect = (
        option: MultiValue<Option>,
        actionMeta: ActionMeta<Option>
    ) => {
        setPosition(option);
    };

    const handleLocationsSelect = (
        option: MultiValue<Option>,
        actionMeta: ActionMeta<Option>
    ) => {
        setLocation(option);
    };

    const saveJob = async () => {
        if (id) {
            await api
                .put(`/jobs/content/${id}`)
                .then(() => {
                    console.log("Update successful");
                })
                .catch((err) => {
                    console.error(err);
                });
        } else {
            api.post("/jobs/content")
                .then(() => {
                    console.log("Created successful");
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    };

    return (
        <div className='job-container'>
            <div className='job-wrapper'>
                <div className='title-image'>
                    {id ? <h1>Sửa bài viết</h1> : <h1>Thêm bài viết</h1>}
                    <CopyComponent />
                </div>
                <div className='job-application'>
                    <div className='job-tag'>
                        <div className='temp-label'>
                            <h3>Danh mục:</h3>
                        </div>
                        <Select
                            options={CategoryOption}
                            value={category}
                            onChange={handleCategorySelect}
                            isMulti
                        />
                    </div>
                    <div className='temp-label'>
                        <h3>Tiêu đề:</h3>
                    </div>
                    <input
                        id='title'
                        type='text'
                        placeholder='Thêm tiêu đề...'
                        value={title}
                        onChange={handleTitleChange}
                    />
                    <div className='temp-label'>
                        <h3>URL hình ảnh:</h3>
                    </div>
                    <input
                        id='image'
                        type='text'
                        placeholder='chèn link ảnh vào đây...'
                        value={image}
                        onChange={handleImageChange}
                    />
                    <div className='temp-label'>
                        <h3>Hạn ứng tuyển:</h3>
                    </div>
                    <input
                        id='date'
                        type='date'
                        value={date?.toISOString().split("T")[0]}
                        onChange={handleTimeChange}
                    />
                    <div className='info'>
                        <div className='info-container'>
                            <div className='info-wage'>
                                <div className='temp-label'>
                                    <h3>Mức lương:</h3>
                                    <div className='info-wage-input'>
                                        <input
                                            type='number'
                                            className='min-wage'
                                            value={minimum}
                                            onChange={handleMinimalWageChange}
                                        />
                                        <span>-</span>
                                        <input
                                            type='number'
                                            className='max-wage'
                                            value={maximum}
                                            onChange={handleMaximumWageChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='info-exp'>
                                <div className='temp-label'>
                                    <h3>Kinh nghiệm:</h3>
                                </div>
                                <Select
                                    options={ExperienceOption}
                                    value={experience}
                                    onChange={handleExperienceSelect}
                                />
                            </div>
                            <div className='info-skill'>
                                <div className='temp-label'>
                                    <h3>Kỹ năng</h3>
                                </div>
                                <Select
                                    options={SkillOption}
                                    value={skill}
                                    onChange={handleSkillSelect}
                                    isMulti
                                />
                            </div>
                            <div className='info-position'>
                                <div className='temp-label'>
                                    <h3>Vị trí làm việc</h3>
                                </div>
                                <Select
                                    options={PositionOption}
                                    value={position}
                                    onChange={handlePositionsSelect}
                                    isMulti
                                />
                            </div>
                            <div className='info-location'>
                                <div className='temp-label'>
                                    <h3>Địa điểm</h3>
                                </div>
                                <Select
                                    options={LocationOption}
                                    value={location}
                                    onChange={handleLocationsSelect}
                                    isMulti
                                />
                            </div>
                        </div>
                    </div>
                    <div className='interest'>
                        <div className='interest-container'>
                            <div className='temp-label'>
                                <h3>Các quyền lợi:</h3>
                            </div>
                            <div className='interest-input'>
                                <input
                                    type='text'
                                    placeholder='các khoản chu cấp'
                                    style={{ marginLeft: 0 }}
                                />
                                <input
                                    type='text'
                                    placeholder='thể loại giải trí'
                                />
                                <input
                                    type='text'
                                    placeholder='xe đưa đón'
                                    style={{ marginRight: 0 }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='editor-container'>
                        <div className='temp-label'>
                            <h3>Nội dung công việc:</h3>
                        </div>
                        <div className='editor-btn-container'>
                            <div className='editor-btn-wrapper'>
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
                                        editor
                                            .chain()
                                            .focus()
                                            .toggleBulletList()
                                            .run()
                                    }
                                    className={`hbtn ${
                                        editor.isActive("bulletList")
                                            ? "is-active"
                                            : ""
                                    }`}>
                                    <HiListBullet />
                                </button>
                                <button
                                    onClick={() =>
                                        editor
                                            .chain()
                                            .focus()
                                            .toggleBold()
                                            .run()
                                    }
                                    className={`hbtn ${
                                        editor.isActive("bold")
                                            ? "is-active"
                                            : ""
                                    }`}>
                                    <GrBold />
                                </button>
                                <button
                                    onClick={() =>
                                        editor
                                            .chain()
                                            .focus()
                                            .toggleItalic()
                                            .run()
                                    }
                                    className={`hbtn ${
                                        editor.isActive("italic")
                                            ? "is-active"
                                            : ""
                                    }`}>
                                    <GrItalic />
                                </button>
                                <button
                                    onClick={() =>
                                        editor
                                            .chain()
                                            .focus()
                                            .toggleUnderline()
                                            .run()
                                    }
                                    className={`hbtn ${
                                        editor.isActive("underline")
                                            ? "is-active"
                                            : ""
                                    }`}>
                                    <GrUnderline />
                                </button>
                                <button
                                    onClick={setLink}
                                    className={`hbtn ${
                                        editor.isActive("link")
                                            ? "is-active"
                                            : ""
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
                                        editor.getAttributes("textStyle")
                                            .color || `#000000`
                                    }
                                />
                            </div>
                            <div className='content'>
                                <EditorContent
                                    className='content-editor'
                                    editor={editor}
                                />
                            </div>
                        </div>
                        <div className='submit'>
                            <Back to='/admin/jobs'>
                                <button className='sbtn back-btn'>
                                    Quay lại
                                </button>
                            </Back>
                            <button
                                className='sbtn submit-btn'
                                onSubmit={saveJob}>
                                Đăng
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateJobForm;
