import React from "react";
import "./intro.style.scss";

const InternshipIntroPage: React.FC = () => {
    return (
        <div>
            <div className='wrapper'>
                <section className='main'>
                    <div className='head'></div>
                </section>
                <section className='youtube'>
                    <div className='youtube-content'>
                        <div className='youtube-left'>
                            <div className='video'>
                                <iframe
                                    loading='lazy'
                                    title='Fresher Academy - Internship Open Day 2019 - Tân Binh nhập ngũ'
                                    src='https://www.youtube.com/embed/UzoR_LwgXrY?feature=oembed'
                                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'></iframe>
                            </div>
                        </div>
                        <div className='youtube-right'>
                            <div className='right-content'>
                                <div className='content'>
                                    <h3>Become a Master Coder</h3>
                                    <div>
                                        Mỗi năm, FPT Software Academy hợp tác
                                        với hơn 60 trường đại học trên cả nước
                                        tổ chức chương trình thực tập cho hàng
                                        chục nghìn sinh viên.
                                    </div>
                                    <p>Why work with us</p>
                                    <span>13,000+</span>
                                    <div>Học viên</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='middle'>
                    <div className='main-content'>
                        <div className='main-left'>
                            <div className='left-des'>
                                <div className='inner-left'>
                                    <div className='left'>
                                        <div className='inner'></div>
                                        <strong>Đối tượng tham gia</strong>
                                    </div>
                                    <p>
                                        Sinh viên CNTT đang trong đợt thực tập
                                        của nhà trường
                                        <br />
                                        Sinh viên đã tốt nghiệp, các ứng viên
                                        chuyển ngành có kiến thức nền tảng về
                                        CNTT và muốn củng cố thêm kiến thức về
                                        lập trình.
                                    </p>
                                </div>
                                <div className='inner-left'>
                                    <div className='left'>
                                        <div className='inner1'></div>
                                        <strong>Yêu cầu</strong>
                                    </div>
                                    <p>
                                        Có kiến thức cơ bản về CNTT, nắm vững
                                        một ngôn ngữ lập trình. Vượt qua vòng
                                        Entry Test. <br />
                                        Có thể đọc hiểu kiến thức tiếng Anh ở
                                        mức căn bản
                                    </p>
                                </div>
                                <div className='inner-left'>
                                    <div className='left'>
                                        <div className='inner2'></div>
                                        <strong>Nhu cầu tuyển</strong>
                                    </div>
                                    <p>Tất cả các tháng trong năm</p>
                                </div>
                            </div>
                        </div>
                        <div className='main-right'>
                            <img
                                src='	https://fsoft-academy.edu.vn/wp-content/uploads/2021/11/Thuc-tap-2-1024x739.jpg'
                                alt=''
                            />
                        </div>
                    </div>
                    <div className='main-content2'>
                        <div className='main-right1'>
                            <img
                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/11/Thuc-tap-1-1024x739.jpg'
                                alt=''
                            />
                        </div>
                        <div className='main-left1'>
                            <div className='left-des2'>
                                <div className='inner-left'>
                                    <div className='left'>
                                        <div className='inner'></div>
                                        <strong>Hình thức đào tạo</strong>
                                    </div>
                                    <p>
                                        Học viên tham gia chương trình thực tập
                                        sẽ được đào tạo tại đơn vị trong vòng
                                        2-6 tháng tại một trong những Campus đẹp
                                        và hiện đại nhất Việt Nam của FPT
                                    </p>
                                </div>
                                <div className='inner-left'>
                                    <div className='left'>
                                        <div className='inner1'></div>
                                        <strong>Nội dung đào tạo</strong>
                                    </div>
                                    <p>
                                        Học viên sẽ được học chuyên sâu về kỹ
                                        năng lập trình, được tham gia các khóa
                                        kỹ năng mềm để cải thiện: khả năng xử lý
                                        vấn đề, kỹ năng làm việc nhóm, kỹ năng
                                        thuyết trình; nâng cao trình độ ngoại
                                        ngữ qua các Câu lạc bộ tiếng Anh và tham
                                        gia các dự án giả lập để làm quen với
                                        môi trường dự án.
                                    </p>
                                </div>
                                <div className='inner-left'>
                                    <div className='left'>
                                        <div className='inner2'></div>
                                        <strong>Cơ hội</strong>
                                    </div>
                                    <p>
                                        Học viên sẽ nắm chắc hơn kiến thức về
                                        lập trình. Tự tin hơn khi phỏng vấn và
                                        hiểu quy trình làm việc của dự án Học
                                        viên được trải nghiệm môi trường dự án
                                        thực tế, có thêm kinh nghiệm trong công
                                        việc, được trả lương nếu đáp ứng yêu cầu
                                        công việc. <br />
                                        Sau đào tạo, học viên có cơ hội tham gia
                                        chương trình Fresher hoặc trở thành nhân
                                        viên chính thức tại Công ty. Các vị trí
                                        đang tuyển dụng
                                    </p>
                                </div>
                                <div className='inner-left'>
                                    <div className='left'>
                                        <div className='inner'></div>
                                        <strong>Công nghệ đào tạo</strong>
                                    </div>
                                    <p>
                                        Java, .NET, C/C++, Test, Android,
                                        Embedded… (tùy theo thời điểm)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default InternshipIntroPage;
