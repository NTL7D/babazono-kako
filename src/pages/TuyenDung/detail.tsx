import React, { useState } from "react";
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
    a21.addEventListener("click", removeSkill);
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
        <div className='section-content'>
            <div className='content-img'>
                <img src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/11/Lich-khai-giang.jpg' />
            </div>
            <div className='section'>
                <div className='left-section'>
                    <div className='left-header'>
                        <div className='left-header-img'>
                            <img src='https://fsoft-academy.edu.vn/wp-content/uploads/2023/03/channels4_profile-360x230.jpg' />
                        </div>
                        <div className='left-header-content'>
                            <span>FULL TIME</span>
                            <h1>
                                [HCM] Fresher SAP FIORI Technical Consultant
                            </h1>
                            <p>
                                Đăng bởi
                                <b> DatPT55 </b>- 17 March 2023
                            </p>
                            <p>
                                <i className='fas fa-map-marker-alt '></i>
                                &nbsp;Hồ Chí Minh
                            </p>
                        </div>
                    </div>
                    <div className='left-section-details'>
                        <div className='left-section-detail'>
                            <ul>
                                <h2>MÔ TẢ CÔNG VIỆC</h2>
                                <li>
                                    Kỹ thuật liên quan đến hệ thống SAP ERP.
                                </li>
                                <li>
                                    Phân tích logic, hệ thống hóa từ yêu cầu
                                    thành phần mềm.
                                </li>
                                <li>Viết tài liệu Unit Test case.</li>
                                <li>
                                    Thuyết trình, trình bày các nội dung trong
                                    công việc thực tiễn.
                                </li>
                            </ul>
                        </div>
                        <div className='left-section-detail'>
                            <ul>
                                <h2>YÊU CẦU</h2>
                                <li>
                                    Sinh viên đang theo học cao đẳng, đại học
                                    với chuyên ngành Hệ thống thông tin, Công
                                    nghệ thông tin hoặc các chuyên ngành liên
                                    quan.
                                </li>
                                <li>
                                    Giao tiếp và đọc hiểu tiếng Anh, ưu tiên các
                                    bạn có TOEIC 550 trở lên hoặc chứng chỉ
                                    tương đương.
                                </li>
                                <li>
                                    Lợi thế với các kiến thức về lập trình
                                    Frontend(HTML5, CSS3, Javascript),
                                    API(Restful API), Backend(C#/Java/NodeJS),
                                    Database (SQL Server,My SQL).
                                </li>
                            </ul>
                        </div>
                        <div className='left-section-detail'>
                            <ul>
                                <h2>QUYỀN LỢI</h2>
                                <li>
                                    Nhận hỗ trợ đào tạo lên đến 20.000.000
                                    VNĐ/khóa.
                                </li>
                                <li>
                                    Sau khi kết thúc đào tạo: Tham gia làm việc
                                    tại các dự án với mức thu nhập hấp dẫn tương
                                    xứng với kỹ năng và kinh nghiệm từ 8.000.000
                                    VNĐ – 14.000.000 VNĐ/tháng.
                                </li>
                                <li>
                                    Hưởng các chính sách như: Hỗ trợ thi các
                                    chứng chỉ chuyên nghiệp quốc tế, hỗ trợ mua
                                    nhà, bảo hiểm FPT care…
                                </li>
                                <li>
                                    Cơ hội phát triển bản thân và làm việc cùng
                                    các chuyên gia của FPT Software và khách
                                    hàng lớn đến từ Mỹ, Hàn, Singapore, Nhật
                                    Bản…
                                </li>
                                <li>
                                    Trải nghiệm văn hóa đặc trưng, môi trường
                                    làm việc hiện đại bậc nhất Việt Nam tại các
                                    Campus của FPT Software
                                </li>
                            </ul>
                        </div>
                        <div className='left-section-detail'>
                            <ul>
                                <h2>LIÊN HỆ</h2>
                                <li>
                                    Số điện thoại &emsp; &emsp;
                                    &emsp;&emsp;&nbsp;: 070 677 29 44 (Ms. Nhi)
                                </li>
                                <li>
                                    Email &emsp; &emsp;
                                    &emsp;&emsp;&emsp;&emsp;&emsp;&ensp;:
                                    FA.HCM@fsoft.com.vn
                                </li>
                                <li>
                                    Fanpage facebook &emsp; &emsp;:
                                    https://www.facebook.com/FPTSoftware.tuyendung/
                                </li>
                            </ul>
                        </div>
                        <div className='left-section-detail'>
                            <h3>Chia sẻ công việc</h3>
                            <a href='https://twitter.com/intent/tweet?url=https://fsoft-academy.edu.vn/recruitment/hcm-fresher-sap-fiori-technical-consultant/&text=[HCM]%20Fresher%20SAP%20FIORI%20Technical%20Consultant'>
                                <i
                                    className='fa fa-twitter'
                                    aria-hidden='true'></i>
                            </a>
                            <a href='https://plus.google.com/share?url=https://fsoft-academy.edu.vn/recruitment/hcm-fresher-sap-fiori-technical-consultant/'>
                                <i
                                    className='fa fa-google-plus'
                                    aria-hidden='true'></i>
                            </a>
                            <a href='https://www.facebook.com/sharer/sharer.php?u=https://fsoft-academy.edu.vn/recruitment/hcm-fresher-sap-fiori-technical-consultant/&t=[HCM]%20Fresher%20SAP%20FIORI%20Technical%20Consultant'>
                                <i className='fa fa-facebook'></i>
                            </a>
                            <a>
                                <i className='fa fa-instagram'></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='right-section'>
                    <div className='right-section-details right-section-footer'>
                        <div className='right-section-footer1'>
                            Hạn ứng tuyển: 31 March, 2023
                        </div>
                        <div
                            className='right-section-footer2'
                            onClick={openPopup}>
                            <p>
                                {" "}
                                Ứng tuyển{" "}
                                <i
                                    className='fa fa-arrow-right'
                                    aria-hidden='true'></i>
                            </p>
                        </div>
                        <div className='right-section-footer3'>
                            <a href='https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ffsoft-academy.edu.vn%2Frecruitment%2Fhcm-fresher-sap-fiori-technical-consultant%2F&t=[HCM]%20Fresher%20SAP%20FIORI%20Technical%20Consultant'>
                                <i
                                    className='fa fa-star-o'
                                    aria-hidden='true'></i>
                                Chia sẻ việc làm
                            </a>
                        </div>
                    </div>
                    <div className='right-section-details'>
                        <div className='right-section-detail-header'>
                            Thông tin công việc
                        </div>
                        <div className='right-section-detail'>
                            <div className='right-section-detail-icon'>
                                <img
                                    src='https://fsoft-academy.edu.vn/wp-content/themes/flatsome-child/assets/images/icon-salary.svg'
                                    alt=''
                                />
                            </div>
                            <div className='right-section-detail-sub'>
                                <h4>Mức lương</h4>
                                <p>5,500,000 - 8,000,000</p>
                            </div>
                        </div>
                        <div className='right-section-detail'>
                            <div className='right-section-detail-icon'>
                                <img
                                    src='https://fsoft-academy.edu.vn/wp-content/themes/flatsome-child/assets/images/icon-exp.svg'
                                    alt=''
                                />
                            </div>
                            <div className='right-section-detail-sub'>
                                <h4>Kinh nghiệm</h4>
                                <p>Chưa có kinh nghiệm</p>
                            </div>
                        </div>
                        <div className='right-section-detail'>
                            <div className='right-section-detail-icon'>
                                <img
                                    src='https://fsoft-academy.edu.vn/wp-content/themes/flatsome-child/assets/images/icon-salary.svg'
                                    alt=''
                                />
                            </div>
                            <div className='right-section-detail-sub'>
                                <h4>Kỹ năng</h4>
                                <p>Technical Consultant</p>
                            </div>
                        </div>
                        <div className='right-section-detail'>
                            <div className='right-section-detail-icon'>
                                <img
                                    src='https://fsoft-academy.edu.vn/wp-content/themes/flatsome-child/assets/images/icon-position.svg'
                                    alt=''
                                />
                            </div>
                            <div className='right-section-detail-sub'>
                                <h4>Vị trí làm việc</h4>
                                <p>Fresher</p>
                            </div>
                        </div>
                        <div className='right-section-detail'>
                            <div className='right-section-detail-icon'>
                                <img
                                    src='https://fsoft-academy.edu.vn/wp-content/themes/flatsome-child/assets/images/icon-location.svg'
                                    alt=''
                                />
                            </div>
                            <div className='right-section-detail-sub'>
                                <h4>Địa điểm</h4>
                                <p>Hồ Chí Minh</p>
                            </div>
                        </div>
                    </div>
                    <div className='right-section-details'>
                        <h3>Quyền lợi</h3>
                        <div className='right-section-detail'>
                            <div className='right-section-detail-icon'>
                                <img src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/04/icon-hand-star.svg' />
                            </div>
                            <div className='right-section-detail-sub'>
                                <p>
                                    Các khoản phụ cấp khác: phụ cấp đi lại, phụ
                                    cấp ăn trưa, phụ cấp onsite, v.v.
                                </p>
                            </div>
                        </div>
                        <div className='right-section-detail'>
                            <div className='right-section-detail-icon'>
                                <img src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/04/icon-ball.svg' />
                            </div>
                            <div className='right-section-detail-sub'>
                                <p>
                                    Sân bóng đá, bóng rổ & bóng chuyền, phòng
                                    tập gym & trung tâm yoga, nhà hàng, canteen,
                                    v.v.
                                </p>
                            </div>
                        </div>
                        <div className='right-section-detail'>
                            <div className='right-section-detail-icon'>
                                <img src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/04/icon-bus.svg' />
                            </div>
                            <div className='right-section-detail-sub'>
                                <p>Xe đưa đón của công ty</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="modal" id='register-recruitment'>
            <div className="modal-content">
                <span className="close">&times;</span>
                <p>Some text in the Modal..</p>
            </div>

        </div> */}
            <div className='custom-popup' id='register-recruitment'>
                <div className='bg-popup'></div>
                <div className='popup-content'>
                    <div className='popup-content-header'>
                        <p>[HCM] Fresher SAP FIORI Technical Consultant</p>
                        <p>Hồ Chí Minh</p>
                    </div>
                    <div className='popup-content-detail'>
                        <div className='form1' role='form'>
                            <form onSubmit={handleSubmit}>
                                <div className='popup-content-form'>
                                    <div className='col small-12'>
                                        <b>Thông tin cá nhân</b>
                                    </div>
                                    <div className='col small-12 large-6'>
                                        <input
                                            className='form-control'
                                            type='text'
                                            name='fullname'
                                            size={Number(40)}
                                            aria-required='true'
                                            aria-invalid='false'
                                            placeholder='Họ và tên *'
                                        />
                                    </div>
                                    <div className='col small-12 large-6'>
                                        <input
                                            className='form-control'
                                            type='text'
                                            name='fullname'
                                            size={Number(40)}
                                            aria-required='true'
                                            aria-invalid='false'
                                            placeholder='Số điện thoại *'
                                        />
                                    </div>
                                    <div className='col small-12 large-6'>
                                        <input
                                            className='form-control'
                                            type='text'
                                            name='fullname'
                                            size={Number(40)}
                                            aria-required='true'
                                            aria-invalid='false'
                                            placeholder='Ngày sinh'
                                        />
                                    </div>
                                    <div className='col small-12 large-6'>
                                        <input
                                            className='form-control'
                                            type='text'
                                            name='fullname'
                                            size={Number(40)}
                                            aria-required='true'
                                            aria-invalid='false'
                                            placeholder='Địa chỉ email'
                                        />
                                    </div>
                                    <div className='col small-12 large-6'>
                                        <select name='gender'>
                                            <option value='- Giới tính -'>
                                                - Giới tính -
                                            </option>
                                            <option value='Nam'>Nam</option>
                                            <option value='Nữ'>Nữ</option>
                                            <option value='Khác'>Khác</option>
                                        </select>
                                    </div>
                                    <div className='col small-12 large-6'>
                                        <select name='location'>
                                            <option value='- Khu vực -'>
                                                - Khu vực -
                                            </option>
                                            <option className='' value='344'>
                                                Toàn quốc
                                            </option>
                                            <option className='' value='345'>
                                                Hà Nội
                                            </option>
                                            <option className='' value='350'>
                                                Hồ Chí Minh
                                            </option>
                                            <option className='' value='351'>
                                                Quy Nhơn
                                            </option>
                                            <option className='' value='356'>
                                                Tam Kỳ
                                            </option>
                                            <option className='' value='22'>
                                                Đà Nẵng
                                            </option>
                                        </select>
                                    </div>
                                    <div className='col small-12'>
                                        <b>Học vấn</b>
                                    </div>
                                    <div className='col small-12 large-6'>
                                        <select name='school'>
                                            <option value='- Tốt nghiệp trường -'>
                                                - Tốt nghiệp trường -
                                            </option>
                                            <option className='' value='72'>
                                                ACT – Học viện Kỹ thuật mật mã
                                            </option>
                                            <option className='' value='109'>
                                                CAOTHANG - Cao Đẳng Kĩ Thuật Cao
                                                Thắng TP HCM
                                            </option>
                                            <option className='' value='108'>
                                                DNU - Đại học Đồng Nai
                                            </option>
                                            <option className='' value='60'>
                                                DONGA - Đại Học Đông Á
                                            </option>
                                            <option className='' value='57'>
                                                DTU - Đại học Duy Tân
                                            </option>
                                            <option className='' value='62'>
                                                DUT – Đại học Bách Khoa (ĐH Đà
                                                Nẵng)
                                            </option>
                                            <option className='' value='71'>
                                                EPU – Đại học Điện lực
                                            </option>
                                            <option className='' value='70'>
                                                HANU – Đại học Hà Nội
                                            </option>
                                            <option className='' value='69'>
                                                HAUI – Đại học Công Nghiệp Hà
                                                Nội
                                            </option>
                                            <option className='' value='95'>
                                                HCMUS - Đại học Khoa học tự
                                                nhiên (Đại học Quốc Gia HCM)
                                            </option>
                                            <option className='' value='96'>
                                                HCMUT - Đại học Bách Khoa (Đại
                                                học Quốc Gia HCM)
                                            </option>
                                            <option className='' value='99'>
                                                HCMUTE - Đại học Sư Phạm Kỹ
                                                Thuật TP HCM
                                            </option>
                                            <option className='' value='105'>
                                                HITC - Cao Đẳng Công Thương TP
                                                HCM
                                            </option>
                                            <option className='' value='68'>
                                                HOU – Đại học Mở
                                            </option>
                                            <option className='' value='67'>
                                                HUMG – Đại học Mỏ địa chất
                                            </option>
                                            <option className='' value='111'>
                                                HUNRE - Đại học Tài nguyên và
                                                Môi trường Hà Nội
                                            </option>
                                            <option className='' value='66'>
                                                HUS – Đại học Khoa học tự nhiên
                                                (Đại học Quốc gia Hà Nội)
                                            </option>
                                            <option className='' value='56'>
                                                HUSC - Đại Học Khoa học Huế
                                            </option>
                                            <option className='' value='75'>
                                                HUST – Đại học Bách Khoa Hà Nội
                                            </option>
                                            <option className='' value='101'>
                                                HUTECH - Đại học Công Nghệ Tp
                                                HCM
                                            </option>
                                            <option className='' value='103'>
                                                LHU - Đại học Lạc Hồng
                                            </option>
                                            <option className='' value='65'>
                                                MTA – Học viện Kỹ thuật quân sư
                                            </option>
                                            <option className='' value='113'>
                                                NEU - Đại học Kinh Tế Quốc Dân
                                            </option>
                                            <option className='' value='104'>
                                                NLU - Đại học Nông Lâm TP HCM
                                            </option>
                                            <option className='' value='64'>
                                                NUCE – Đại học Xây dựng
                                            </option>
                                            <option className='' value='172'>
                                                Other
                                            </option>
                                            <option className='' value='74'>
                                                PTIT – Học viện Bưu chính Viễn
                                                thông
                                            </option>
                                            <option className='' value='110'>
                                                PVDU - Đại học Phạm Văn Đồng
                                            </option>
                                            <option className='' value='100'>
                                                SGU - Đại học Sài Gòn
                                            </option>
                                            <option className='' value='63'>
                                                TLU – Đại học Thủy Lợi
                                            </option>
                                            <option className='' value='112'>
                                                TNU- Đại học Thái Nguyên
                                            </option>
                                            <option className='' value='61'>
                                                UED – Đại học Sư phạm Đà Nẵng
                                            </option>
                                            <option className='' value='102'>
                                                UEL - Đại học Kinh tế Luật (Đại
                                                học Quốc Gia HCM)
                                            </option>
                                            <option className='' value='73'>
                                                UET – Đại học Công Nghệ
                                            </option>
                                            <option className='' value='98'>
                                                UIT - Đại học Công nghệ Thông
                                                Tin (Đại học Quốc Gia HCM)
                                            </option>
                                            <option className='' value='107'>
                                                UTC - Đại học Giao Thông Vận Tải
                                                TP HCM
                                            </option>
                                            <option className='' value='59'>
                                                UTE – Đại học Sư Phạm Kỹ Thuật
                                                Đà Nẵng
                                            </option>
                                            <option className='' value='114'>
                                                UTEHY - Đại học Sư Phạm Kỹ Thuật
                                                Hưng Yên
                                            </option>
                                            <option className='' value='58'>
                                                VINHUNI - Đại Học Vinh
                                            </option>
                                        </select>
                                    </div>
                                    <div className='col small-12 large-6'>
                                        <input
                                            className='form-control'
                                            type='text'
                                            name='fullname'
                                            size={Number(40)}
                                            aria-required='true'
                                            aria-invalid='false'
                                            placeholder='Năm tốt nghiệp'
                                        />
                                    </div>
                                    <div className='col small-12 large-6'>
                                        <select name='faculty'>
                                            <option value='- Khoa -'>
                                                - Khoa -
                                            </option>
                                            <option className='' value='118'>
                                                Cơ khí
                                            </option>
                                            <option className='' value='53'>
                                                Công nghệ thông tin
                                            </option>
                                            <option className='' value='116'>
                                                Điện - Điện tử
                                            </option>
                                            <option className='' value='115'>
                                                Điện tử viễn thông
                                            </option>
                                            <option className='' value='119'>
                                                Khác
                                            </option>
                                            <option className='' value='117'>
                                                Toán tin
                                            </option>
                                        </select>
                                    </div>
                                    <div className='col small-12 large-6'>
                                        <input
                                            className='form-control'
                                            type='text'
                                            name='fullname'
                                            size={Number(40)}
                                            aria-required='true'
                                            aria-invalid='false'
                                            placeholder='Điểm trung bình hệ số 4'
                                        />
                                    </div>
                                    <div className='col small-12 large-6'>
                                        <b>Vị trí</b>
                                        <br />
                                        <select name='job_position'>
                                            <option value='- Chọn vị trí -'>
                                                - Chọn vị trí -
                                            </option>
                                            <option value='Khác'>Khác</option>
                                            <option className='' value='185'>
                                                Chuyên viên
                                            </option>
                                            <option className='' value='184'>
                                                CTV
                                            </option>
                                            <option className='' value='47'>
                                                Fresher
                                            </option>
                                            <option className='' value='46'>
                                                Internship
                                            </option>
                                            <option className='' value='45'>
                                                Junior
                                            </option>
                                            <option className='' value='86'>
                                                On the job training
                                            </option>
                                            <option className='' value='44'>
                                                Senior
                                            </option>
                                        </select>
                                        <div>
                                            <b className='mb-half'>Ngoại ngữ</b>
                                            <br />
                                            <span className='wpcf7-form-control-wrap foreign_language'>
                                                <span className='wpcf7-form-control wpcf7-checkbox'>
                                                    <span className='wpcf7-list-item first'>
                                                        <label>
                                                            <input
                                                                className='form-control'
                                                                type='checkbox'
                                                                name='foreign_language[]'
                                                                value='Tiếng Anh'
                                                            />
                                                            <span className='wpcf7-list-item-label'>
                                                                Tiếng Anh
                                                            </span>
                                                        </label>
                                                    </span>
                                                    <span className='wpcf7-list-item last'>
                                                        <label>
                                                            <input
                                                                className='form-control'
                                                                type='checkbox'
                                                                name='foreign_language[]'
                                                                value='Tiếng Nhật'
                                                            />
                                                            <span className='wpcf7-list-item-label'>
                                                                Tiếng Nhật
                                                            </span>
                                                        </label>
                                                    </span>
                                                </span>
                                            </span>
                                        </div>
                                        <div className='mt-half'>
                                            <b className='mb-half'>
                                                Chứng chỉ ngoại ngữ
                                            </b>
                                            <br />
                                            <span className='wpcf7-form-control-wrap language_certificate'>
                                                <input
                                                    className='form-control'
                                                    type='text'
                                                    name='language_certificate'
                                                    aria-invalid='false'
                                                    placeholder='Chứng chỉ ngoại ngữ'
                                                />
                                            </span>
                                        </div>
                                    </div>
                                    <div className='col small-12 large-6'>
                                        <b>Kỹ năng công việc</b>
                                        <br />
                                        <select name='technology'>
                                            <option value='- Kỹ năng công việc -'>
                                                - Kỹ năng công việc -
                                            </option>
                                            <option className='' value='7'>
                                                .NET
                                            </option>
                                            <option className='' value='83'>
                                                .NET/SharePoint
                                            </option>
                                            <option className='' value='353'>
                                                Agile
                                            </option>
                                            <option className='' value='6'>
                                                Android
                                            </option>
                                            <option className='' value='4'>
                                                Angular
                                            </option>
                                            <option className='' value='85'>
                                                Application Consultant
                                            </option>
                                            <option className='' value='89'>
                                                Application Security
                                            </option>
                                            <option className='' value='92'>
                                                Business Analyst
                                            </option>
                                            <option className='' value='10'>
                                                C/C++
                                            </option>
                                            <option className='' value='13'>
                                                C/Embedded
                                            </option>
                                            <option className='' value='355'>
                                                CAD
                                            </option>
                                            <option className='' value='81'>
                                                Cloud
                                            </option>
                                            <option className='' value='321'>
                                                Cloud Security
                                            </option>
                                            <option className='' value='359'>
                                                Cobol
                                            </option>
                                            <option className='' value='82'>
                                                Data
                                            </option>
                                            <option className='' value='78'>
                                                DevOps
                                            </option>
                                            <option className='' value='175'>
                                                Erlang
                                            </option>
                                            <option className='' value='174'>
                                                Flexcube
                                            </option>
                                            <option className='' value='128'>
                                                Flutter
                                            </option>
                                            <option className='' value='8'>
                                                Front-end
                                            </option>
                                            <option className='' value='15'>
                                                Golang
                                            </option>
                                            <option className='' value='12'>
                                                iOS
                                            </option>
                                            <option className='' value='3'>
                                                Java
                                            </option>
                                            <option className='' value='16'>
                                                Khác
                                            </option>
                                            <option className='' value='9'>
                                                Node JS
                                            </option>
                                            <option className='' value='127'>
                                                OutSystem
                                            </option>
                                            <option className='' value='129'>
                                                PHP
                                            </option>
                                            <option className='' value='5'>
                                                Python
                                            </option>
                                            <option className='' value='342'>
                                                QA
                                            </option>
                                            <option className='' value='94'>
                                                React
                                            </option>
                                            <option className='' value='186'>
                                                React Native
                                            </option>
                                            <option className='' value='171'>
                                                RPA
                                            </option>
                                            <option className='' value='84'>
                                                Technical Consultant
                                            </option>
                                            <option className='' value='11'>
                                                Testing
                                            </option>
                                            <option className='' value='183'>
                                                Thiết kế giảng dạy
                                            </option>
                                            <option className='' value='349'>
                                                Tuyển dụng &amp; Thu hút nhân
                                                tài
                                            </option>
                                        </select>
                                        <div className='other-skill mt-half'>
                                            <div className='list-other-skill'>
                                                <div className='input-group-width-button item-skill'>
                                                    <input
                                                        className='form-control'
                                                        type='text'
                                                        placeholder='Kỹ năng khác'
                                                    />
                                                    <button
                                                        type='button'
                                                        className='remove-skill'
                                                        onClick={removeSkill}>
                                                        <i className='fa fa-minus'></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className='text-right'>
                                                <button
                                                    type='button'
                                                    className='add-skill text-second'
                                                    onClick={addSkill}>
                                                    + Thêm kỹ năng
                                                </button>
                                            </div>
                                        </div>
                                        <div className='mt-half full-width'>
                                            <span className='wpcf7-form-control-wrap work_type'>
                                                <select
                                                    name='work_type'
                                                    className='wpcf7-form-control wpcf7-select form-control select-linked select-label'
                                                    aria-invalid='false'>
                                                    <option value='- Hình thức -'>
                                                        - Hình thức -
                                                    </option>
                                                    <option
                                                        className=''
                                                        value='19'>
                                                        Full time
                                                    </option>
                                                    <option
                                                        className=''
                                                        value='20'>
                                                        Part time
                                                    </option>
                                                </select>
                                            </span>
                                            <br />
                                            {/* <span className="wpcf7-form-control-wrap label_work_type">
                                    <input type="text" name="label_work_type" value="" size="40" className="wpcf7-form-control wpcf7-text hidden" aria-invalid="false"/>
                                </span> */}
                                        </div>
                                    </div>
                                    <div className='col small-12 hide-for-intership'>
                                        <div className='row'>
                                            <div className='col small-12 large-6'>
                                                <b>Kinh nghiệm</b>
                                                <br />
                                                <span className='wpcf7-form-control-wrap experience'>
                                                    <select name='experience'>
                                                        <option value='Kinh nghiệm < 1 năm'>
                                                            Kinh nghiệm &lt; 1
                                                            năm
                                                        </option>
                                                        <option value='Kinh nghiệm < 3 năm'>
                                                            Kinh nghiệm &lt; 3
                                                            năm
                                                        </option>
                                                        <option value='Kinh nghiệm > 3 năm'>
                                                            Kinh nghiệm &gt; 3
                                                            năm
                                                        </option>
                                                    </select>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col small-12'>
                                        <b>Hồ sơ công việc</b>
                                    </div>
                                    <div className='col small-12 large-6'>
                                        <span className='wpcf7-form-control-wrap profile_url'>
                                            <input
                                                type='text'
                                                name='profile_url'
                                                size={Number(40)}
                                                className='wpcf7-form-control wpcf7-text form-control'
                                                aria-invalid='false'
                                                placeholder='Link hồ sơ trực tuyến'
                                            />
                                        </span>
                                    </div>
                                    <div className='col small-12 large-6'>
                                        {/* <span className="wpcf7-form-control-wrap cv">
                                <input className='form-control' type="file" name="cv" size="40" className="wpcf7-form-control wpcf7-file form-control hidden" accept=".doc,.docx,.pdf,.jpeg" aria-invalid="false"/>
                            </span>
                            <p></p> */}
                                        <div className='row'>
                                            <div className='col small-12 medium-6 pt-0'>
                                                <button
                                                    type='button'
                                                    className='btn text-second btn-cv'
                                                    onClick={importData}>
                                                    Chọn file đính kèm
                                                </button>
                                            </div>
                                            <div className='col small-12 medium-6 pt-0'>
                                                <small>
                                                    Attachment format: .doc,
                                                    .docx, .pdf, .jpeg. File
                                                    size &lt; 30Mb.
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='submit-actions'>
                                    <input
                                        type='submit'
                                        className='form-tuyen-dung btn bg-second text-white text-uppercase rounded-large'
                                        value='Đăng ký'
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section'>
                <h2>CÔNG VIỆC LIÊN QUAN</h2>
                <div className='bottom-section-details'>
                    <div className='bottom-section-detail'>
                        <div className='bottom-section-detail-img'>
                            <Link to={"/"}>
                                <img src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/04/logo.svg' />
                                <img
                                    src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/04/logo.svg'
                                    style={{ display: "none" }}
                                />
                            </Link>
                        </div>
                        <div className='bottom-section-detail-contents'>
                            <div className='bottom-section-detail-content'>
                                <Link
                                    to={
                                        "/recruitment/hn-content-marketing-intern"
                                    }>
                                    [HN] Content Marketing Intern
                                </Link>
                                <p>Hà Nội</p>
                            </div>
                            <div className='bottom-section-detail-content-link'>
                                <Link
                                    to={
                                        "/recruitment/hn-content-marketing-intern"
                                    }>
                                    Đăng ký
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='bottom-section-detail'>
                        <div className='bottom-section-detail-img'>
                            <Link to={"/"}>
                                <img src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/04/logo.svg' />
                                <img
                                    src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/04/logo.svg'
                                    style={{ display: "none" }}
                                />
                            </Link>
                        </div>
                        <div className='bottom-section-detail-contents'>
                            <div className='bottom-section-detail-content'>
                                <Link
                                    to={
                                        "/recruitment/hn-fresher-frontend-reactjs-2"
                                    }>
                                    [HN] Fresher Frontend (ReactJS)
                                </Link>
                                <p>Hà Nội</p>
                            </div>
                            <div className='bottom-section-detail-content-link'>
                                <Link
                                    to={
                                        "/recruitment/hn-fresher-frontend-reactjs-2"
                                    }>
                                    Đăng ký
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='bottom-section-detail'>
                        <div className='bottom-section-detail-img'>
                            <Link to={"/"}>
                                <img src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/04/logo.svg' />
                                <img
                                    src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/04/logo.svg'
                                    style={{ display: "none" }}
                                />
                            </Link>
                        </div>
                        <div className='bottom-section-detail-contents'>
                            <div className='bottom-section-detail-content'>
                                <Link
                                    to={"/recruitment/hn-fresher-c-embedded-3"}>
                                    [HN] Fresher C/Embedded
                                </Link>
                                <p>Hà Nội</p>
                            </div>
                            <div className='bottom-section-detail-content-link'>
                                <Link
                                    to={"/recruitment/hn-fresher-c-embedded-3"}>
                                    Đăng ký
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='bottom-section-detail'>
                        <div className='bottom-section-detail-img'>
                            <Link to={"/"}>
                                <img src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/04/logo.svg' />
                                <img
                                    src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/04/logo.svg'
                                    style={{ display: "none" }}
                                />
                            </Link>
                        </div>
                        <div className='bottom-section-detail-contents'>
                            <div className='bottom-section-detail-content'>
                                <Link
                                    to={
                                        "/recruitment/hn-ctv-trien-khai-dao-tao"
                                    }>
                                    [HN] CTV Triển khai Đào tạo
                                </Link>
                                <p>Hà Nội</p>
                            </div>
                            <div className='bottom-section-detail-content-link'>
                                <Link
                                    to={
                                        "/recruitment/hn-ctv-trien-khai-dao-tao"
                                    }>
                                    Đăng ký
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecuitDetailPage;
