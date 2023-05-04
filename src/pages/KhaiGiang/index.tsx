import React from "react";
import Table from "./table";
import "./index.style.scss";

const PageKhaiGiang: React.FC = () => {
    return (
        <main id='main'>
            <div id='content' className='content-area' role='main'>
                {/* Hình dưới navbar */}
                <section className='section-main' id='section-image'>
                    <div className='main-bg-fill'></div>
                    <div className='section-content'>
                        <div className='main-row row-collapse' id='main-row'>
                            <div
                                className='main-img-large'
                                id='img-on-header-main-large'>
                                <div className='inner-image-dark'>
                                    <img
                                        src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/11/Lich-khai-giang.jpg'
                                        className='img-src-large-attachment'
                                        alt='unknow'
                                        loading='lazy'></img>
                                </div>
                            </div>
                            {/* Hình ẩn */}
                            <div
                                className='main-img-large-hidden'
                                id='img-on-header-main-large'>
                                <div className='inner-image-dark'>
                                    <img
                                        src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/11/Banner-khai-giang-02-02-1024x1024.jpg'
                                        className='img-src-large-attachment'
                                        alt='unknow'
                                        loading='lazy'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* title lịch khai giảng */}
                <div
                    className='custom-section-title small-border'
                    style={{ marginTop: "25px" }}>
                    <h1 className='section-title-normal'>
                        <b></b>
                        <span className='custom-title-span'>
                            Lịch khai giảng
                        </span>
                        <b></b>
                    </h1>
                </div>
                {/* Phần cập nhật thông tin mới */}
                <section className='section-main' id='another-title'>
                    <div className='main-bg-fill'></div>
                    <div className='section-content'>
                        <div className='another-row'>
                            <div
                                className='another-col large-12-main'
                                id='col-update-info'>
                                <div className='another-col-inner'>
                                    <div className='text-info' id='text-info'>
                                        <h2 className='text-h2'>
                                            <span className='text-update'>
                                                Cập nhật thông tin mới nhất tại
                                                FPT Software Academy!
                                            </span>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* danh sách đăng ký */}
                <section
                    className='section-main section-list'
                    style={{ paddingTop: "0" }}>
                    <div className='section-content'>
                        <div className='container-list'>
                            <form
                                className='form-filter'
                                action='#'
                                method='GET'>
                                {/* hiện vùng cho màn hình nhỏ */}
                                <select
                                    name='tax[location]'
                                    className='show-for-small'>
                                    <option value=''>Tất cả</option>
                                    <option value='Toàn quốc'>Toàn quốc</option>
                                    <option value='Hà Nôi'>Hà Nội</option>
                                    <option value='Hồ Chí Minh'>
                                        Hồ Chí Minh
                                    </option>
                                    <option value='Quy Nhơn'>Quy Nhơn</option>
                                    <option value='Tam Kỳ'>Tam Kỳ</option>
                                    <option value='Đà Nẵng'>Đà Nẵng</option>
                                </select>
                                {/* Danh sách khóa học */}
                                <Table />
                                <div className='justify-end-schedule'></div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default PageKhaiGiang;
