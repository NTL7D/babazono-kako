import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";

function openPopup() {
    let elem = document.getElementById("register-recruitment");
    let body = document.getElementsByTagName("BODY")[0];
    elem?.classList.add("is-opening");
    body.classList.add("popup-opening");
}

function addSkill() {
    const elem = document.getElementsByClassName(
        "list-other-skill"
    )[0] as HTMLDivElement;
    let a = document.createElement("div");
    a.classList.add("input-group-width-button", "item-skill");
    let a1 = document.createElement("input");
    a1.type = "text";
    a1.placeholder = "Kỹ năng khác";
    a1.classList.add("form-control");
    let a2 = document.createElement("button");
    a2.classList.add("remove-skill");
    let a21 = document.createElement("i");
    a21.classList.add("fa", "fa-minus");
    // a21.addEventListener("click", removeSkill);
    a2.appendChild(a21);
    a.appendChild(a1);
    a.appendChild(a2);
    elem.appendChild(a);
}

function removeSkill(e: React.MouseEvent<Element, MouseEvent>): void {
    let elem = document.getElementsByClassName(
        "list-other-skill"
    )[0] as HTMLDivElement;
    let buttonElem = e.target as HTMLButtonElement;
    let removeElem = buttonElem.parentNode as HTMLDivElement;
    elem.removeChild(removeElem);
}

function importData(e: React.MouseEvent<HTMLButtonElement>) {
    let input = document.createElement("input");
    input.type = "file";
    input.onchange = (_) => {
        // you can use this method to get file and perform respective operations
        let fileInput = Array.prototype.slice.call(input.files);
        let fileName = fileInput[0].name;
        e.currentTarget.innerHTML = fileName;
    };
    input.click();
}

