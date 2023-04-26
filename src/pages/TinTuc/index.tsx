import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FiChevronRight } from "react-icons/fi";
import "./index.style.scss";

const PageTinTuc: React.FC = () => {
    const [email, setEmail] = useState("");

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    return (
        <div className='Body'>
            <div className='main'>
                <h2 className='custom-top'>Tin tức & Sự kiện</h2>
                <h1 className='custom-text-top'>
                    Các bài viết được cập nhật liên tục trong ngày
                </h1>
                <div className='topMain'>
                    <div className='topTitle'>
                        <p>Tin mới nhất</p>
                    </div>
                    <div className='Search'>
                        <InputGroup className='mb-3'>
                            <Button
                                variant='outline-secondary'
                                id='button-addon1'>
                                <HiMagnifyingGlass />
                            </Button>
                            <Form.Control
                                aria-label='Example text with button addon'
                                aria-describedby='basic-addon1'
                            />
                        </InputGroup>
                    </div>
                </div>
                {/* phan box tin tuc */}
                <div className='container_tintuc'>
                    <div className='item_box'>
                        <div>
                            <a href='https://fsoft-academy.edu.vn/tin-tuc/quy-dinh-ve-viec-dong-phi-bao-luu-hoan-phi-sang-ten-cua-hoc-vien-dao-tao-fpt-software/'>
                                <img
                                    className='image_box'
                                    src='https://fsoft-academy.edu.vn/wp-content/uploads/2022/11/MicrosoftTeams-image-20-360x190.jpg'
                                    alt=''
                                    loading='lazy'></img>
                            </a>
                        </div>
                        <div className='box_title'>
                            <a href='https://fsoft-academy.edu.vn/tin-tuc/quy-dinh-ve-viec-dong-phi-bao-luu-hoan-phi-sang-ten-cua-hoc-vien-dao-tao-fpt-software/'>
                                Quy định về việc đóng phí, bảo lưu, hoàn phí,
                                sang tên của Học Viện Đào Tạo FPT Software
                            </a>
                        </div>
                        <div className='box_content'>
                            Học Viện Đào Tạo FPT Software thông báo về quy định
                            đóng phí, bảo lưu, hoàn...
                        </div>
                        <div className='box_content box_content_footer'>
                            <span>
                                Đăng bởi <b>LinhTDK</b>
                            </span>
                            -<span>November 25, 2022</span>
                        </div>
                    </div>

                    <div className='item_box'>
                        <div>
                            <a href='https://fsoft-academy.edu.vn/blog/chan-dung-nu-tuong-day-ban-linh-cua-fpt-software-academy/'>
                                <img
                                    className='image_box'
                                    src='https://fsoft-academy.edu.vn/wp-content/uploads/2022/10/z3790220927497_d4b69e20df03d2a564d878d43451568a-360x190.jpg'
                                    alt=''
                                    loading='lazy'></img>
                            </a>
                        </div>
                        <div className='box_title'>
                            <a href='https://fsoft-academy.edu.vn/blog/chan-dung-nu-tuong-day-ban-linh-cua-fpt-software-academy/'>
                                Chân dung “nữ tướng” đầy bản lĩnh của FPT
                                Software Academy
                            </a>
                        </div>
                        <div className='box_content'>
                            Với những đức tính vốn có của phụ nữ như kiên trì,
                            tỉ mỉ, chỉn chu cộng...
                        </div>
                        <div className='box_content box_content_footer'>
                            <span>
                                Đăng bởi <b>LinhNTK7</b>
                            </span>
                            -<span>October 13, 2022</span>
                        </div>
                    </div>

                    <div className='hop3 box3_content'>
                        <img
                            className='box3_image'
                            src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/11/4945b61e5a8792d9cb96.jpg'></img>
                        <div className='text'>
                            <h2>ĐĂNG KÝ NHẬN BẢN TIN</h2>
                            <p>
                                FPT Software Academy chính là nơi khởi đầu cho
                                những thành công của các kỹ sư CNTT trong tương
                                lai
                            </p>
                            <span>
                                <input
                                    type='email'
                                    name='your-email'
                                    value={email}
                                    onChange={handleEmailChange}
                                    size={Number(40)}
                                    className='input_email_box'
                                    aria-invalid='false'
                                    placeholder='Nhập địa chỉ email'></input>
                            </span>
                            <input
                                type='submit'
                                value='Đăng ký'
                                className='submit_button'></input>
                        </div>
                    </div>

                    <div className='item_box'>
                        <div>
                            <a href='https://fsoft-academy.edu.vn/cau-chuyen-hoc-vien/minh-da-thu-rat-nhieu-cach-de-can-bang-giua-viec-hoc-va-lam-viec/'>
                                <img
                                    className='image_box'
                                    src='https://fsoft-academy.edu.vn/wp-content/uploads/2022/09/z3751941049212_87e87d65da6f398eaf7778baade2763e-360x190.jpg'
                                    alt=''
                                    loading='lazy'></img>
                            </a>
                        </div>
                        <div className='box_title'>
                            <a href='https://fsoft-academy.edu.vn/cau-chuyen-hoc-vien/minh-da-thu-rat-nhieu-cach-de-can-bang-giua-viec-hoc-va-lam-viec/'>
                                “Mình đã thử rất nhiều cách để cân bằng giữa
                                việc học và làm việc”
                            </a>
                        </div>
                        <div className='box_content'>
                            Đó là những chia sẻ mở đầu của Nguyễn Hữu Hoàng -
                            Hiện đang theo học...
                        </div>
                        <div className='box_content box_content_footer'>
                            <span>
                                Đăng bởi <b>LinhNTK7</b>
                            </span>
                            -<span>September 28, 2022</span>
                        </div>
                    </div>

                    <div className='item_box'>
                        <div>
                            <a href='https://fsoft-academy.edu.vn/tin-tuc-su-kien/cau-chuyen-hoc-vien-tin-tuc-su-kien/gap-go-chang-lop-truong-van-nguoi-me-cua-net-03/'>
                                <img
                                    className='image_box'
                                    src='https://fsoft-academy.edu.vn/wp-content/uploads/2022/09/305205159_1271300200293560_7059571180891054015_n-360x190.webp'
                                    alt=''
                                    loading='lazy'></img>
                            </a>
                        </div>
                        <div className='box_title'>
                            <a href='https://fsoft-academy.edu.vn/tin-tuc-su-kien/cau-chuyen-hoc-vien-tin-tuc-su-kien/gap-go-chang-lop-truong-van-nguoi-me-cua-net-03/'>
                                Gặp gỡ chàng lớp trưởng “vạn người mê” của .Net
                                03
                            </a>
                        </div>
                        <div className='box_content'>
                            Với kim chỉ nam “Công nghệ là phép thuật cuối cùng
                            còn tồn tại trên thế...
                        </div>
                        <div className='box_content box_content_footer'>
                            <span>
                                Đăng bởi <b>LinhNTK7</b>
                            </span>
                            -<span>September 12, 2022</span>
                        </div>
                    </div>

                    <div className='item_box'>
                        <div>
                            <a href='https://fsoft-academy.edu.vn/tin-tuc/lo-trinh-dao-tao-it-business-analyst/'></a>
                        </div>
                        <div className='box_title'>
                            <a href='https://fsoft-academy.edu.vn/tin-tuc/lo-trinh-dao-tao-it-business-analyst/'>
                                Lộ trình đào tạo IT – Business Analyst
                            </a>
                        </div>
                        <div className='box_content'>
                            Khi tham gia chương trình đào tạo tại FA, học viên
                            sẽ nhận được sự hỗ trợ...
                        </div>
                        <div className='box_content box_content_footer'>
                            <span>
                                Đăng bởi <b>GiaDP</b>
                            </span>
                            -<span>July 22, 2022</span>
                        </div>
                    </div>

                    <div className='item_box'>
                        <div>
                            <a href='https://fsoft-academy.edu.vn/tin-tuc/cung-ms-rowena-nang-cap-tieng-anh-giao-tiep-de-tro-thanh-ky-su-lap-trinh-toan-cau/'>
                                <img
                                    className='image_box'
                                    src='https://fsoft-academy.edu.vn/wp-content/uploads/2022/07/294975590_1237700046986909_8951177326666863976_n-360x190.jpeg'
                                    alt='Ms. Rowena D Law-agey, giảng viên tiếng Anh tại FSOFT Academy'
                                    loading='lazy'></img>
                            </a>
                        </div>
                        <div className='box_title'>
                            <a href='https://fsoft-academy.edu.vn/tin-tuc/cung-ms-rowena-nang-cap-tieng-anh-giao-tiep-de-tro-thanh-ky-su-lap-trinh-toan-cau/'>
                                Cùng Ms.Rowena trở thành kỹ sư lập trình toàn
                                cầu
                            </a>
                        </div>
                        <div className='box_content'>
                            Bằng tâm huyết và sự sáng tạo, cô Rowena đã truyền
                            cảm hứng học tiếng Anh...
                        </div>
                        <div className='box_content box_content_footer'>
                            <span>
                                Đăng bởi <b>LinhNTK7</b>
                            </span>
                            -<span>July 22, 2022</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='semi-main'>
                <p className='TitleSide'>Sự kiện nổi bật</p>
                {/* Dau phan su kien        */}
                <div>
                    <div>
                        <img
                            className='ig'
                            src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/11/247320220_421834459456904_7665099779856236013_n-360x230.jpg'></img>
                    </div>
                    <div className='textarea'>
                        <br />
                        <a
                            href='https://www.facebook.com/events/218415163716645/'
                            className='NoneA'>
                            <p className='text-white'>
                                [Livestream] Technology Sharing: How Data & AI
                                Power the New Normal
                            </p>
                        </a>
                        <p className='text_Title'>
                            Thời gian: November 2, 2021
                        </p>
                        <div className='bgXT'>
                            <button className='XemThem'>
                                Xem Thêm <HiMagnifyingGlass />
                            </button>
                        </div>
                    </div>
                </div>

                <div className='mt-half'>
                    <div className='chuongTrinh'>
                        <div className='item-img'>
                            <a href='https://www.facebook.com/events/611998559813799/'>
                                <img
                                    className='Image-icon'
                                    src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/11/Capture-80x80.png'></img>
                            </a>
                        </div>
                        <div className='item-info'>
                            <h3 className='item_titles'>
                                <a
                                    className='blackA'
                                    href='https://www.facebook.com/events/611998559813799/'>
                                    WIN U GAME – Bí quyết “sinh tồn” ở Đại học
                                </a>
                            </h3>
                            <a
                                href='https://www.facebook.com/events/611998559813799/'
                                className='linkXT'>
                                Xem Thêm
                                <FiChevronRight />
                            </a>
                        </div>
                    </div>

                    <div className='chuongTrinh'>
                        <div className='item-img'>
                            <a href='https://www.facebook.com/events/611998559813799/'>
                                <img
                                    className='Image-icon'
                                    src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/11/Capture-1-250x250.png'></img>
                            </a>
                        </div>
                        <div className='item-info'>
                            <h3 className='item_titles'>
                                <a
                                    className='blackA'
                                    href='https://www.facebook.com/events/611998559813799/'>
                                    HaUI Orientation Day 2021
                                </a>
                            </h3>
                            <a
                                href='https://www.facebook.com/events/611998559813799/'
                                className='linkXT'>
                                Xem Thêm
                                <FiChevronRight />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='mt-half'>
                    <div className='item-sidebar'>
                        <div className='item-sidebar-title'>
                            Khoá học nổi bật
                        </div>
                        <div className='sidebar'>
                            <div>
                                <a href='https://fsoft-academy.edu.vn/course/agile-project-management/'>
                                    <img
                                        className='imageBar'
                                        src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/08/Agile-1-400x400.png'></img>
                                </a>
                            </div>
                            <div className='content-sidebar'>
                                <p>
                                    <a
                                        className='wordBar'
                                        href='https://fsoft-academy.edu.vn/course/agile-project-management/'>
                                        Agile Project Management
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className='sidebar'>
                            <div>
                                <a href='https://fsoft-academy.edu.vn/course/web-applications-testing/'>
                                    <img
                                        className='imageBar'
                                        src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/08/WebAppTest-400x400.png'></img>
                                </a>
                            </div>
                            <div className='content-sidebar'>
                                <p>
                                    <a
                                        className='wordBar'
                                        href='https://fsoft-academy.edu.vn/course/agile-project-management/'>
                                        Web Applications Testing
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className='sidebar'>
                            <div>
                                <a href='https://fsoft-academy.edu.vn/course/agile-project-management/'>
                                    <img
                                        className='imageBar'
                                        src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/08/BA-400x400.png'></img>
                                </a>
                            </div>
                            <div className='content-sidebar'>
                                <p>
                                    <a
                                        className='wordBar'
                                        href='https://fsoft-academy.edu.vn/course/it-business-analyst-foundation/'>
                                        IT – Business Analyst Foundation
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className='sidebar'>
                            <div>
                                <a href='https://fsoft-academy.edu.vn/course/fullstack-java-web-developer/'>
                                    <img
                                        className='imageBar'
                                        src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/08/FS.Java_-400x400.png'></img>
                                </a>
                            </div>
                            <div className='content-sidebar'>
                                <p>
                                    <a
                                        className='wordBar'
                                        href='https://fsoft-academy.edu.vn/course/fullstack-java-web-developer/'>
                                        Fullstack Java Web Developer
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className='sidebar'>
                            <div>
                                <a href='https://fsoft-academy.edu.vn/course/front-end-developer/'>
                                    <img
                                        className='imageBar'
                                        src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/08/FE-400x400.png'></img>
                                </a>
                            </div>
                            <div className='content-sidebar'>
                                <p>
                                    <a
                                        className='wordBar'
                                        href='https://fsoft-academy.edu.vn/course/front-end-developer/'>
                                        Front-end Developer
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-half'>
                    <div className='item-sidebar'>
                        <div className='item-sidebar-title'>Đăng ký học</div>
                        <div>
                            <span>
                                <input
                                    type='text'
                                    className='input'
                                    name='your_name'
                                    value-size='40'
                                    aria-required='true'
                                    aria-invalid='false'
                                    placeholder='Họ và tên*'></input>
                            </span>
                            <span>
                                <input
                                    type='tel'
                                    className='input'
                                    name='your_phone'
                                    value-size='40'
                                    aria-required='true'
                                    aria-invalid='false'
                                    placeholder='Số điện thoại*'></input>
                            </span>
                            <span>
                                <input
                                    type='email'
                                    className='input'
                                    name='your_mail'
                                    value-size='40'
                                    aria-invalid='false'
                                    placeholder='Địa chỉ email'></input>
                            </span>
                            <span>
                                <select
                                    name='location'
                                    aria-invalid='false'
                                    className='input'>
                                    <option value='Địa điểm làm việc'>
                                        Địa điểm làm việc
                                    </option>
                                    <option value='Toàn quốc'>Toàn quốc</option>
                                    <option value='Hà Nội'>Hà Nội</option>
                                    <option value='Hồ Chí Minh'>
                                        Hồ Chí Minh
                                    </option>
                                    <option value='Quy Nhơn'>Quy Nhơn</option>
                                    <option value='Tam Kỳ'>Tam Kỳ</option>
                                    <option value='Đà Nẵng'>Đà Nẵng</option>
                                </select>
                            </span>
                            <span>
                                <select
                                    name='technology'
                                    aria-invalid='false'
                                    className='input'>
                                    <option value='Công nghệ'>Công nghệ</option>
                                    <option value='.NET'>.NET</option>
                                    <option value='.NET/SharePoint'>
                                        .NET/SharePoint
                                    </option>
                                    <option value='Agile'>Agile</option>
                                    <option value='Android'>Android</option>
                                    <option value='Angular'>Angular</option>
                                    <option value='Application Consultant'>
                                        Application Consultant
                                    </option>
                                    <option value='Application Security'>
                                        Application Security
                                    </option>
                                    <option value='Business Analyst'>
                                        Business Analyst
                                    </option>
                                    <option value='C/C++'>C/C++</option>
                                    <option value='C/Embedded'>
                                        C/Embedded
                                    </option>
                                    <option value='CAD'>CAD</option>
                                    <option value='Cloud'>Cloud</option>
                                    <option value='Cloud Security'>
                                        Cloud Security
                                    </option>
                                    <option value='Cobol'>Cobol</option>
                                    <option value='Data'>Data</option>
                                    <option value='DevOps'>DevOps</option>
                                    <option value='Erlang'>Erlang</option>
                                    <option value='Flexcube'>Flexcube</option>
                                    <option value='Flutter'>Flutter</option>
                                    <option value='Front-end'>Front-end</option>
                                    <option value='Golang'>Golang</option>
                                    <option value='iOS'>iOS</option>
                                    <option value='Java'>Java</option>
                                    <option value='Khác'>Khác</option>
                                    <option value='Node JS'>Node JS</option>
                                    <option value='OutSystem'>OutSystem</option>
                                    <option value='PHP'>PHP</option>
                                    <option value='Python'>Python</option>
                                    <option value='QA'>QA</option>
                                    <option value='React'>React</option>
                                    <option value='React Native'>
                                        React Native
                                    </option>
                                    <option value='RPA'>RPA</option>
                                    <option value='Technical Consultant'>
                                        Technical Consultant
                                    </option>
                                    <option value='Testing'>Testing</option>
                                    <option value='Thiết kế giảng dạy'>
                                        Thiết kế giảng dạy
                                    </option>
                                    <option value='Tuyển dụng &amp; Thu hút nhân tài'>
                                        Tuyển dụng &amp; Thu hút nhân tài
                                    </option>
                                </select>
                            </span>
                            <span>
                                <select
                                    name='work_type'
                                    aria-invalid='false'
                                    className='input'>
                                    <option value='Thời gian làm việc'>
                                        Thời gian làm việc
                                    </option>
                                    <option value='Full time'>Full time</option>
                                    <option value='Part time'>Part time</option>
                                </select>
                            </span>
                            <div className='checkbox_form'>
                                <label className='checkbox_click'>
                                    <input
                                        type='checkbox'
                                        className='checkbox_input'
                                        name='subcribe_blog[]'
                                        value='Đăng ký nhận tin từ chúng tôi'></input>
                                    <span className='checkbox_content'>
                                        Đăng ký nhận tin từ chúng tôi
                                    </span>
                                </label>
                                <div className='area_submit'>
                                    <input
                                        type='submit'
                                        value='Đăng ký'
                                        className='button_submit'></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageTinTuc;
