import React, { useState, useEffect, useCallback } from "react";
import "./intro.style.scss";
import ScrollTrigger from "react-scroll-trigger";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const IntroductionLandingPage: React.FC = (props) => {
    const [trigger, setTrigger] = useState(false);
    let valueDisplays = document.querySelectorAll(".num");
    let interval = 3000;

    const increment = useCallback(() => {
        valueDisplays.forEach((valueDisplay) => {
            let startValue = 0;
            let endValue = parseInt(valueDisplay.innerHTML);
            let duration = interval / endValue;
            let counter = setInterval(function () {
                if (duration < 1) startValue += 5;
                else startValue += 1;
                valueDisplay.innerHTML = startValue;
                if (startValue == endValue) {
                    if (endValue >= 1000) valueDisplay.innerHTML += "+";
                    clearInterval(counter);
                }
            }, duration);
        });
    }, [trigger]);

    useEffect(() => {
        if (trigger) {
            increment();
        }
    }, [trigger]);
    return (
        <div className='wrapper1'>
            {/* intro */}
            <div className='wrapper'>
                <div className='main'>
                    <div className='content'>
                        <div className='title'>
                            <div className='heading'>
                                <span className='introduce'>Giới Thiệu</span>
                                <span className='span-heading'>
                                    FPT Software Academy
                                </span>
                                <span className='border0'></span>
                            </div>
                            <div className='destion'>
                                <p>
                                    FPT Software Academy là học viện công nghệ
                                    trực thuộc FPT Software dành cho học sinh,
                                    sinh viên, người đi làm có định hướng theo
                                    đuổi ngành Công nghệ.
                                    <br />
                                    Chúng tôi cung cấp các chương trình đào tạo
                                    định hướng ngành khác nhau về phát triển
                                    phần mềm, kiểm thử phần mềm để giúp học
                                    viên:
                                </p>
                                <ul>
                                    <li>Nâng cao năng lực chuyên môn</li>
                                    <li>Có được kinh nghiệm thực tiễn</li>
                                    <li>Cải thiện ngoại ngữ và kỹ năng mềm</li>
                                </ul>
                                <div className='vision'>
                                    <div className='border1'></div>
                                    <strong>Tầm nhìn</strong>
                                </div>
                                <div className='visionDes'>
                                    Trở thành trung tâm đào tạo công nghệ hàng
                                    đầu Việt Nam
                                </div>
                                <div className='vision'>
                                    <div className='border1'></div>
                                    <strong>Sứ mệnh</strong>
                                </div>
                                <div className='visionDes'>
                                    FPT Software Academy là bệ phóng vững chắc
                                    cho những bạn trẻ đang theo đuổi ngành Công
                                    nghệ. Chúng tôi cung cấp nguồn nhân lực chất
                                    lượng cao cho FPT Software và góp phần phát
                                    triển ngành công nghệ Việt Nam
                                </div>
                                <div className='vision'>
                                    <div className='border1'></div>
                                    <strong>Giá trị cốt lõi</strong>
                                </div>
                                <div className='visionDes'>
                                    Tôn đổi đồng – Chí gương sáng: Tôn trọng cá
                                    nhân – Tinh thần đổi mới – Tinh thần đồng
                                    đội, Chí công – Gương mẫu – Sáng suốt.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='image'>
                        <img
                            src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/11/Banner-01-1373x1536.jpg'
                            alt=''
                        />
                    </div>
                </div>
            </div>

            {/* course */}
            <div className='Container'>
                <div className='ScheduTitle'>
                    <h2 className='ScheduH2'>CÁC CHƯƠNG TRÌNH CHÍNH</h2>
                </div>
                <div className='Schedu'>
                    <div className='Train'>
                        <div className='TrainImg'>
                            <img
                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/11/1-CT-Dao-tao-4.jpg'
                                alt=''
                            />
                            <div className='Schedubg'>
                                <img
                                    src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/06/green-left.png'
                                    alt=''
                                />
                            </div>
                        </div>
                        <div className='TrainContent'>
                            <h3>
                                <span className='TrainContentSpan'>
                                    Chương trình đào tạo mở rộng
                                </span>
                            </h3>
                            <p className='TrainContentP'>
                                Chương trình đào tạo dành cho tất cả mọi đối
                                tượng đang theo đuổi khối ngành Công nghệ. Với
                                lộ trình bài bản, phương pháp đào tạo hiện đại
                                cùng chuyên gia Công nghệ đến từ FPT Software,
                                học viên sẽ được cung cấp đầy đủ kiến thức, kỹ
                                năng để có thể làm việc tại dự án.
                            </p>
                            <a href='./Introduce.js' className='Link'>
                                Xem thêm
                            </a>
                        </div>
                    </div>
                </div>

                <div className='Schedu '>
                    <div className='Train Schedu-reverse'>
                        <div className='TrainContent'>
                            <h3>
                                <span className='TrainContentSpan'>
                                    Chương trình thực tập
                                </span>
                            </h3>
                            <p className='TrainContentP'>
                                Chương trình thực tập dành cho tất cả sinh viên
                                đang trong đợt thực tập của nhà trường hoặc muốn
                                củng cố thêm kiến thức về lập trình. Đào tạo tại
                                đơn vị về một ngôn ngữ lập trình trong 2-6
                                tháng. Sau khóa học, sinh viên sẽ nắm chắc hơn
                                kiến thức về lập trình, tự tin hơn khi phỏng vấn
                                và hiểu quy trình làm việc của dự án.
                            </p>
                            <a href='./Introduce.js' className='Link'>
                                Xem thêm
                            </a>
                        </div>
                        <div className='TrainImg'>
                            <img
                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/11/3-CT-Thuc-tap-2.jpg'
                                alt=''
                            />
                            <div className='Schedubg odd'>
                                <img
                                    src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/06/blue-right.png'
                                    alt=''
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Schedu'>
                    <div className='Train'>
                        <div className='TrainImg'>
                            <img
                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/11/1-CT-Dao-tao-4.jpg'
                                alt=''
                            />
                            <div className='Schedubg'>
                                <img
                                    src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/06/orange-left.png'
                                    alt=''
                                />
                            </div>
                        </div>
                        <div className='TrainContent'>
                            <h3>
                                <span className='TrainContentSpan'>
                                    Chương trình Fresher
                                </span>
                            </h3>
                            <p className='TrainContentP'>
                                Chương trình đào tạo Lập trình viên chuyên
                                nghiệp dành cho tất cả sinh viên đang học hoặc
                                đã tốt nghiệp Đại học, Cao đẳng, Trung tâm đào
                                tạo chuyên ngành CNTT hay các ứng viên chuyển
                                ngành nhưng có kiến thức nền tảng về CNTT. Tham
                                gia đào tạo tại đơn vị trong vòng 3-6 tháng và
                                nhận trợ cấp đào tạo hàng tháng lên đến 8M. Sau
                                đào tạo, học viên trở thành nhân viên chính thức
                                và được phân bổ về làm việc tại dự án.
                            </p>
                            <a href='./Introduce.js' className='LinkFresher'>
                                Xem thêm
                            </a>
                        </div>
                    </div>
                </div>

                <div className='Schedu '>
                    <div className='Train Schedu-reverse'>
                        <div className='TrainContent'>
                            <h3>
                                <span className='TrainContentSpan'>
                                    Làm việc tại dự án
                                </span>
                            </h3>
                            <p className='TrainContentP'>
                                Chúng tôi tìm kiếm những kỹ sư CNTT tài năng và
                                có niềm đam mê Công nghệ. Tham gia làm việc tại
                                những dự án có quy mô quốc tế tại FPT Software,
                                bạn sẽ có cơ hội trau dồi kỹ năng, kinh nghiệm
                                với lộ trình phát triển sự nghiệp rõ ràng và thu
                                nhập, đãi ngộ tương xứng.
                            </p>
                            <a href='./Introduce.js' className='LinkIntern'>
                                Các vị trí đang tuyển dụng
                            </a>
                        </div>
                        <div className='TrainImg'>
                            <img
                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/11/Lam-viec-tai-DA.jpg'
                                alt=''
                            />
                            <div className='Schedubg odd'>
                                <img
                                    src='	https://fsoft-academy.edu.vn/wp-content/uploads/2021/06/green-right.png'
                                    alt=''
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* place */}
            <div className='Place'>
                <div className='RowPadding'></div>
                <div className='Row'>
                    <div className='RowContent'>
                        <div className='ContentPlace'>
                            <p className='ContentP'>
                                <span className='TitlePlace'>
                                    {" "}
                                    CƠ SỞ VẬT CHẤT
                                </span>
                            </p>
                            <p className='TextDes'>
                                Nơi khởi đầu cho những thành công, cung cấp và
                                đào tạo nguồn nhân lực IT chất lượng cao cho các
                                dự án lớn trên toàn cầu.
                            </p>
                            <div className='Location'>
                                <div className='LocationItem'>
                                    <div className='BorderPlace'></div>
                                    <div
                                        className='ItemPlace'
                                        onClick={props.onClick}>
                                        <div className='ImgPlace'>
                                            <img
                                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/11/fpt-2.png'
                                                alt=''
                                            />
                                        </div>
                                        <div className='text-place'>
                                            <h4>Hà Nội</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className='LocationItem'>
                                    <div className='BorderPlace'></div>
                                    <div
                                        className='ItemPlace'
                                        onClick={props.onClick}>
                                        <div className='ImgPlace'>
                                            <img
                                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/11/FPT-Da-Nang.jpg'
                                                alt=''
                                            />
                                        </div>
                                        <div className='text-place'>
                                            <h4>Đà Nẵng</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className='LocationItem'>
                                    <div className='BorderPlace'></div>
                                    <div
                                        className='ItemPlace'
                                        onClick={props.onClick}>
                                        <div className='ImgPlace'>
                                            <img
                                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/08/ffc27ce6a5612a5815c842466f39885e-RIOSW.jpg'
                                                alt=''
                                            />
                                        </div>
                                        <div className='text-place'>
                                            <h4>Tp. Hồ Chí Minh</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className='LocationItem'>
                                    <div className='BorderPlace'></div>
                                    <div
                                        className='ItemPlace'
                                        onClick={props.onClick}>
                                        <div className='ImgPlace'>
                                            <img
                                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/11/FPT-can-tho-2.jpeg'
                                                alt=''
                                            />
                                        </div>
                                        <div className='text-place'>
                                            <h4>Cần Thơ</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='DesLocation'>
                                <div className='DesLeft'>
                                    <div className='DesBox'>
                                        <p className='BoxP'>
                                            <strong className='BoxStrong'>
                                                <span className='num'>
                                                    20000
                                                </span>
                                            </strong>
                                            <div className='DesEmployee'>
                                                <span>
                                                    Nhân viên trên toàn cầu
                                                </span>
                                            </div>
                                        </p>
                                    </div>
                                </div>
                                <div className='DesRight'>
                                    <div className='RightBox'>
                                        <p className='RightP'>
                                            <strong className='RightStrong'>
                                                <span>TOP 1</span>
                                            </strong>
                                            <div className='RightEmployee'>
                                                <span>
                                                    Nơi làm việc tốt nhất Việt
                                                    Nam ngành CNTT
                                                </span>
                                            </div>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='RowItems'>
                        <div className='HaNoi'>
                            <div className='RowItem'>
                                <div className='items'>
                                    <img
                                        src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/08/2002141.jpg'
                                        alt=''
                                    />
                                </div>
                                <div className='items'>
                                    <img
                                        src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/08/FPT-Software-Academy-2.jpg'
                                        alt=''
                                    />
                                </div>
                                <div className='items'>
                                    <img
                                        src='	https://fsoft-academy.edu.vn/wp-content/uploads/2021/08/funix-xday38.3-870x490-1.jpg'
                                        alt=''
                                    />
                                </div>
                                <div className='items'>
                                    <img
                                        src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/08/vnp-toa-nha-fpt-10-1620196473.jpg'
                                        alt=''
                                    />
                                </div>
                                <div className='items'>
                                    <img
                                        src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/08/2002141.jpg'
                                        alt=''
                                    />
                                </div>
                                <div className='items'>
                                    <img
                                        src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/08/2002141.jpg'
                                        alt=''
                                    />
                                </div>
                                <div className='items'>
                                    <img
                                        src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/08/2002141.jpg'
                                        alt=''
                                    />
                                </div>
                                <div className='items'>
                                    <img
                                        src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/08/2002141.jpg'
                                        alt=''
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='DaNang'>
                            <div className='RowItem'>
                                <div className='items'>
                                    <img
                                        src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/08/DSC1981.jpeg'
                                        alt=''
                                    />
                                </div>
                                <div className='items'>
                                    <img
                                        src='	https://fsoft-academy.edu.vn/wp-content/uploads/2021/08/vba_9386-00_13_50_481.jpg'
                                        alt=''
                                    />
                                </div>
                                <div className='items'>
                                    <img
                                        src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/08/cong-nghe-0-1597806306-2115-1597829757.jpg'
                                        alt=''
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='tpHCM'>
                            <div className='RowItem'>
                                <div className='items'>
                                    <img
                                        src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/11/6G9A0858.jpg'
                                        alt=''
                                    />
                                </div>
                                <div className='items'>
                                    <img
                                        src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/11/6G9A0536.jpg'
                                        alt=''
                                    />
                                </div>
                                <div className='items'>
                                    <img
                                        src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/12/fpt-can-tho-moi-26.jpeg'
                                        alt=''
                                    />
                                </div>
                                <div className='items'>
                                    <img
                                        src='	https://fsoft-academy.edu.vn/wp-content/uploads/2021/12/6G9A0337.jpg'
                                        alt=''
                                    />
                                </div>
                                <div className='items'>
                                    <img
                                        src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/12/co-hoi-thi-tho-1.jpg'
                                        alt=''
                                    />
                                </div>
                                <div className='items'>
                                    <img
                                        src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/12/05-1536x1024.jpg'
                                        alt=''
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='CanTho'>
                            <div className='RowItem'>
                                <div className='items'>
                                    <img
                                        src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/11/fpt-can-tho-moi-7-1024x683.jpeg'
                                        alt=''
                                    />
                                </div>
                                <div className='items'>
                                    <img
                                        src='	https://fsoft-academy.edu.vn/wp-content/uploads/2021/11/fpt-can-tho-moi-3.jpeg'
                                        alt=''
                                    />
                                </div>
                                <div className='items'>
                                    <img
                                        src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/11/fpt-can-tho-moi-25.jpeg'
                                        alt=''
                                    />
                                </div>
                                <div className='items'>
                                    <img
                                        src='	https://fsoft-academy.edu.vn/wp-content/uploads/2021/12/fpt-can-tho-moi-20.jpeg'
                                        alt=''
                                    />
                                </div>
                                <div className='items'>
                                    <img
                                        src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/12/fpt-can-tho-moi-2.jpeg'
                                        alt=''
                                    />
                                </div>
                                <div className='items'>
                                    <img
                                        src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/12/fpt-can-tho-moi-12.jpeg'
                                        alt=''
                                    />
                                </div>
                                <div className='items'>
                                    <img
                                        src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/12/fpt-can-tho-moi-23.jpeg'
                                        alt=''
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* number */}
            <div className='number'>
                <div className='title'>
                    <h2 className='h2'>CÁC CON SỐ BIẾT NÓI</h2>
                    <span className='des'>
                        FPT Software là Công ty Phần mềm Toàn cầu được xây dựng
                        từ tham vọng của 13 người con Việt Nam với sứ mệnh mang
                        trí tuệ Việt Nam ra thế giới và thay đổi cuộc sống của
                        con người bằng công nghệ.
                    </span>
                </div>
                <ScrollTrigger
                    onEnter={() => {
                        setTrigger(true);
                    }}>
                    <div className='font'>
                        <div className='item'>
                            <div className='icon'>
                                <div className='icon-img'>
                                    <img
                                        src='https://www.iconarchive.com/download/i93809/custom-icon-design/silky-line-user/users.512.png'
                                        alt=''
                                    />
                                </div>
                            </div>
                            <div className='container'>
                                <i className='link_icon'></i>

                                <span className='num'>+3500</span>

                                <span className='text'>
                                    KỸ SƯ CÔNG NGHỆ MỖI NĂM
                                </span>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='icon'>
                                <div className='icon-img'>
                                    <img
                                        src='https://icon-library.com/images/apartment-icon-png/apartment-icon-png-5.jpg'
                                        alt=''
                                    />
                                </div>
                            </div>
                            <div className='container'>
                                <i className='link_icon'></i>
                                <span className='num'>37</span>
                                <span className='text'>
                                    VĂN PHÒNG TRÊN 16 QUỐC GIA
                                </span>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='icon'>
                                <div className='icon-img'>
                                    <img
                                        src='https://cdn3.iconfinder.com/data/icons/science-59/100/science-nodes-3-512.png'
                                        alt=''
                                    />
                                </div>
                            </div>
                            <div className='container'>
                                <i className='link_icon'></i>
                                <span className='num'>68</span>
                                <span className='text'>
                                    ĐỐI TÁC LÀ TRƯỜNG ĐẠI HỌC
                                </span>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='icon'>
                                <div className='icon-img'>
                                    <img
                                        src='https://icons-for-free.com/iconfiles/png/512/map+marker+icon-1320166085262793102.png'
                                        alt=''
                                    />
                                </div>
                            </div>
                            <div className='container'>
                                <i className='link_icon'></i>
                                <span className='num'>3</span>
                                <span className='text'>CƠ SỞ TRÊN CẢ NƯỚC</span>
                            </div>
                        </div>
                    </div>
                </ScrollTrigger>
            </div>

            {/* partner */}
            <div className='title listOfImage'>
                <h2>CÁC ĐỐI TÁC TIÊU BIỂU</h2>
                <span className='span'>
                    Chúng tôi hợp tác với nhiều trường Đại học – Học viên – Cao
                    đẳng trên toàn quốc trong việc xây dựng chương trình đào
                    tạo, thực tập, thực hành và định hướng nghề nghiệp cho sinh
                    viên
                </span>
            </div>
            <div className='Outer'>
                <div className='Inner'>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        loop={true}
                        spaceBetween={60}
                        slidesPerView={3}
                        autoplay={{
                            delay: 500,
                            pauseOnMouseEnter: true,
                            disableOnInteraction: true,
                        }}
                        direction={"horizontal"}
                        speed={1000}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                            dynamicMainBullets: 3,
                        }}
                        breakpoints={{
                            550: {
                                slidesPerView: 4,
                                spaceBetween: 50,
                            },
                            988: {
                                slidesPerView: 5,
                                spaceBetween: 40,
                            },
                            1100: {
                                slidesPerView: 7,
                                spaceBetween: 40,
                            },
                        }}>
                        <SwiperSlide>
                            <img
                                className='Photos'
                                src='	https://fsoft-academy.edu.vn/wp-content/uploads/2021/08/1521197681-brasol.vn-logo-hutech-unnamed.png'
                                alt=''></img>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img
                                className='Photos'
                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/05/kt-quan-su.png'
                                alt=''></img>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img
                                className='Photos'
                                src='	https://fsoft-academy.edu.vn/wp-content/uploads/2021/08/download-2.png'
                                alt=''></img>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img
                                className='Photos'
                                src='	https://fsoft-academy.edu.vn/wp-content/uploads/2021/08/Logo_HCMUAF.png'
                                alt=''></img>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img
                                className='Photos'
                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/05/xd.png'
                                alt=''></img>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img
                                className='Photos'
                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/05/buu-chinh.png'
                                alt=''></img>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img
                                className='Photos'
                                src='	https://fsoft-academy.edu.vn/wp-content/uploads/2021/08/logo1809x996.jpg'
                                alt=''></img>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img
                                className='Photos'
                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/08/siu.png'
                                alt=''></img>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img
                                className='Photos'
                                src='	https://fsoft-academy.edu.vn/wp-content/uploads/2021/05/thuy-loi.png'
                                alt=''></img>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img
                                className='Photos'
                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/08/download-1.png'
                                alt=''></img>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img
                                className='Photos'
                                src='	https://fsoft-academy.edu.vn/wp-content/uploads/2021/05/sp-da-nang.png'
                                alt=''></img>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img
                                className='Photos'
                                src='	https://fsoft-academy.edu.vn/wp-content/uploads/2021/08/UEL-logo-official.png'
                                alt=''></img>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img
                                className='Photos'
                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/05/cong-nghe.png'
                                alt=''></img>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img
                                className='Photos'
                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/08/UIT.png'
                                alt=''></img>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img
                                className='Photos'
                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/08/7-11-Nhan-dien-thuong-hieu.jpg'
                                alt=''></img>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img
                                className='Photos'
                                src='	https://fsoft-academy.edu.vn/wp-content/uploads/2021/05/sp-ky-thuat-da-nang.png'
                                alt=''></img>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img
                                className='Photos'
                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/08/unnamed-1.jpg'
                                alt=''></img>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img
                                className='Photos'
                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/05/dh-vinh.png'
                                alt=''></img>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img
                                className='Photos'
                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/05/ky-thuat-mat-ma.png'
                                alt=''></img>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img
                                className='Photos'
                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/08/download.png'
                                alt=''></img>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                className='Photos'
                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/08/dh-dong-nai.jpg'
                                alt=''></img>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                className='Photos'
                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/05/dh-dong-a.png'
                                alt=''></img>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                className='Photos'
                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/05/dh-duy-tan.png'
                                alt=''></img>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                className='Photos'
                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/05/bk-da-nang.png'
                                alt=''></img>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                className='Photos'
                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/05/dien-luc.png'
                                alt=''></img>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                className='Photos'
                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/04/doitac.png'
                                alt=''></img>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                className='Photos'
                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/05/cong-nghiep.png'
                                alt=''></img>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                className='Photos'
                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/08/HCMUS.png'
                                alt=''></img>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                className='Photos'
                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/08/UT.png'
                                alt=''></img>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                className='Photos'
                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/08/UTE.png'
                                alt=''></img>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                className='Photos'
                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/08/Hitu.png'
                                alt=''></img>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                className='Photos'
                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/05/dh-mo.png'
                                alt=''></img>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                className='Photos'
                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/05/mo-dia-chat.png'
                                alt=''></img>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                className='Photos'
                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/08/HUNRE_Logo.png'
                                alt=''></img>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                className='Photos'
                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/05/khtn.png'
                                alt=''></img>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                className='Photos'
                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/05/dh-khoa-hoc-hue.png'
                                alt=''></img>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                className='Photos'
                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/05/Logo_Hust.png'
                                alt=''></img>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                className='Photos'
                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/08/1521197681-brasol.vn-logo-hutech-unnamed.png'
                                alt=''></img>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                className='Photos'
                                src='	https://fsoft-academy.edu.vn/wp-content/uploads/2021/05/dh-khoa-hoc-hue.png'
                                alt=''></img>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                className='Photos'
                                src='	https://fsoft-academy.edu.vn/wp-content/uploads/2021/05/dh-khoa-hoc-hue.png'
                                alt=''></img>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default IntroductionLandingPage;