function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(e);
}
const RecuitDetailPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            setIsOpen(false);
            let body = document.getElementsByTagName("BODY")[0];
            body.classList.remove("popup-opening");
        }
    };

    return (
        <div className='RecruitmentPage'>
            <>
                <link
                    rel='stylesheet'
                    href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css'
                />
                <link
                    rel='stylesheet'
                    href='https://fsoft-academy.edu.vn/wp-content/themes/flatsome/assets/css/flatsome.css?ver=3.13.1'
                    media='all'
                />
                <link
                    rel='stylesheet'
                    href='https://fsoft-academy.edu.vn/wp-content/themes/flatsome-child/style.css?ver=3.0'
                    media='all'
                />
                <link
                    rel='stylesheet'
                    id='fontawesome-css'
                    href='https://fsoft-academy.edu.vn/wp-content/themes/flatsome-child/assets/css/fontawesome-all.min.css?ver=3.0'
                    media='all'
                />
                <link
                    rel='stylesheet'
                    href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
                    media='all'
                />
                <link rel='manifest' href='/manifest.json' />
                <link
                    rel='stylesheet'
                    href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css'
                />
                <style
                    type='text/css'
                    dangerouslySetInnerHTML={{
                        __html: "\nimg.wp-smiley,\nimg.emoji {\n\tdisplay: inline !important;\n\tborder: none !important;\n\tbox-shadow: none !important;\n\theight: 1em !important;\n\twidth: 1em !important;\n\tmargin: 0 .07em !important;\n\tvertical-align: -0.1em !important;\n\tbackground: none !important;\n\tpadding: 0 !important;\n}\n",
                    }}
                />

                <a className='skip-link screen-reader-text' href='#main'>
                    Skip to content
                </a>
                <div id='wrapper'>
                    <main id='main'>
                        <div id='content' role='main' className='content-area'>
                            <section
                                className='section page-banner bold-title recruitment-banner'
                                id='section_1448202950'>
                                <div className='bg section-bg fill bg-fill bg-loaded'></div>
                                <div className='section-content relative'>
                                    <div
                                        className='row align-right'
                                        id='row-896259126'>
                                        <div
                                            id='col-2027883699'
                                            className='col medium-7 small-12 large-7'>
                                            <div className='col-inner text-right'>
                                                <div
                                                    id='text-3038095341'
                                                    className='text'>
                                                    <h1>
                                                        <span
                                                            style={{
                                                                fontSize:
                                                                    "100%",
                                                            }}>
                                                            TUYỂN DỤNG
                                                        </span>
                                                    </h1>
                                                    <p>
                                                        FPT Software Academy
                                                        chính là nơi khởi đầu
                                                        cho những thành công của
                                                        các kỹ sư CNTT trong
                                                        tương lai, cung cấp và
                                                        đào tạo nguồn nhân lực
                                                        IT chất lượng cao cho
                                                        các dự án lớn trên toàn
                                                        cầu
                                                    </p>
                                                    <style
                                                        dangerouslySetInnerHTML={{
                                                            __html: "\n#text-3038095341 {\n  text-align: center;\n}\n",
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className='img has-hover basic-img show-for-small x md-x lg-x y md-y lg-y'
                                        id='image_414941567'>
                                        <div className='img-inner dark'>
                                            <img
                                                width={1020}
                                                height={488}
                                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/11/Banner-Tuyen-dung-website-02-1024x490.jpg'
                                                className='attachment-large size-large'
                                                alt=''
                                                loading='lazy'
                                                srcSet='https://fsoft-academy.edu.vn/wp-content/uploads/2021/11/Banner-Tuyen-dung-website-02-1024x490.jpg 1024w, https://fsoft-academy.edu.vn/wp-content/uploads/2021/11/Banner-Tuyen-dung-website-02-300x144.jpg 300w, https://fsoft-academy.edu.vn/wp-content/uploads/2021/11/Banner-Tuyen-dung-website-02-768x368.jpg 768w, https://fsoft-academy.edu.vn/wp-content/uploads/2021/11/Banner-Tuyen-dung-website-02-1536x736.jpg 1536w, https://fsoft-academy.edu.vn/wp-content/uploads/2021/11/Banner-Tuyen-dung-website-02.jpg 1660w'
                                                sizes='(max-width: 1020px) 100vw, 1020px'
                                            />
                                        </div>
                                        <style
                                            dangerouslySetInnerHTML={{
                                                __html: "\n#image_414941567 {\n  width: 100%;\n}\n",
                                            }}
                                        />
                                    </div>
                                </div>
                                <style
                                    dangerouslySetInnerHTML={{
                                        __html: "\n#section_1448202950 {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  background-color: rgb(242, 235, 222);\n}\n#section_1448202950 .section-bg.bg-loaded {\n  background-image: url(https://fsoft-academy.edu.vn/wp-content/uploads/2021/11/Banner-Tuyen-dung-website-01-scaled.jpg);\n}\n@media (min-width:550px) {\n  #section_1448202950 {\n    padding-top: 45px;\n    padding-bottom: 45px;\n  }\n}\n@media (min-width:850px) {\n  #section_1448202950 {\n    padding-top: 70px;\n    padding-bottom: 70px;\n  }\n}\n",
                                    }}
                                />
                            </section>
                            <div className='custom-block recruitment-block'>
                                <form className='form-filter mb-0'>
                                    <div className='section-filter bg-dark pt pb'>
                                        <div className='row row-small-space'>
                                            <div className='col small-12 medium-4'>
                                                <input
                                                    type='text'
                                                    name='key'
                                                    placeholder='Từ khoá'
                                                    className='rounded-small form-control'
                                                />
                                            </div>
                                            <div className='col small-6 medium-2'>
                                                <select
                                                    name='technology'
                                                    className='rounded-small form-control'>
                                                    <option>Công nghệ</option>
                                                    <option value='net'>
                                                        .NET
                                                    </option>
                                                    <option value='net-sharepoint'>
                                                        .NET/SharePoint
                                                    </option>
                                                    <option value='agile'>
                                                        Agile
                                                    </option>
                                                    <option value='android'>
                                                        Android
                                                    </option>
                                                    <option value='angular'>
                                                        Angular
                                                    </option>
                                                    <option value='application-consultant'>
                                                        Application Consultant
                                                    </option>
                                                    <option value='application-security'>
                                                        Application Security
                                                    </option>
                                                    <option value='business-analyst'>
                                                        Business Analyst
                                                    </option>
                                                    <option value='c-c'>
                                                        C/C++
                                                    </option>
                                                    <option value='c-embedded'>
                                                        C/Embedded
                                                    </option>
                                                    <option value='cad'>
                                                        CAD
                                                    </option>
                                                    <option value='cloud'>
                                                        Cloud
                                                    </option>
                                                    <option value='cloud-security'>
                                                        Cloud Security
                                                    </option>
                                                    <option value='cobol'>
                                                        Cobol
                                                    </option>
                                                    <option value='data'>
                                                        Data
                                                    </option>
                                                    <option value='devops'>
                                                        DevOps
                                                    </option>
                                                    <option value='erlang'>
                                                        Erlang
                                                    </option>
                                                    <option value='flexcube'>
                                                        Flexcube
                                                    </option>
                                                    <option value='flutter'>
                                                        Flutter
                                                    </option>
                                                    <option value='front-end'>
                                                        Front-end
                                                    </option>
                                                    <option value='golang'>
                                                        Golang
                                                    </option>
                                                    <option value='ios'>
                                                        iOS
                                                    </option>
                                                    <option value='java'>
                                                        Java
                                                    </option>
                                                    <option value='khac'>
                                                        Khác
                                                    </option>
                                                    <option value='node-js'>
                                                        Node JS
                                                    </option>
                                                    <option value='outsystem'>
                                                        OutSystem
                                                    </option>
                                                    <option value='php'>
                                                        PHP
                                                    </option>
                                                    <option value='python'>
                                                        Python
                                                    </option>
                                                    <option value='qa'>
                                                        QA
                                                    </option>
                                                    <option value='react'>
                                                        React
                                                    </option>
                                                    <option value='react-native'>
                                                        React Native
                                                    </option>
                                                    <option value='rpa'>
                                                        RPA
                                                    </option>
                                                    <option value='technical-consultant'>
                                                        Technical Consultant
                                                    </option>
                                                    <option value='testing'>
                                                        Testing
                                                    </option>
                                                    <option value='thiet-ke-giang-day'>
                                                        Thiết kế giảng dạy
                                                    </option>
                                                    <option value='tuyen-dung-thu-hut-nhan-tai'>
                                                        Tuyển dụng &amp; Thu hút
                                                        nhân tài
                                                    </option>
                                                </select>
                                            </div>
                                            <div className='col small-6 medium-2'>
                                                <select
                                                    name='job_position'
                                                    className='rounded-small form-control'>
                                                    <option>
                                                        Vị trí tuyển dụng
                                                    </option>
                                                    <option value='chuyen-vien'>
                                                        Chuyên viên
                                                    </option>
                                                    <option value='ctv'>
                                                        CTV
                                                    </option>
                                                    <option value='fresher'>
                                                        Fresher
                                                    </option>
                                                    <option value='internship'>
                                                        Internship
                                                    </option>
                                                    <option value='junior'>
                                                        Junior
                                                    </option>
                                                    <option value='on-the-job-training'>
                                                        On the job training
                                                    </option>
                                                    <option value='senior'>
                                                        Senior
                                                    </option>
                                                </select>
                                            </div>
                                            <div className='col small-12 medium-2'>
                                                <select
                                                    name='location'
                                                    className='rounded-small form-control'>
                                                    <option>Địa điểm</option>
                                                    <option value='toan-quoc'>
                                                        Toàn quốc
                                                    </option>
                                                    <option value='ha-noi'>
                                                        Hà Nội
                                                    </option>
                                                    <option value='ho-chi-minh'>
                                                        Hồ Chí Minh
                                                    </option>
                                                    <option value='quy-nhon'>
                                                        Quy Nhơn
                                                    </option>
                                                    <option value='tam-ky'>
                                                        Tam Kỳ
                                                    </option>
                                                    <option value='da-nang'>
                                                        Đà Nẵng
                                                    </option>
                                                </select>
                                            </div>
                                            <div className='col small-12 medium-2'>
                                                <button
                                                    type='submit'
                                                    className='btn bg-second text-white rounded-small box-full'>
                                                    Tìm kiếm
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='pt pb'>
                                        <div className='container'>
                                            <div className='list-items'>
                                                <div className='item-post item-recruitment'>
                                                    <div className='row'>
                                                        <div className='col small-4 medium-3'>
                                                            <div className='item-img rounded-small overflow-hidden'>
                                                                <a href='https://fsoft-academy.edu.vn/recruitment/hcm-fresher-sap-fiori-technical-consultant/'>
                                                                    <img
                                                                        width={
                                                                            360
                                                                        }
                                                                        height={
                                                                            260
                                                                        }
                                                                        src='https://fsoft-academy.edu.vn/wp-content/uploads/2023/03/channels4_profile-360x260.jpg'
                                                                        className='attachment-small-thumbnail-2 size-small-thumbnail-2 wp-post-image'
                                                                        alt=''
                                                                        loading='lazy'
                                                                    />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className='col small-8 medium-9'>
                                                            <div className='item-info'>
                                                                <h3 className='item-title'>
                                                                    <a href='https://fsoft-academy.edu.vn/recruitment/hcm-fresher-sap-fiori-technical-consultant/'>
                                                                        [HCM]
                                                                        Fresher
                                                                        SAP
                                                                        FIORI
                                                                        Technical
                                                                        Consultant
                                                                    </a>
                                                                </h3>
                                                                <div className='row row-collapse'>
                                                                    <div className='col small-12 medium-8 large-9 pt-0 pb-0'>
                                                                        <table className='table'>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td
                                                                                        className='hide-for-small no-border pt-0'
                                                                                        style={{
                                                                                            width: "80px",
                                                                                        }}>
                                                                                        <b>
                                                                                            Expire
                                                                                        </b>
                                                                                    </td>
                                                                                    <td className='hide-for-small no-border pt-0 text-third'>
                                                                                        March
                                                                                        31,2023
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td
                                                                                        className='no-border pt-0'
                                                                                        style={{
                                                                                            width: "80px",
                                                                                        }}>
                                                                                        <b>
                                                                                            Type
                                                                                        </b>
                                                                                    </td>
                                                                                    <td className='no-border pt-0'>
                                                                                        Full
                                                                                        time
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td
                                                                                        className='hide-for-small no-border pt-0'
                                                                                        style={{
                                                                                            width: "80px",
                                                                                        }}>
                                                                                        <b>
                                                                                            Location
                                                                                        </b>
                                                                                    </td>
                                                                                    <td className='hide-for-small no-border pt-0'>
                                                                                        Hồ
                                                                                        Chí
                                                                                        Minh
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        <div className='hide-for-small more-info-tag'>
                                                                            <span className='btn rounded-small'>
                                                                                Fresher
                                                                            </span>
                                                                            <span className='btn rounded-small'>
                                                                                Technical
                                                                                Consultant
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className='hide-for-small col small-12 medium-4 large-3 pt-0 pb-0'>
                                                                        <div className='recruitment-actions'>
                                                                            <div>
                                                                                <a
                                                                                    href='https://fsoft-academy.edu.vn/recruitment/hcm-fresher-sap-fiori-technical-consultant/'
                                                                                    className='btn bg-second text-white box-full text-center'>
                                                                                    Ứng
                                                                                    tuyển{" "}
                                                                                    <span>
                                                                                        &#10230;
                                                                                    </span>
                                                                                </a>
                                                                            </div>
                                                                            <div className='mt-half'></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='item-post item-recruitment'>
                                                    <div className='row'>
                                                        <div className='col small-4 medium-3'>
                                                            <div className='item-img rounded-small overflow-hidden'>
                                                                <a href='https://fsoft-academy.edu.vn/recruitment/hn-content-marketing-intern/'>
                                                                    <img
                                                                        width={
                                                                            360
                                                                        }
                                                                        height={
                                                                            260
                                                                        }
                                                                        src='https://fsoft-academy.edu.vn/wp-content/uploads/2023/02/vvv-360x260.jpg'
                                                                        className='attachment-small-thumbnail-2 size-small-thumbnail-2 wp-post-image'
                                                                        alt=''
                                                                        loading='lazy'
                                                                    />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className='col small-8 medium-9'>
                                                            <div className='item-info'>
                                                                <h3 className='item-title'>
                                                                    <a href='https://fsoft-academy.edu.vn/recruitment/hn-content-marketing-intern/'>
                                                                        [HN]
                                                                        Content
                                                                        Marketing
                                                                        Intern
                                                                    </a>
                                                                </h3>
                                                                <div className='row row-collapse'>
                                                                    <div className='col small-12 medium-8 large-9 pt-0 pb-0'>
                                                                        <table className='table'>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td
                                                                                        className='hide-for-small no-border pt-0'
                                                                                        style={{
                                                                                            width: "80px",
                                                                                        }}>
                                                                                        <b>
                                                                                            Expire
                                                                                        </b>
                                                                                    </td>
                                                                                    <td className='hide-for-small no-border pt-0 text-third'>
                                                                                        March
                                                                                        31,2023
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td
                                                                                        className='no-border pt-0'
                                                                                        style={{
                                                                                            width: "80px",
                                                                                        }}>
                                                                                        <b>
                                                                                            Type
                                                                                        </b>
                                                                                    </td>
                                                                                    <td className='no-border pt-0'>
                                                                                        Full
                                                                                        time,Part
                                                                                        time
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td
                                                                                        className='hide-for-small no-border pt-0'
                                                                                        style={{
                                                                                            width: "80px",
                                                                                        }}>
                                                                                        <b>
                                                                                            Location
                                                                                        </b>
                                                                                    </td>
                                                                                    <td className='hide-for-small no-border pt-0'>
                                                                                        Hà
                                                                                        Nội
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        <div className='hide-for-small more-info-tag'>
                                                                            <span className='btn rounded-small'>
                                                                                Internship
                                                                            </span>
                                                                            <span className='btn rounded-small'>
                                                                                CTV
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className='hide-for-small col small-12 medium-4 large-3 pt-0 pb-0'>
                                                                        <div className='recruitment-actions'>
                                                                            <div>
                                                                                <a
                                                                                    href='https://fsoft-academy.edu.vn/recruitment/hn-content-marketing-intern/'
                                                                                    className='btn bg-second text-white box-full text-center'>
                                                                                    Ứng
                                                                                    tuyển{" "}
                                                                                    <span>
                                                                                        &#10230;
                                                                                    </span>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='item-post item-recruitment'>
                                                    <div className='row'>
                                                        <div className='col small-4 medium-3'>
                                                            <div className='item-img rounded-small overflow-hidden'>
                                                                <a href='https://fsoft-academy.edu.vn/recruitment/hn-fresher-c-embedded-3/'>
                                                                    <img
                                                                        width={
                                                                            360
                                                                        }
                                                                        height={
                                                                            260
                                                                        }
                                                                        src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/11/Capture-2-360x260.png'
                                                                        className='attachment-small-thumbnail-2 size-small-thumbnail-2 wp-post-image'
                                                                        alt='Embedded Developer'
                                                                        loading='lazy'
                                                                    />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className='col small-8 medium-9'>
                                                            <div className='item-info'>
                                                                <h3 className='item-title'>
                                                                    <a href='https://fsoft-academy.edu.vn/recruitment/hn-fresher-c-embedded-3/'>
                                                                        [HN]
                                                                        Fresher
                                                                        C/Embedded
                                                                    </a>
                                                                </h3>
                                                                <div className='row row-collapse'>
                                                                    <div className='col small-12 medium-8 large-9 pt-0 pb-0'>
                                                                        <table className='table'>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td
                                                                                        className='hide-for-small no-border pt-0'
                                                                                        style={{
                                                                                            width: "80px",
                                                                                        }}>
                                                                                        <b>
                                                                                            Expire
                                                                                        </b>
                                                                                    </td>
                                                                                    <td className='hide-for-small no-border pt-0 text-third'>
                                                                                        April
                                                                                        23,2023
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td
                                                                                        className='no-border pt-0'
                                                                                        style={{
                                                                                            width: "80px",
                                                                                        }}>
                                                                                        <b>
                                                                                            Type
                                                                                        </b>
                                                                                    </td>
                                                                                    <td className='no-border pt-0'>
                                                                                        Full
                                                                                        time
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td
                                                                                        className='hide-for-small no-border pt-0'
                                                                                        style={{
                                                                                            width: "80px",
                                                                                        }}>
                                                                                        <b>
                                                                                            Location
                                                                                        </b>
                                                                                    </td>
                                                                                    <td className='hide-for-small no-border pt-0'>
                                                                                        Hà
                                                                                        Nội
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        <div className='hide-for-small more-info-tag'>
                                                                            <span className='btn rounded-small'>
                                                                                Fresher
                                                                            </span>
                                                                            <span className='btn rounded-small'>
                                                                                C/Embedded
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className='hide-for-small col small-12 medium-4 large-3 pt-0 pb-0'>
                                                                        <div className='recruitment-actions'>
                                                                            <div>
                                                                                <a
                                                                                    href='https://fsoft-academy.edu.vn/recruitment/hn-fresher-c-embedded-3/'
                                                                                    className='btn bg-second text-white box-full text-center'>
                                                                                    Ứng
                                                                                    tuyển{" "}
                                                                                    <span>
                                                                                        &#10230;
                                                                                    </span>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='item-post item-recruitment'>
                                                    <div className='row'>
                                                        <div className='col small-4 medium-3'>
                                                            <div className='item-img rounded-small overflow-hidden'>
                                                                <a href='https://fsoft-academy.edu.vn/recruitment/hn-ctv-trien-khai-dao-tao/'>
                                                                    <img
                                                                        width={
                                                                            360
                                                                        }
                                                                        height={
                                                                            260
                                                                        }
                                                                        src='https://fsoft-academy.edu.vn/wp-content/uploads/2023/02/CTV-360x260.jpg'
                                                                        className='attachment-small-thumbnail-2 size-small-thumbnail-2 wp-post-image'
                                                                        alt=''
                                                                        loading='lazy'
                                                                    />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className='col small-8 medium-9'>
                                                            <div className='item-info'>
                                                                <h3 className='item-title'>
                                                                    <a href='https://fsoft-academy.edu.vn/recruitment/hn-ctv-trien-khai-dao-tao/'>
                                                                        [HN] CTV
                                                                        Triển
                                                                        khai Đào
                                                                        tạo
                                                                    </a>
                                                                </h3>
                                                                <div className='row row-collapse'>
                                                                    <div className='col small-12 medium-8 large-9 pt-0 pb-0'>
                                                                        <table className='table'>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td
                                                                                        className='hide-for-small no-border pt-0'
                                                                                        style={{
                                                                                            width: "80px",
                                                                                        }}>
                                                                                        <b>
                                                                                            Expire
                                                                                        </b>
                                                                                    </td>
                                                                                    <td className='hide-for-small no-border pt-0 text-third'>
                                                                                        March
                                                                                        11,2023
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td
                                                                                        className='no-border pt-0'
                                                                                        style={{
                                                                                            width: "80px",
                                                                                        }}>
                                                                                        <b>
                                                                                            Type
                                                                                        </b>
                                                                                    </td>
                                                                                    <td className='no-border pt-0'>
                                                                                        Full
                                                                                        time
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td
                                                                                        className='hide-for-small no-border pt-0'
                                                                                        style={{
                                                                                            width: "80px",
                                                                                        }}>
                                                                                        <b>
                                                                                            Location
                                                                                        </b>
                                                                                    </td>
                                                                                    <td className='hide-for-small no-border pt-0'>
                                                                                        Hà
                                                                                        Nội
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        <div className='hide-for-small more-info-tag'>
                                                                            <span className='btn rounded-small'>
                                                                                CTV
                                                                            </span>
                                                                            <span className='btn rounded-small'>
                                                                                Thiết
                                                                                kế
                                                                                giảng
                                                                                dạy
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className='hide-for-small col small-12 medium-4 large-3 pt-0 pb-0'>
                                                                        <div className='recruitment-actions'>
                                                                            <div>
                                                                                <a
                                                                                    href='https://fsoft-academy.edu.vn/recruitment/hn-ctv-trien-khai-dao-tao/'
                                                                                    className='btn bg-second text-white box-full text-center'>
                                                                                    Ứng
                                                                                    tuyển{" "}
                                                                                    <span>
                                                                                        &#10230;
                                                                                    </span>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='item-post item-recruitment'>
                                                    <div className='row'>
                                                        <div className='col small-4 medium-3'>
                                                            <div className='item-img rounded-small overflow-hidden'>
                                                                <a href='https://fsoft-academy.edu.vn/recruitment/hn-content-creator-intern/'>
                                                                    <img
                                                                        width={
                                                                            360
                                                                        }
                                                                        height={
                                                                            260
                                                                        }
                                                                        src='https://fsoft-academy.edu.vn/wp-content/uploads/2023/02/INTERN-CONTENT-360x260.jpg'
                                                                        className='attachment-small-thumbnail-2 size-small-thumbnail-2 wp-post-image'
                                                                        alt=''
                                                                        loading='lazy'
                                                                    />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className='col small-8 medium-9'>
                                                            <div className='item-info'>
                                                                <h3 className='item-title'>
                                                                    <a href='https://fsoft-academy.edu.vn/recruitment/hn-content-creator-intern/'>
                                                                        [HN]
                                                                        Intern
                                                                        Content
                                                                        Creator
                                                                    </a>
                                                                </h3>
                                                                <div className='row row-collapse'>
                                                                    <div className='col small-12 medium-8 large-9 pt-0 pb-0'>
                                                                        <table className='table'>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td
                                                                                        className='hide-for-small no-border pt-0'
                                                                                        style={{
                                                                                            width: "80px",
                                                                                        }}>
                                                                                        <b>
                                                                                            Expire
                                                                                        </b>
                                                                                    </td>
                                                                                    <td className='hide-for-small no-border pt-0 text-third'>
                                                                                        March
                                                                                        1,2023
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td
                                                                                        className='no-border pt-0'
                                                                                        style={{
                                                                                            width: "80px",
                                                                                        }}>
                                                                                        <b>
                                                                                            Type
                                                                                        </b>
                                                                                    </td>
                                                                                    <td className='no-border pt-0'>
                                                                                        Part
                                                                                        time
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td
                                                                                        className='hide-for-small no-border pt-0'
                                                                                        style={{
                                                                                            width: "80px",
                                                                                        }}>
                                                                                        <b>
                                                                                            Location
                                                                                        </b>
                                                                                    </td>
                                                                                    <td className='hide-for-small no-border pt-0'>
                                                                                        Hà
                                                                                        Nội
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        <div className='hide-for-small more-info-tag'>
                                                                            <span className='btn rounded-small'>
                                                                                Internship
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className='hide-for-small col small-12 medium-4 large-3 pt-0 pb-0'>
                                                                        <div className='recruitment-actions'>
                                                                            <div>
                                                                                <a
                                                                                    href='https://fsoft-academy.edu.vn/recruitment/hn-content-creator-intern/'
                                                                                    className='btn bg-second text-white box-full text-center'>
                                                                                    Ứng
                                                                                    tuyển{" "}
                                                                                    <span>
                                                                                        &#10230;
                                                                                    </span>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='item-post item-recruitment'>
                                                    <div className='row'>
                                                        <div className='col small-4 medium-3'>
                                                            <div className='item-img rounded-small overflow-hidden'>
                                                                <a href='https://fsoft-academy.edu.vn/recruitment/hn-designer-intern/'>
                                                                    <img
                                                                        width={
                                                                            360
                                                                        }
                                                                        height={
                                                                            260
                                                                        }
                                                                        src='https://fsoft-academy.edu.vn/wp-content/uploads/2023/01/Untitled-2-01-1-360x260.jpg'
                                                                        className='attachment-small-thumbnail-2 size-small-thumbnail-2 wp-post-image'
                                                                        alt=''
                                                                        loading='lazy'
                                                                    />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className='col small-8 medium-9'>
                                                            <div className='item-info'>
                                                                <h3 className='item-title'>
                                                                    <a href='https://fsoft-academy.edu.vn/recruitment/hn-designer-intern/'>
                                                                        [HN]
                                                                        Designer
                                                                        Intern
                                                                    </a>
                                                                </h3>
                                                                <div className='row row-collapse'>
                                                                    <div className='col small-12 medium-8 large-9 pt-0 pb-0'>
                                                                        <table className='table'>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td
                                                                                        className='hide-for-small no-border pt-0'
                                                                                        style={{
                                                                                            width: "80px",
                                                                                        }}>
                                                                                        <b>
                                                                                            Expire
                                                                                        </b>
                                                                                    </td>
                                                                                    <td className='hide-for-small no-border pt-0 text-third'>
                                                                                        January
                                                                                        31,2023
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td
                                                                                        className='no-border pt-0'
                                                                                        style={{
                                                                                            width: "80px",
                                                                                        }}>
                                                                                        <b>
                                                                                            Type
                                                                                        </b>
                                                                                    </td>
                                                                                    <td className='no-border pt-0'>
                                                                                        Full
                                                                                        time,Part
                                                                                        time
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td
                                                                                        className='hide-for-small no-border pt-0'
                                                                                        style={{
                                                                                            width: "80px",
                                                                                        }}>
                                                                                        <b>
                                                                                            Location
                                                                                        </b>
                                                                                    </td>
                                                                                    <td className='hide-for-small no-border pt-0'>
                                                                                        Hà
                                                                                        Nội
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        <div className='hide-for-small more-info-tag'>
                                                                            <span className='btn rounded-small'>
                                                                                Internship
                                                                            </span>
                                                                            <span className='btn rounded-small'>
                                                                                CTV
                                                                            </span>
                                                                            <span className='btn rounded-small'>
                                                                                Khác
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className='hide-for-small col small-12 medium-4 large-3 pt-0 pb-0'>
                                                                        <div className='recruitment-actions'>
                                                                            <div>
                                                                                <a
                                                                                    href='https://fsoft-academy.edu.vn/recruitment/hn-designer-intern/'
                                                                                    className='btn bg-second text-white box-full text-center'>
                                                                                    Ứng
                                                                                    tuyển{" "}
                                                                                    <span>
                                                                                        &#10230;
                                                                                    </span>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='item-post item-recruitment'>
                                                    <div className='row'>
                                                        <div className='col small-4 medium-3'>
                                                            <div className='item-img rounded-small overflow-hidden'>
                                                                <a href='https://fsoft-academy.edu.vn/recruitment/hcm-fresher-sap-consultant_tieng-han/'>
                                                                    <img
                                                                        width={
                                                                            360
                                                                        }
                                                                        height={
                                                                            260
                                                                        }
                                                                        src='https://fsoft-academy.edu.vn/wp-content/uploads/2022/07/sap-la-gi-ung-dung-cua-phan-mem-sap-800-800x450-1-360x260.png'
                                                                        className='attachment-small-thumbnail-2 size-small-thumbnail-2 wp-post-image'
                                                                        alt=''
                                                                        loading='lazy'
                                                                    />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className='col small-8 medium-9'>
                                                            <div className='item-info'>
                                                                <h3 className='item-title'>
                                                                    <a href='https://fsoft-academy.edu.vn/recruitment/hcm-fresher-sap-consultant_tieng-han/'>
                                                                        [HCM]
                                                                        Fresher
                                                                        SAP
                                                                        Consultant_Tiếng
                                                                        Hàn
                                                                    </a>
                                                                </h3>
                                                                <div className='row row-collapse'>
                                                                    <div className='col small-12 medium-8 large-9 pt-0 pb-0'>
                                                                        <table className='table'>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td
                                                                                        className='hide-for-small no-border pt-0'
                                                                                        style={{
                                                                                            width: "80px",
                                                                                        }}>
                                                                                        <b>
                                                                                            Expire
                                                                                        </b>
                                                                                    </td>
                                                                                    <td className='hide-for-small no-border pt-0 text-third'>
                                                                                        March
                                                                                        31,2023
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td
                                                                                        className='no-border pt-0'
                                                                                        style={{
                                                                                            width: "80px",
                                                                                        }}>
                                                                                        <b>
                                                                                            Type
                                                                                        </b>
                                                                                    </td>
                                                                                    <td className='no-border pt-0'>
                                                                                        Full
                                                                                        time
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td
                                                                                        className='hide-for-small no-border pt-0'
                                                                                        style={{
                                                                                            width: "80px",
                                                                                        }}>
                                                                                        <b>
                                                                                            Location
                                                                                        </b>
                                                                                    </td>
                                                                                    <td className='hide-for-small no-border pt-0'>
                                                                                        Hồ
                                                                                        Chí
                                                                                        Minh
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        <div className='hide-for-small more-info-tag'>
                                                                            <span className='btn rounded-small'>
                                                                                Fresher
                                                                            </span>
                                                                            <span className='btn rounded-small'>
                                                                                Technical
                                                                                Consultant
                                                                            </span>
                                                                            <span className='btn rounded-small'>
                                                                                Business
                                                                                Analyst
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className='hide-for-small col small-12 medium-4 large-3 pt-0 pb-0'>
                                                                        <div className='recruitment-actions'>
                                                                            <div>
                                                                                <a
                                                                                    href='https://fsoft-academy.edu.vn/recruitment/hcm-fresher-sap-consultant_tieng-han/'
                                                                                    className='btn bg-second text-white box-full text-center'>
                                                                                    Ứng
                                                                                    tuyển{" "}
                                                                                    <span>
                                                                                        &#10230;
                                                                                    </span>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='item-post item-recruitment'>
                                                    <div className='row'>
                                                        <div className='col small-4 medium-3'>
                                                            <div className='item-img rounded-small overflow-hidden'>
                                                                <a href='https://fsoft-academy.edu.vn/recruitment/dn-fresher-c-net/'>
                                                                    <img
                                                                        width={
                                                                            360
                                                                        }
                                                                        height={
                                                                            260
                                                                        }
                                                                        src='https://fsoft-academy.edu.vn/wp-content/uploads/2022/08/321642847_3223354217927163_5525163985865074400_n-1-360x260.jpg'
                                                                        className='attachment-small-thumbnail-2 size-small-thumbnail-2 wp-post-image'
                                                                        alt=''
                                                                        loading='lazy'
                                                                    />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className='col small-8 medium-9'>
                                                            <div className='item-info'>
                                                                <h3 className='item-title'>
                                                                    <a href='https://fsoft-academy.edu.vn/recruitment/dn-fresher-c-net/'>
                                                                        [ĐN]
                                                                        Fresher
                                                                        .NET
                                                                    </a>
                                                                </h3>
                                                                <div className='row row-collapse'>
                                                                    <div className='col small-12 medium-8 large-9 pt-0 pb-0'>
                                                                        <table className='table'>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td
                                                                                        className='hide-for-small no-border pt-0'
                                                                                        style={{
                                                                                            width: "80px",
                                                                                        }}>
                                                                                        <b>
                                                                                            Expire
                                                                                        </b>
                                                                                    </td>
                                                                                    <td className='hide-for-small no-border pt-0 text-third'>
                                                                                        April
                                                                                        23,2023
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td
                                                                                        className='no-border pt-0'
                                                                                        style={{
                                                                                            width: "80px",
                                                                                        }}>
                                                                                        <b>
                                                                                            Type
                                                                                        </b>
                                                                                    </td>
                                                                                    <td className='no-border pt-0'>
                                                                                        Full
                                                                                        time
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td
                                                                                        className='hide-for-small no-border pt-0'
                                                                                        style={{
                                                                                            width: "80px",
                                                                                        }}>
                                                                                        <b>
                                                                                            Location
                                                                                        </b>
                                                                                    </td>
                                                                                    <td className='hide-for-small no-border pt-0'>
                                                                                        Đà
                                                                                        Nẵng
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        <div className='hide-for-small more-info-tag'>
                                                                            <span className='btn rounded-small'>
                                                                                Fresher
                                                                            </span>
                                                                            <span className='btn rounded-small'>
                                                                                .NET
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className='hide-for-small col small-12 medium-4 large-3 pt-0 pb-0'>
                                                                        <div className='recruitment-actions'>
                                                                            <div>
                                                                                <a
                                                                                    href='https://fsoft-academy.edu.vn/recruitment/dn-fresher-c-net/'
                                                                                    className='btn bg-second text-white box-full text-center'>
                                                                                    Ứng
                                                                                    tuyển{" "}
                                                                                    <span>
                                                                                        &#10230;
                                                                                    </span>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='item-post item-recruitment'>
                                                    <div className='row'>
                                                        <div className='col small-4 medium-3'>
                                                            <div className='item-img rounded-small overflow-hidden'>
                                                                <a href='https://fsoft-academy.edu.vn/recruitment/hcm-fresher-sap-abap-technical-consultant/'>
                                                                    <img
                                                                        width={
                                                                            360
                                                                        }
                                                                        height={
                                                                            260
                                                                        }
                                                                        src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/12/MicrosoftTeams-image-16-360x260.jpg'
                                                                        className='attachment-small-thumbnail-2 size-small-thumbnail-2 wp-post-image'
                                                                        alt='Fresher SAP - ABAP Technical Consultant'
                                                                        loading='lazy'
                                                                    />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className='col small-8 medium-9'>
                                                            <div className='item-info'>
                                                                <h3 className='item-title'>
                                                                    <a href='https://fsoft-academy.edu.vn/recruitment/hcm-fresher-sap-abap-technical-consultant/'>
                                                                        [HCM]
                                                                        Fresher
                                                                        SAP ABAP
                                                                        Technical
                                                                        Consultant
                                                                    </a>
                                                                </h3>
                                                                <div className='row row-collapse'>
                                                                    <div className='col small-12 medium-8 large-9 pt-0 pb-0'>
                                                                        <table className='table'>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td
                                                                                        className='hide-for-small no-border pt-0'
                                                                                        style={{
                                                                                            width: "80px",
                                                                                        }}>
                                                                                        <b>
                                                                                            Expire
                                                                                        </b>
                                                                                    </td>
                                                                                    <td className='hide-for-small no-border pt-0 text-third'>
                                                                                        December
                                                                                        31,2022
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td
                                                                                        className='no-border pt-0'
                                                                                        style={{
                                                                                            width: "80px",
                                                                                        }}>
                                                                                        <b>
                                                                                            Type
                                                                                        </b>
                                                                                    </td>
                                                                                    <td className='no-border pt-0'>
                                                                                        Full
                                                                                        time
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td
                                                                                        className='hide-for-small no-border pt-0'
                                                                                        style={{
                                                                                            width: "80px",
                                                                                        }}>
                                                                                        <b>
                                                                                            Location
                                                                                        </b>
                                                                                    </td>
                                                                                    <td className='hide-for-small no-border pt-0'>
                                                                                        Hồ
                                                                                        Chí
                                                                                        Minh
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        <div className='hide-for-small more-info-tag'>
                                                                            <span className='btn rounded-small'>
                                                                                Fresher
                                                                            </span>
                                                                            <span className='btn rounded-small'>
                                                                                Technical
                                                                                Consultant
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className='hide-for-small col small-12 medium-4 large-3 pt-0 pb-0'>
                                                                        <div className='recruitment-actions'>
                                                                            <div>
                                                                                <a
                                                                                    href='https://fsoft-academy.edu.vn/recruitment/hcm-fresher-sap-abap-technical-consultant/'
                                                                                    className='btn bg-second text-white box-full text-center'>
                                                                                    Ứng
                                                                                    tuyển{" "}
                                                                                    <span>
                                                                                        &#10230;
                                                                                    </span>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='item-post item-recruitment'>
                                                    <div className='row'>
                                                        <div className='col small-4 medium-3'>
                                                            <div className='item-img rounded-small overflow-hidden'>
                                                                <a href='https://fsoft-academy.edu.vn/recruitment/hcm-ojt-business-development-officer-for-japan-market/'>
                                                                    <img
                                                                        width={
                                                                            360
                                                                        }
                                                                        height={
                                                                            260
                                                                        }
                                                                        src='https://fsoft-academy.edu.vn/wp-content/uploads/2022/12/Business-Development1-1--360x260.jpg'
                                                                        className='attachment-small-thumbnail-2 size-small-thumbnail-2 wp-post-image'
                                                                        alt=''
                                                                        loading='lazy'
                                                                    />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className='col small-8 medium-9'>
                                                            <div className='item-info'>
                                                                <h3 className='item-title'>
                                                                    <a href='https://fsoft-academy.edu.vn/recruitment/hcm-ojt-business-development-officer-for-japan-market/'>
                                                                        [HCM]
                                                                        OJT
                                                                        Business
                                                                        Development
                                                                        Officer
                                                                        for
                                                                        Japan
                                                                        Market
                                                                    </a>
                                                                </h3>
                                                                <div className='row row-collapse'>
                                                                    <div className='col small-12 medium-8 large-9 pt-0 pb-0'>
                                                                        <table className='table'>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td
                                                                                        className='hide-for-small no-border pt-0'
                                                                                        style={{
                                                                                            width: "80px",
                                                                                        }}>
                                                                                        <b>
                                                                                            Expire
                                                                                        </b>
                                                                                    </td>
                                                                                    <td className='hide-for-small no-border pt-0 text-third'>
                                                                                        February
                                                                                        28,2023
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td
                                                                                        className='no-border pt-0'
                                                                                        style={{
                                                                                            width: "80px",
                                                                                        }}>
                                                                                        <b>
                                                                                            Type
                                                                                        </b>
                                                                                    </td>
                                                                                    <td className='no-border pt-0'>
                                                                                        Full
                                                                                        time
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td
                                                                                        className='hide-for-small no-border pt-0'
                                                                                        style={{
                                                                                            width: "80px",
                                                                                        }}>
                                                                                        <b>
                                                                                            Location
                                                                                        </b>
                                                                                    </td>
                                                                                    <td className='hide-for-small no-border pt-0'>
                                                                                        Hồ
                                                                                        Chí
                                                                                        Minh
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        <div className='hide-for-small more-info-tag'>
                                                                            <span className='btn rounded-small'>
                                                                                On
                                                                                the
                                                                                job
                                                                                training
                                                                            </span>
                                                                            <span className='btn rounded-small'>
                                                                                Khác
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className='hide-for-small col small-12 medium-4 large-3 pt-0 pb-0'>
                                                                        <div className='recruitment-actions'>
                                                                            <div>
                                                                                <a
                                                                                    href='https://fsoft-academy.edu.vn/recruitment/hcm-ojt-business-development-officer-for-japan-market/'
                                                                                    className='btn bg-second text-white box-full text-center'>
                                                                                    Ứng
                                                                                    tuyển{" "}
                                                                                    <span>
                                                                                        &#10230;
                                                                                    </span>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex justify-end items-center box-pagination'>
                                                <div className='d-inline-block list-pages'>
                                                    <div
                                                        className='wp-pagenavi'
                                                        role='navigation'>
                                                        <span className='pages'>
                                                            Trang 1 trên 3
                                                        </span>
                                                        <span
                                                            aria-current='page'
                                                            className='current'>
                                                            1
                                                        </span>
                                                        <a
                                                            className='page larger'
                                                            title='Page 2'
                                                            href='https://fsoft-academy.edu.vn/tuyen-dung/page/2/'>
                                                            2
                                                        </a>
                                                        <a
                                                            className='page larger'
                                                            title='Page 3'
                                                            href='https://fsoft-academy.edu.vn/tuyen-dung/page/3/'>
                                                            3
                                                        </a>
                                                        <a
                                                            className='fas fa-angle-right'
                                                            rel='next'
                                                            aria-label='Next Page'
                                                            href='https://fsoft-academy.edu.vn/tuyen-dung/page/2/'></a>
                                                    </div>
                                                </div>
                                                <div className='d-inline-block ml-half'>
                                                    <div className='d-flex'>
                                                        <span>
                                                            Rows per page
                                                        </span>
                                                        <select
                                                            name='per_page'
                                                            className='d-inline-block no-border per-page auto-submit'
                                                            style={{
                                                                width: "60px",
                                                            }}>
                                                            <option value={6}>
                                                                6
                                                            </option>
                                                            <option value={12}>
                                                                12
                                                            </option>
                                                            <option value={18}>
                                                                18
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <section
                                className='section bottom-recruitment'
                                id='section_521892758'>
                                <div className='bg section-bg fill bg-fill bg-loaded'></div>
                                <div className='section-content relative'>
                                    <div className='row' id='row-755860129'>
                                        <div
                                            id='col-124705229'
                                            className='col pb-0 small-12 large-12'>
                                            <div className='col-inner'>
                                                <div
                                                    id='text-4288457115'
                                                    className='text'>
                                                    <p>
                                                        <strong>
                                                            TUYỂN DỤNG
                                                        </strong>
                                                    </p>
                                                    <style
                                                        dangerouslySetInnerHTML={{
                                                            __html: "\n#text-4288457115 {\n  line-height: 1.25;\n}\n",
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <style
                                                dangerouslySetInnerHTML={{
                                                    __html: "\n#col-124705229 > .col-inner {\n  padding: 0px 0px 0px 0px;\n}\n",
                                                }}
                                            />
                                        </div>
                                        <div
                                            id='col-1955574312'
                                            className='col medium-6 small-12 large-6'>
                                            <div className='col-inner'>
                                                <div
                                                    id='text-1251701506'
                                                    className='text mb'>
                                                    <h2 className='weight-normal font-third'>
                                                        <span
                                                            style={{
                                                                fontSize:
                                                                    "110%",
                                                            }}>
                                                            Các bước ứng tuyển
                                                        </span>
                                                        <br />
                                                        <span
                                                            style={{
                                                                fontSize:
                                                                    "110%",
                                                            }}>
                                                            đơn giản cùng FPT
                                                            Software Academy
                                                        </span>
                                                    </h2>
                                                    <style
                                                        dangerouslySetInnerHTML={{
                                                            __html: "\n#text-1251701506 {\n  line-height: 1.25;\n}\n",
                                                        }}
                                                    />
                                                </div>
                                                <a
                                                    href='https://fsoft-academy.edu.vn/quy-trinh-ung-tuyen-tai-fpt-software-academy/'
                                                    target='_self'
                                                    className='button primary lowercase bg-second'
                                                    style={{
                                                        borderRadius: "99px",
                                                        padding:
                                                            "0px 30px 0px 30px",
                                                    }}>
                                                    <span>Xem thêm</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div
                                            id='col-1200481652'
                                            className='col medium-6 small-12 large-5'>
                                            <div className='col-inner'>
                                                <p>
                                                    FPT Software
                                                    <span
                                                        style={{
                                                            fontSize: "14.4px",
                                                        }}>
                                                        &nbsp;Academy chính là
                                                        nơi khởi đầu cho những
                                                        thành công của các kỹ sư
                                                        CNTT trong tương lai,
                                                        cung cấp và đào tạo
                                                        nguồn nhân lực IT chất
                                                        lượng cao cho các dự án
                                                        lớn trên toàn cầu
                                                    </span>
                                                </p>
                                                <div
                                                    className='row row-collapse'
                                                    id='row-948715721'>
                                                    <div
                                                        id='col-383670069'
                                                        className='col medium-6 small-6 large-6'>
                                                        <div className='col-inner text-left'>
                                                            <p>
                                                                <span
                                                                    style={{
                                                                        color: "#74b048",
                                                                    }}>
                                                                    <strong>
                                                                        <span
                                                                            style={{
                                                                                fontSize:
                                                                                    "200%",
                                                                            }}>
                                                                            <span className='counter'>
                                                                                13,000
                                                                            </span>
                                                                            +
                                                                        </span>
                                                                    </strong>
                                                                </span>
                                                            </p>
                                                            <p>học viên</p>
                                                        </div>
                                                    </div>
                                                    <div
                                                        id='col-1978273139'
                                                        className='col medium-6 small-6 large-6'>
                                                        <div className='col-inner text-left'>
                                                            <p>
                                                                <span
                                                                    style={{
                                                                        color: "#74b048",
                                                                    }}>
                                                                    <strong>
                                                                        <span
                                                                            className='counter'
                                                                            style={{
                                                                                fontSize:
                                                                                    "200%",
                                                                            }}>
                                                                            3
                                                                        </span>
                                                                    </strong>
                                                                </span>
                                                            </p>
                                                            <p>
                                                                khoá học mỗi
                                                                tháng
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <style
                                                        dangerouslySetInnerHTML={{
                                                            __html: "\n#row-948715721 > .col > .col-inner {\n  padding: 0px 0px 0px 0px;\n}\n",
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className='row hide-for-small'
                                        id='row-2083413605'>
                                        <div
                                            id='col-1677554139'
                                            className='col item-step-recruitment medium-3 small-12 large-3'>
                                            <div className='col-inner'>
                                                <div
                                                    id='text-1379332946'
                                                    className='text font-third'>
                                                    <h3
                                                        style={{
                                                            textAlign: "right",
                                                        }}>
                                                        <span
                                                            style={{
                                                                fontSize:
                                                                    "200%",
                                                            }}>
                                                            01
                                                        </span>
                                                    </h3>
                                                </div>
                                                <div
                                                    className='img has-hover img-auto-width img-not-hover x md-x lg-x y md-y lg-y'
                                                    id='image_1593238266'>
                                                    <div className='img-inner dark'>
                                                        <img
                                                            width={30}
                                                            height={36}
                                                            src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/07/send-cv-gray.png'
                                                            className='attachment-large size-large'
                                                            alt=''
                                                            loading='lazy'
                                                        />
                                                    </div>
                                                    <style
                                                        dangerouslySetInnerHTML={{
                                                            __html: "\n#image_1593238266 {\n  width: 100%;\n}\n",
                                                        }}
                                                    />
                                                </div>
                                                <div
                                                    className='img has-hover img-auto-width img-hover x md-x lg-x y md-y lg-y'
                                                    id='image_392858288'>
                                                    <div className='img-inner dark'>
                                                        <img
                                                            width={1}
                                                            height={1}
                                                            src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/04/icon-cv.svg'
                                                            className='attachment-large size-large'
                                                            alt=''
                                                            loading='lazy'
                                                        />
                                                    </div>
                                                    <style
                                                        dangerouslySetInnerHTML={{
                                                            __html: "\n#image_392858288 {\n  width: 100%;\n}\n",
                                                        }}
                                                    />
                                                </div>
                                                <p>
                                                    <strong>Gửi CV</strong>
                                                </p>
                                            </div>
                                            <style
                                                dangerouslySetInnerHTML={{
                                                    __html: "\n#col-1677554139 > .col-inner {\n  padding: 15px 15px 15px 15px;\n}\n",
                                                }}
                                            />
                                        </div>
                                        <div
                                            id='col-1563086667'
                                            className='col item-step-recruitment medium-3 small-12 large-3'>
                                            <div className='col-inner'>
                                                <div
                                                    id='text-2224247412'
                                                    className='text font-third'>
                                                    <h3
                                                        style={{
                                                            textAlign: "right",
                                                        }}>
                                                        <span
                                                            style={{
                                                                fontSize:
                                                                    "200%",
                                                            }}>
                                                            02
                                                        </span>
                                                    </h3>
                                                </div>
                                                <div
                                                    className='img has-hover img-auto-width img-not-hover x md-x lg-x y md-y lg-y'
                                                    id='image_974051309'>
                                                    <div className='img-inner dark'>
                                                        <img
                                                            width={1}
                                                            height={1}
                                                            src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/04/icon-test.svg'
                                                            className='attachment-large size-large'
                                                            alt=''
                                                            loading='lazy'
                                                        />
                                                    </div>
                                                    <style
                                                        dangerouslySetInnerHTML={{
                                                            __html: "\n#image_974051309 {\n  width: 100%;\n}\n",
                                                        }}
                                                    />
                                                </div>
                                                <div
                                                    className='img has-hover img-auto-width img-hover x md-x lg-x y md-y lg-y'
                                                    id='image_800022899'>
                                                    <div className='img-inner dark'>
                                                        <img
                                                            width={36}
                                                            height={38}
                                                            src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/07/entry-test-white.png'
                                                            className='attachment-large size-large'
                                                            alt=''
                                                            loading='lazy'
                                                        />
                                                    </div>
                                                    <style
                                                        dangerouslySetInnerHTML={{
                                                            __html: "\n#image_800022899 {\n  width: 100%;\n}\n",
                                                        }}
                                                    />
                                                </div>
                                                <p>
                                                    <strong>Entry test</strong>
                                                </p>
                                            </div>
                                            <style
                                                dangerouslySetInnerHTML={{
                                                    __html: "\n#col-1563086667 > .col-inner {\n  padding: 15px 15px 15px 15px;\n}\n",
                                                }}
                                            />
                                        </div>
                                        <div
                                            id='col-2028017669'
                                            className='col item-step-recruitment medium-3 small-12 large-3'>
                                            <div className='col-inner'>
                                                <div
                                                    id='text-4206297435'
                                                    className='text font-third'>
                                                    <h3
                                                        style={{
                                                            textAlign: "right",
                                                        }}>
                                                        <span
                                                            style={{
                                                                fontSize:
                                                                    "200%",
                                                            }}>
                                                            03
                                                        </span>
                                                    </h3>
                                                </div>
                                                <div
                                                    className='img has-hover img-auto-width img-not-hover x md-x lg-x y md-y lg-y'
                                                    id='image_1905864268'>
                                                    <div className='img-inner dark'>
                                                        <img
                                                            width={1}
                                                            height={1}
                                                            src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/04/icon-interview.svg'
                                                            className='attachment-large size-large'
                                                            alt=''
                                                            loading='lazy'
                                                        />
                                                    </div>
                                                    <style
                                                        dangerouslySetInnerHTML={{
                                                            __html: "\n#image_1905864268 {\n  width: 100%;\n}\n",
                                                        }}
                                                    />
                                                </div>
                                                <div
                                                    className='img has-hover img-auto-width img-hover x md-x lg-x y md-y lg-y'
                                                    id='image_245945663'>
                                                    <div className='img-inner dark'>
                                                        <img
                                                            width={51}
                                                            height={29}
                                                            src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/07/interview-white.png'
                                                            className='attachment-large size-large'
                                                            alt=''
                                                            loading='lazy'
                                                        />
                                                    </div>
                                                    <style
                                                        dangerouslySetInnerHTML={{
                                                            __html: "\n#image_245945663 {\n  width: 100%;\n}\n",
                                                        }}
                                                    />
                                                </div>
                                                <p>
                                                    <strong>Interview</strong>
                                                </p>
                                            </div>
                                            <style
                                                dangerouslySetInnerHTML={{
                                                    __html: "\n#col-2028017669 > .col-inner {\n  padding: 15px 15px 15px 15px;\n}\n",
                                                }}
                                            />
                                        </div>
                                        <div
                                            id='col-649799065'
                                            className='col item-step-recruitment medium-3 small-12 large-3'>
                                            <div className='col-inner'>
                                                <div
                                                    id='text-1215064629'
                                                    className='text font-third'>
                                                    <h3
                                                        style={{
                                                            textAlign: "right",
                                                        }}>
                                                        <span
                                                            style={{
                                                                fontSize:
                                                                    "200%",
                                                            }}>
                                                            04
                                                        </span>
                                                    </h3>
                                                </div>
                                                <div
                                                    className='img has-hover img-auto-width img-not-hover x md-x lg-x y md-y lg-y'
                                                    id='image_1607287170'>
                                                    <div className='img-inner dark'>
                                                        <img
                                                            width={1}
                                                            height={1}
                                                            src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/04/icon-onboard.svg'
                                                            className='attachment-large size-large'
                                                            alt=''
                                                            loading='lazy'
                                                        />
                                                    </div>
                                                    <style
                                                        dangerouslySetInnerHTML={{
                                                            __html: "\n#image_1607287170 {\n  width: 100%;\n}\n",
                                                        }}
                                                    />
                                                </div>
                                                <div
                                                    className='img has-hover img-auto-width img-hover x md-x lg-x y md-y lg-y'
                                                    id='image_712947502'>
                                                    <div className='img-inner dark'>
                                                        <img
                                                            width={26}
                                                            height={37}
                                                            src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/07/onboard-white.png'
                                                            className='attachment-large size-large'
                                                            alt=''
                                                            loading='lazy'
                                                        />
                                                    </div>
                                                    <style
                                                        dangerouslySetInnerHTML={{
                                                            __html: "\n#image_712947502 {\n  width: 100%;\n}\n",
                                                        }}
                                                    />
                                                </div>
                                                <p>
                                                    <strong>Onboard</strong>
                                                </p>
                                            </div>
                                            <style
                                                dangerouslySetInnerHTML={{
                                                    __html: "\n#col-649799065 > .col-inner {\n  padding: 15px 15px 15px 15px;\n}\n",
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className='row show-for-small'
                                        id='row-1669024818'>
                                        <div
                                            id='col-1126020746'
                                            className='col small-12 large-12'>
                                            <div className='col-inner'>
                                                <div className='accordion step-recruitment-mobile'>
                                                    <div className='accordion-item'>
                                                        <a
                                                            href='#'
                                                            className='accordion-title plain active'>
                                                            <button className='toggle'>
                                                                <i className='icon-angle-down' />
                                                            </button>
                                                            <span>
                                                                1. Gửi CV
                                                            </span>
                                                        </a>
                                                        <div
                                                            className='accordion-inner'
                                                            style={{
                                                                display:
                                                                    "block",
                                                            }}>
                                                            <ul>
                                                                <li>
                                                                    Đăng ký trực
                                                                    tiếp ngay
                                                                    tại Website.
                                                                </li>
                                                                <li>
                                                                    Gọi đến số
                                                                    hotline:&nbsp;
                                                                    <a href='tel:0967334520'>
                                                                        0967 334
                                                                        520
                                                                    </a>
                                                                    &nbsp;hoặc
                                                                    Gửi email
                                                                    đến&nbsp;FA@fsoft.com.vn
                                                                </li>
                                                                <li>
                                                                    Inbox
                                                                    Fanpage:{" "}
                                                                    <a href='https://www.facebook.com/FPTSoftware.tuyendung'>
                                                                        FPT
                                                                        Software
                                                                        Academy
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className='accordion-item'>
                                                        <a
                                                            href='#'
                                                            className='accordion-title plain'>
                                                            <button className='toggle'>
                                                                <i className='icon-angle-down' />
                                                            </button>
                                                            <span>
                                                                2. Entry test
                                                            </span>
                                                        </a>
                                                        <div className='accordion-inner'>
                                                            <p>
                                                                Tại phiên xét
                                                                tuyển, bạn sẽ
                                                                tham gia 2 nội
                                                                dung sau:
                                                            </p>
                                                            <p>
                                                                1. Kỳ thi đánh
                                                                giá năng lực
                                                                (Placement
                                                                Test): Bài thi
                                                                đánh giá năng
                                                                lực không chỉ là
                                                                để làm căn cứ
                                                                xét tuyển, cấp
                                                                học bổng mà còn
                                                                là cơ sở để
                                                                giảng viên giảng
                                                                dạy có thêm
                                                                thông tin về học
                                                                viên để xây dựng
                                                                lộ trình học tập
                                                                phù hợp và hỗ
                                                                trợ trong quá
                                                                trình học.
                                                            </p>
                                                            <p>
                                                                2. Buổi Tư vấn
                                                                nghề nghiệp với
                                                                các nội dung:
                                                                Gặp gỡ giảng
                                                                viên, chuyên gia
                                                                giàu kinh
                                                                nghiệm.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='accordion-item'>
                                                        <a
                                                            href='#'
                                                            className='accordion-title plain'>
                                                            <button className='toggle'>
                                                                <i className='icon-angle-down' />
                                                            </button>
                                                            <span>
                                                                3. Interview
                                                            </span>
                                                        </a>
                                                        <div className='accordion-inner'>
                                                            <p>
                                                                Học viên đạt
                                                                điểm bài Entry
                                                                Test tốt sẽ tham
                                                                gia vào vòng
                                                                Interview để
                                                                nhận học bổng
                                                                cao hơn lên tới
                                                                250% học phí
                                                                (tương đương trợ
                                                                cấp dành cho
                                                                Fresher)
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='accordion-item'>
                                                        <a
                                                            href='#'
                                                            className='accordion-title plain'>
                                                            <button className='toggle'>
                                                                <i className='icon-angle-down' />
                                                            </button>
                                                            <span>
                                                                4. Onboard
                                                            </span>
                                                        </a>
                                                        <div className='accordion-inner'>
                                                            <p>
                                                                Bạn sẽ được mời
                                                                đến các cơ sở
                                                                đào tạo của FPT
                                                                Software để nộp
                                                                Hồ sơ nhập học
                                                                và cùng đại diện
                                                                học viện ký Thoả
                                                                thuận cam kết
                                                                đào tạo.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <style
                                    dangerouslySetInnerHTML={{
                                        __html: "\n#section_521892758 {\n  padding-top: 50px;\n  padding-bottom: 50px;\n  background-color: rgb(245, 245, 245);\n}\n",
                                    }}
                                />
                            </section>
                        </div>
                    </main>

                    <div className='show-for-small'>
                        <div className='call-button'>
                            <a
                                href='tel: 0967334520'
                                rel=' nofollow noopenner'
                                target='_blank'>
                                <i className='fa fa-phone' aria-hidden='true' />
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    id='main-menu'
                    className='mobile-sidebar no-scrollbar mfp-hide'>
                    <div className='sidebar-menu no-scrollbar '>
                        <ul className='nav nav-sidebar nav-vertical nav-uppercase'>
                            <li className='menu-item menu-item-type-post_type menu-item-object-page menu-item-533'>
                                <a href='https://fsoft-academy.edu.vn/gioi-thieu/'>
                                    Giới thiệu
                                </a>
                            </li>
                            <li className='menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-423 current_page_item menu-item-429'>
                                <a
                                    href='https://fsoft-academy.edu.vn/tuyen-dung/'
                                    aria-current='page'>
                                    Tuyển dụng
                                </a>
                            </li>
                            <li className='menu-item menu-item-type-post_type menu-item-object-page menu-item-298'>
                                <a href='https://fsoft-academy.edu.vn/dao-tao-mo-rong/'>
                                    Đào tạo mở rộng
                                </a>
                            </li>
                            <li className='menu-item menu-item-type-post_type menu-item-object-page menu-item-524'>
                                <a href='https://fsoft-academy.edu.vn/lich-khai-giang/'>
                                    Lịch khai giảng
                                </a>
                            </li>
                            <li className='menu-item menu-item-type-post_type menu-item-object-page menu-item-430'>
                                <a href='https://fsoft-academy.edu.vn/tin-tuc-su-kien/'>
                                    Tin tức &amp; sự kiện
                                </a>
                            </li>
                            <li className='menu-item menu-item-type-post_type menu-item-object-page menu-item-772'>
                                <a href='https://fsoft-academy.edu.vn/lien-he/'>
                                    Liên hệ
                                </a>
                            </li>
                            <li className='menu-item menu-item-type-custom menu-item-object-custom menu-item-16'>
                                <a href='/du-hoc-nhat-ban/'>Du học Nhật Bản</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        </div>
    );
};

export default RecuitDetailPage;
