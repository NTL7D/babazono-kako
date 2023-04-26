import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import "./primary.style.scss";

const MainFooter: React.FC = () => {
    return (
        <footer id='footer' className='footer-wrapper'>
            {/* dark section footer */}
            <section className='section-footer dark-footer' id='section_dark'>
                <div className='bg-footer section-bg-footer fill-footer bg-loaded-footer'></div>
                <div className='section-content-footer relative-footer'>
                    <div className='row-footer' id='row-footer-dark'>
                        {/* FPT logo */}
                        <div id='col_img' className='col-footer'>
                            <div className='col-inner-footer'>
                                <div className='img-footer' id='fpt_logo'>
                                    <div className='img-inner-footer dark-footer'>
                                        <img
                                            src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/04/logo.svg'
                                            className='attachment-large-logo size-large-logo'
                                            alt='fpt_logo'
                                            loading='lazy'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Our link part */}
                        <div
                            id='col_our_link'
                            className='col-footer medium-3-footer small-12-footer large-3-footer'>
                            <div className='col-inner-footer'>
                                <div
                                    className='container-footer section-title-container-footer footer-title-footer'
                                    style={{ marginBottom: "10px" }}>
                                    <h3 className='section-title-footer section-title-bold-footer'>
                                        <b></b>
                                        <span className='section-title-main-footer'>
                                            OUR LINK
                                        </span>
                                        <b></b>
                                    </h3>
                                </div>
                                {/* link */}
                                {/* Giới thiệu */}
                                <div className='ux-menu-footer stack-footer stack-col-footer justify-start-footer'>
                                    <div className='ux-menu-link-footer-footer flex-footer menu-item'>
                                        <a
                                            className='ux-menu-link__link-footer flex-footer'
                                            href='#'>
                                            <span className='ux-menu-link__text-footer'>
                                                Giới thiệu
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                {/* Tuyển dụng */}
                                <div className='ux-menu stack stack-col-footer justify-start-footer'>
                                    <div className='ux-menu-link-footer flex-footer menu-item'>
                                        <a
                                            className='ux-menu-link__link-footer flex-footer'
                                            href='#'>
                                            <span className='ux-menu-link__text-footer'>
                                                Tuyển dụng
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                {/* Chương trình đào tạo */}
                                <div className='ux-menu stack-footer stack-col-footer justify-start-footer'>
                                    <div className='ux-menu-link-footer flex-footer menu-item'>
                                        <a
                                            className='ux-menu-link__link-footer flex-footer'
                                            href='#'>
                                            <span className='ux-menu-link__text-footer'>
                                                Chương trình đào tạo
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                {/* Tin tức - sự kiện */}
                                <div className='ux-menu-footer stack-footer stack-col-footer justify-start-footer'>
                                    <div className='ux-menu-link-footer flex-footer menu-item'>
                                        <a
                                            className='ux-menu-link__link-footer flex-footer'
                                            href='#'>
                                            <span className='ux-menu-link__text'>
                                                Tin tức - sự kiện
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                {/* Liên hệ */}
                                <div className='ux-menu-footer stack-footer stack-col-footer justify-start-footer'>
                                    <div className='ux-menu-link-footer flex-footer-footer menu-item'>
                                        <a
                                            className='ux-menu-link__link-footer flex-footer'
                                            href='#'>
                                            <span className='ux-menu-link__text-footer'>
                                                Liên hệ
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                {/* Du học */}
                                <div className='ux-menu-footer stack-footer stack-col-footer justify-start-footer'>
                                    <div className='ux-menu-link-footer flex-footer-footer menu-item-footer'>
                                        <a
                                            className='ux-menu-link__link-footer flex-footer'
                                            href='#'>
                                            <span className='ux-menu-link__text-footer'>
                                                Du học
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Thông tin ở Hà Nội */}
                        <div
                            id='col-ha-noi'
                            className='col-footer medium-3-footer large-3-footer'>
                            <div className='col-inner-footer'>
                                {/* Hà Nội Title */}
                                <div
                                    className='container-footer section-title-container footer-title'
                                    style={{ marginBottom: "10px" }}>
                                    <h3 className='section-title-footer section-title-bold-footer'>
                                        <b></b>
                                        <span className='section-title-main-footer'>
                                            hà nội
                                        </span>
                                        <b></b>
                                        <a
                                            href='#'
                                            className='angle-right-icon-footer'>
                                            <BsBoxArrowUpRight />
                                        </a>
                                    </h3>
                                </div>
                                {/* Hà Nội info */}
                                <div id='text_hanoi' className='text-footer'>
                                    <p>
                                        Tòa nhà FPT, 17 Duy Tân, quận cầu Giấy,
                                        Hà Nội
                                    </p>
                                    <p>
                                        Fville - Khu công nghệ cao Hòa Lạc,
                                        Thạch Thất, Hà Nội
                                    </p>
                                    <p>
                                        Email:{" "}
                                        <a href='#'>FA.HN@fsoft.com.vn</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Thông tin ở Đà Nẵng */}
                        <div
                            id='col-da-nang'
                            className='col-footer medium-3-footer large-3-footer'>
                            <div className='col-inner-footer'>
                                {/* Đà Nẵng Title */}
                                <div
                                    className='container-footer section-title-container footer-title'
                                    style={{ marginBottom: "10px" }}>
                                    <h3 className='section-title-footer section-title-bold-footer'>
                                        <b></b>
                                        <span className='section-title-main'>
                                            đà nẵng
                                        </span>
                                        <b></b>
                                        <a
                                            href='#'
                                            className='angle-right-icon-footer'>
                                            <BsBoxArrowUpRight />
                                        </a>
                                    </h3>
                                </div>
                                {/* Đà Nẵng info */}
                                <div id='text_danang' className='text-footer'>
                                    <p>
                                        Tòa nhà FPT complex, đường Nam Kỳ Khởi
                                        Nghĩa, đường Ngũ Hành Sơn, TP Đà Nẵng
                                    </p>
                                    <p>
                                        Tòa nhà FPT Massda, đường số 01, KCN An
                                        Lộc, Sơn Trà, Đà Nẵng
                                    </p>
                                    <p>
                                        Email:{" "}
                                        <a href='#'>FA.DN@fsoft.com.vn</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Thông tin ở Quy Nhơn */}
                        <div
                            id='col-quy-nhon'
                            className='col-footer medium-3-footer large-3-footer'>
                            <div className='col-inner-footer'>
                                {/* Quy Nhơn Title */}
                                <div
                                    className='container-footer section-title-container footer-title'
                                    style={{ marginBottom: "10px" }}>
                                    <h3 className='section-title-footer section-title-bold-footer'>
                                        <b></b>
                                        <span className='section-title-main-footer'>
                                            quy nhơn
                                        </span>
                                        <b></b>
                                        <a
                                            href='#'
                                            className='angle-right-icon-footer'>
                                            <BsBoxArrowUpRight />
                                        </a>
                                    </h3>
                                </div>
                                {/* Quy Nhơn info */}
                                <div id='text_quynhon' className='text-footer'>
                                    <p>
                                        8 Biên Cương, Ngô Mây, Thành phố Qui
                                        Nhơn, Bình Định 55000
                                    </p>
                                    <p>
                                        Email:{" "}
                                        <a href='#'>FA.DN@fsoft.com.vn</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* For Spacing */}
                        <div
                            className='col-footer medium-3-footer large-3-footer'
                            id='space-div'>
                            <div className='col-inner-footer'>
                                <div
                                    id='wanna_be_a_foolish_burial'
                                    className='text'></div>
                            </div>
                        </div>
                        {/* Thông tin ở Hồ Chí Minh */}
                        <div
                            id='col-ho-chi-minh'
                            className='col-footer medium-3-footer large-3-footer'>
                            <div className='col-inner-footer'>
                                {/* Hồ Chí Minh Title */}
                                <div
                                    className='container-footer section-title-container footer-title'
                                    style={{ marginBottom: "10px" }}>
                                    <h3 className='section-title-footer section-title-bold-footer'>
                                        <b></b>
                                        <span className='section-title-main'>
                                            hồ chí minh
                                        </span>
                                        <b></b>
                                        <a
                                            href='#'
                                            className='angle-right-icon-footer'>
                                            <BsBoxArrowUpRight />
                                        </a>
                                    </h3>
                                </div>
                                {/* Hồ Chí Minh info */}
                                <div
                                    id='text_hochiminh'
                                    className='text-footer'>
                                    <p>
                                        Tòa nhà FTown, Lô số 2, đường D1, khu
                                        Công nghệ cao quận 9, TP. Hồ Chí Minh
                                    </p>
                                    <p>
                                        Email:{" "}
                                        <a href='#'>FA.HCM@fsoft.com.vn</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Thông tin ở Cần Thơ */}
                        <div
                            id='col-can-tho'
                            className='col-footer medium-3-footer large-3-footer'>
                            <div className='col-inner-footer'>
                                {/* Cần Thơ Title */}
                                <div
                                    className='container-footer section-title-container footer-title'
                                    style={{ marginBottom: "10px" }}>
                                    <h3 className='section-title-footer section-title-bold-footer'>
                                        <b></b>
                                        <span className='section-title-main'>
                                            cần thơ
                                        </span>
                                        <b></b>
                                        <a
                                            href='#'
                                            className='angle-right-icon-footer'>
                                            <BsBoxArrowUpRight />
                                        </a>
                                    </h3>
                                </div>
                                {/* Cần Thơ info */}
                                <div id='text_cantho' className='text-footer'>
                                    <p>
                                        Tòa nhà Hạnh Phúc, Tầng 6, 55 Cách Mạng
                                        Tháng Tám, P An Hòa, Q.Ninh Kiều, TP.Cần
                                        Thơ
                                    </p>
                                    <p>
                                        Email:{" "}
                                        <a href='#'>FA.HCM@fsoft.com.vn</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* light section footer */}
            <section className='section light' id='sectionlight'>
                <div className='bg bg-fill fill section-bg bg-loaded'></div>
                <div className='section-content relative'>
                    <div className='row' id='row-footer-light'>
                        {/* Link các trang mạng xã hội */}
                        <div
                            id='social-app-link'
                            className='col-footer medium-3-footer large-3-footer'>
                            <div className='col-inner-footer'>
                                <p>
                                    <strong>POWERED BY</strong>
                                </p>
                                {/* Logo phần dưới */}
                                <div className='img-logo' id='fpt-logo-light'>
                                    <div className='img-inner-logo dark'>
                                        <img
                                            src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/04/logo.svg'
                                            className='attachment-large-logo size-large-logo'
                                            alt='fpt_logo'
                                            loading='lazy'
                                        />
                                    </div>
                                </div>
                                <p>
                                    <strong>FOLLOW US</strong>
                                </p>
                                {/* Phần tương tác */}
                                <div className='text social-footer'>
                                    <div
                                        className='like-button'
                                        id='facebook-text'>
                                        <span className='phan-ruot'>
                                            <a
                                                href='#'
                                                className='theo-doi icon-like'>
                                                <AiOutlineLike />
                                                Theo dõi 86k
                                            </a>
                                        </span>
                                    </div>
                                    <p>
                                        <a href='https://www.youtube.com/channel/UCydxL-Kg0hxeZ5V_V9eOMTQ'>
                                            <img
                                                className='alignnone ytb-icon'
                                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/04/ytb.svg'
                                                alt='youtube-icon'></img>
                                        </a>
                                        <a href='#'>
                                            <img
                                                className='alignnone google-icon'
                                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/04/gg.svg'></img>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            id='form-col'
                            className='col-footer medium-9-footer large-9-footer'>
                            <div className='col-inner-footer'>
                                {/* Gia nhập title */}
                                <p>
                                    <span style={{ fontSize: "110%" }}>
                                        <strong>
                                            GIA NHẬP FPT SOFTWARE ACADEMY
                                        </strong>
                                    </span>
                                </p>
                                <div
                                    className='gia-nhap-form'
                                    role='form'
                                    id='form-gia-nhap'>
                                    {/* Hiện thông báo nhập thông tin sai */}
                                    <div className='screen-reader'></div>
                                    {/* form chính */}
                                    <form
                                        action='#'
                                        method='POST'
                                        className='form-init'>
                                        <div style={{ display: "none" }}></div>
                                        <div className='row-footer row-special'>
                                            {/* Nhập họ và tên */}
                                            <div className='col-footer medium-4-footer large-4-footer pb-0'>
                                                <div className='col-inner-footer input-col'>
                                                    <span className='blockdisplay span-your-name'>
                                                        <input
                                                            type='text'
                                                            name='fullname'
                                                            className='control-text input-field'
                                                            aria-required='true'
                                                            aria-invalid='false'
                                                            placeholder='Họ và tên *'
                                                        />
                                                    </span>
                                                </div>
                                            </div>
                                            {/* Nhập số điện thoại */}
                                            <div className='col-footer medium-4-footer large-4-footer pb-0'>
                                                <div className='col-inner-footer input-col'>
                                                    <span className='blockdisplay span-phone-number'>
                                                        <input
                                                            type='text'
                                                            name='phonenum'
                                                            className='control-text input-field'
                                                            aria-required='true'
                                                            aria-invalid='false'
                                                            placeholder='Số diện thoại *'
                                                        />
                                                    </span>
                                                </div>
                                            </div>
                                            {/* Nhập Email */}
                                            <div className='col-footer medium-4-footer large-4-footer pb-0'>
                                                <div className='col-inner-footer input-col'>
                                                    <span className='blockdisplay span-email'>
                                                        <input
                                                            type='text'
                                                            name='email'
                                                            className='control-text input-field'
                                                            aria-required='true'
                                                            aria-invalid='false'
                                                            placeholder='Địa chỉ Email *'
                                                        />
                                                    </span>
                                                </div>
                                            </div>
                                            {/* Nhập địa chỉ làm việc */}
                                            <div className='col-footer medium-4-footer large-4-footer pb-0'>
                                                <div className='col-inner-footer select-col'>
                                                    <span className='blockdisplay span-address'>
                                                        <select
                                                            name='address'
                                                            className='control-select select-option'
                                                            aria-invalid='false'>
                                                            <option value='Địa chỉ làm việc'>
                                                                Địa chỉ làm việc
                                                            </option>
                                                            <option value='Toàn quốc'>
                                                                Toàn quốc
                                                            </option>
                                                            <option value='Hà Nội'>
                                                                Hà Nội
                                                            </option>
                                                            <option value='Hồ Chí Minh'>
                                                                Hồ Chí Minh
                                                            </option>
                                                            <option value='Quy Nhơn'>
                                                                Quy Nhơn
                                                            </option>
                                                            <option value='Tam Kỳ'>
                                                                Tam Kỳ
                                                            </option>
                                                            <option value='Đà Nẵng'>
                                                                Đà Nẵng
                                                            </option>
                                                        </select>
                                                    </span>
                                                </div>
                                            </div>
                                            {/* Nhập công nghệ muốn học */}
                                            <div className='col-footer medium-4-footer large-4-footer pb-0'>
                                                <div className='col-inner-footer select-col'>
                                                    <span className='blockdisplay span-techno'>
                                                        <select
                                                            name='techno'
                                                            className='control-select select-option'
                                                            aria-invalid='false'>
                                                            <option value='Công Nghệ'>
                                                                Công Nghệ
                                                            </option>
                                                            <option value='.NET'>
                                                                .NET
                                                            </option>
                                                            <option value='.NET/SharePoint'>
                                                                .NET/SharePoint
                                                            </option>
                                                            <option value='Agile'>
                                                                Agile
                                                            </option>
                                                            <option value='Android'>
                                                                Android
                                                            </option>
                                                            <option value='Angular'>
                                                                Angular
                                                            </option>
                                                            <option value='Application Consultant'>
                                                                Application
                                                                Consultant
                                                            </option>
                                                            <option value='Application Security'>
                                                                Application
                                                                Security
                                                            </option>
                                                            <option value='Bussiness Analyst'>
                                                                Bussiness
                                                                Analyst
                                                            </option>
                                                            <option value='C/C++'>
                                                                C/C++
                                                            </option>
                                                            <option value='C/Embeded'>
                                                                C/Embeded
                                                            </option>
                                                            <option value='CAD'>
                                                                CAD
                                                            </option>
                                                            <option value='Cloud'>
                                                                Cloud
                                                            </option>
                                                            <option value='Cloud Security'>
                                                                Cloud Security
                                                            </option>
                                                            <option value='Cobol'>
                                                                Cobol
                                                            </option>
                                                            <option value='Data'>
                                                                Data
                                                            </option>
                                                            <option value='DevOps'>
                                                                DevOps
                                                            </option>
                                                            <option value='Erlang'>
                                                                Erlang
                                                            </option>
                                                            <option value='Flexcube'>
                                                                Flexcube
                                                            </option>
                                                            <option value='Flutter'>
                                                                Flutter
                                                            </option>
                                                            <option value='Front-end'>
                                                                Front-end
                                                            </option>
                                                            <option value='Golang'>
                                                                Golang
                                                            </option>
                                                            <option value='IOS'>
                                                                IOS
                                                            </option>
                                                            <option value='Java'>
                                                                Java
                                                            </option>
                                                            <option value='Khác'>
                                                                Khác
                                                            </option>
                                                            <option value='Outsystem'>
                                                                Outsystem
                                                            </option>
                                                            <option value='PHP'>
                                                                PHP
                                                            </option>
                                                            <option value='Python'>
                                                                Python
                                                            </option>
                                                            <option value='QA'>
                                                                QA
                                                            </option>
                                                            <option value='React'>
                                                                React
                                                            </option>
                                                            <option value='React Native'>
                                                                React Native
                                                            </option>
                                                            <option value='RPA'>
                                                                RPA
                                                            </option>
                                                            <option value='Technical Consultant'>
                                                                Technical
                                                                Consultant
                                                            </option>
                                                            <option value='Testing'>
                                                                Testing
                                                            </option>
                                                            <option value='Thiết kế giảng dạy'>
                                                                Thiết kế giảng
                                                                dạy
                                                            </option>
                                                            <option value='Tuyển dụng & thu hút nhân tài'>
                                                                Tuyển dụng & thu
                                                                hút nhân tài
                                                            </option>
                                                        </select>
                                                    </span>
                                                </div>
                                            </div>
                                            {/* Nhập thời gian làm việc */}
                                            <div className='col-footer medium-4-footer large-4-footer pb-0'>
                                                <div className='col-inner-footer select-col'>
                                                    <div className='input-with-button'>
                                                        <span className='blockdisplay span-time'>
                                                            <select
                                                                name='time'
                                                                className='control-select select-option'
                                                                aria-invalid='false'>
                                                                <option value='Thời gian làm việc'>
                                                                    Thời gian
                                                                    làm việc
                                                                </option>
                                                                <option value='Fulltime'>
                                                                    Full time
                                                                </option>
                                                                <option value='Parttime'>
                                                                    Part time
                                                                </option>
                                                            </select>
                                                        </span>
                                                        <p></p>
                                                        {/* Submit button */}
                                                        <div className='submit-action-button'>
                                                            <div>
                                                                <input
                                                                    type='submit'
                                                                    value='>'
                                                                    className='submit-button-footer'></input>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='end-of-footer'>
                <div className='automargin'>
                    <div className='for-responsive'>
                        <div className='copyright-footer'>
                            © 2019 Fpt Software
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default MainFooter;
