import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";
import data from "./fakeData.json";
import "./index.style.scss";

type Data = {
    products: Product[];
};

type Product = {
    id: number;
    title: string;
    name: string;
    thumbnail: string;
    image: string;
};
const HomePage: React.FC = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const swiperRef = useRef(null);
    const [posts, setPosts] = useState([]);
    const [activePage, setActivePage] = useState(1);
    const [postsPerPage] = useState(6);

    useEffect(() => {
        const updateWindowDimensions = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener("resize", updateWindowDimensions);
        return () =>
            window.removeEventListener("resize", updateWindowDimensions);
    });
    const handleClick = (myLink: any) => () => {
        window.location.href = myLink;
    };

    useEffect(() => {
        const fetchPosts = async (data: Data) => {
            setPosts(data.products);
        };

        fetchPosts();
    }, []);
    const indexOfLastPost = activePage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(posts.length / postsPerPage);
    const totalPosts = posts.length;
    const [autoSelect, setAutoSelect] = useState(0);
    const [currentItemIndex, setCurrentItemIndex] = useState("");
    const [currentItemDetail, setCurrentItemDetail] = useState("");
    const [currentItemContent, setCurrentItemContent] = useState("");
    const [currentItemName, setCurrentItemName] = useState("");

    function commonFunc(comp: string, PostDetail: string) {
        const prevSelected = document.getElementsByClassName("item-selected");
        const imageSelected = document.getElementById(comp);
        const currentSelected = imageSelected?.parentElement;
        if (prevSelected.length === 0) {
            currentSelected?.classList.add("item-selected");
        } else {
            const existSelected = prevSelected[0];
            existSelected.classList.remove("item-selected");
            currentSelected?.classList.add("item-selected");
        }
        setCurrentItemIndex(`${PostDetail.id}/${totalPosts}`);
        setCurrentItemDetail(`${PostDetail.title}`);
        setCurrentItemName(`${PostDetail.name}`);
        if (typeof PostDetail.images === "string") {
            setCurrentItemContent(`${PostDetail.images}`);
        } else {
            const a = PostDetail.images.map((item, i) => {
                let index = item.indexOf(":");
                let title = item.substr(0, index + 1);
                let description = item.substr(index + 1);
                if (description.includes("[")) {
                    description = description
                        .replace(/[\[\]']+/g, "")
                        .replaceAll("\\", "")
                        .replaceAll('"', "")
                        .split(",");
                    return (
                        <li key={i}>
                            <strong>{title}</strong>
                            <ul>
                                {description.map((des, index) => {
                                    return <li key={index}>{des}</li>;
                                })}
                            </ul>
                        </li>
                    );
                } else {
                    return (
                        <li key={i}>
                            <strong>{title}</strong>
                            <span>{description}</span>
                        </li>
                    );
                }
            });
            const b = <ul>{a}</ul>;
            setCurrentItemContent(b);
        }
    }

    //dùng để tự động lấy image đầu của mỗi trang mỗi khi render
    useEffect(() => {
        setAutoSelect(indexOfFirstPost);
    });

    //dùng để cập nhật tự động chọn vào image đầu của mỗi trang
    useEffect(() => {
        if (autoSelect === indexOfFirstPost && posts !== null) {
            // điều kiện khi useEffect ở trên đã cập nhật và database đã được load
            const selectFirstPost = setTimeout(() => {
                const firstIndex = Number(autoSelect + 1);
                const PostDetail = posts.find((post) => {
                    return post.id === firstIndex;
                });
                commonFunc(firstIndex, PostDetail);
            }, 500);
            return () => {
                clearTimeout(selectFirstPost);
            };
        }
    }, [autoSelect, posts]);

    //dùng để cập nhật mỗi khi người dùng nhấn vào image
    const updateDetail = (event: React.ChangeEvent<HTMLInputElement>) => {
        const a = Number(event.target.id);
        console.log(a);
        const currentIndex = currentItemIndex.split("/");
        const numCurrentIndex = Number(currentIndex[0]);
        const PostDetail = posts.find((post) => {
            return post.id === a;
        });
        if (PostDetail?.id === numCurrentIndex) {
            return;
        }
        commonFunc(a, PostDetail);
    };
    return (
        <>
            <div className='header'>
                <Link to='/gioi-thieu'>
                    <img
                        className='headerimg'
                        src={
                            width >= 550
                                ? "https://fsoft-academy.edu.vn/wp-content/uploads/2021/09/Cover-web-fix-02-01-2048x1013.jpg"
                                : "	https://fsoft-academy.edu.vn/wp-content/uploads/2021/11/banner-mobile-fix-2-01-1345x1536.jpg"
                        }
                        alt='FSoft Academy'></img>
                </Link>
                <div className='imgbox'>
                    <img
                        id='nothing'
                        src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/06/shadows.png'
                        alt=''></img>
                    <div className='text'>
                        <h3 id='f1' className='f1'>
                            FPT Software Academy
                        </h3>
                        <h1 id='f1' className='f2'>
                            CHÚNG TÔI LÀ AI?
                        </h1>
                        <p id='f1' className='f3'>
                            Với sứ mệnh cung cấp và đào tạo nguồn nhân lực IT
                            chất lượng cao cho các dự án lớn trên toàn cầu, FPT
                            Software Academy mang đến cơ hội nghề nghiệp không
                            giới hạn và môi trường đào tạo chuyên nghiệp theo
                            tiêu chuẩn quốc tế. FPT Software Academy chính là
                            nơi khởi đầu cho những thành công của các kỹ sư CNTT
                            trong tương lai.
                        </p>
                        <Link
                            id='f1'
                            className='f4'
                            style={{ textDecoration: "none" }}
                            to='/tai-sao-nen-hoc-tai-fpt-software-academy'>
                            Why work with us{" "}
                            <i className='fa fa-angle-right'></i>
                        </Link>
                    </div>
                </div>

                <div
                    className={
                        width >= 1080 ? "header1 half-container" : "header1"
                    }>
                    <div className='header1-img'>
                        <img
                            className='b'
                            src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/04/img-mt.png'
                            alt=''></img>
                    </div>
                    <div className='texts'>
                        <div className='rows'>
                            <div className='row'>
                                <div className='row-img'>
                                    <img
                                        src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/04/icon-mt1.svg'
                                        alt=''></img>
                                </div>
                                <div className='row-text'>
                                    <h3>Môi trường chuyên nghiệp</h3>
                                    <p>
                                        Môi trường làm việc đạt chuẩn quốc tế,
                                        văn phòng hiện diện trên toàn cầu (Việt
                                        Nam, Mỹ, Úc, Nhật Bản, Singapore, Đức,
                                        Pháp…).
                                    </p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='row-img'>
                                    <img
                                        src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/04/icon-mt-2.svg'
                                        alt=''></img>
                                </div>
                                <div className='row-text'>
                                    <h3>Văn hoá khác biệt</h3>
                                    <p>
                                        Trải nghiệm văn hóa khác biệt thật sự
                                        trẻ trung, máu lửa với nhiều hoạt động
                                        phong trào hấp dẫn.
                                    </p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='row-img'>
                                    <img
                                        src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/04/icon-mt-3.svg'
                                        alt=''></img>
                                </div>
                                <div className='row-text'>
                                    <h3>Cơ hội không giới hạn</h3>
                                    <p>
                                        Cơ hội phát triển sự nghiệp tại các dự
                                        án lớn với khách hàng nước ngoài, mức
                                        thu nhập hấp dẫn và lộ trình thăng tiến
                                        rõ ràng.
                                    </p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='row-img'>
                                    <img
                                        src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/04/icon-mt-4.svg'
                                        alt=''></img>
                                </div>
                                <div className='row-text'>
                                    <h3>Phương pháp đào tạo</h3>
                                    <p>
                                        Lấy học viên làm trung tâm, sử dụng hệ
                                        thống học liệu đạt chuẩn quốc tế và kỹ
                                        thuật đào tạo hiện đại, tập trung vào
                                        thực hành.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='header2'>
                <div id='text2'>
                    <h1>ĐỐI TƯỢNG THAM GIA</h1>
                    <p>
                        FPT Software Academy chính là nơi khởi đầu cho những
                        thành công của các kỹ sư CNTT trong tương lai, cung cấp
                        và đào tạo nguồn nhân lực IT chất lượng cao cho các dự
                        án lớn trên toàn cầu.
                    </p>
                </div>
                <div className='text-image2'>
                    <div
                        id='text-grid'
                        className='grid1'
                        onClick={handleClick("/dao-tao-mo-rong")}>
                        <h4>Bạn muốn được đào tạo?</h4>
                        <p>
                            Bạn là người mới bắt đầu hoặc mong muốn được đào tạo
                            về những kỹ năng, công nghệ mới.
                        </p>
                        <Link to='/dao-tao-mo-rong'>
                            <img
                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/11/1-Dao-tao-1024x465.jpg'
                                alt=''
                            />
                        </Link>
                    </div>
                    <div
                        id='text-grid'
                        className='grid2'
                        onClick={handleClick("/thuc-tap")}>
                        <h4>Bạn muốn được thực tập?</h4>
                        <p>
                            Bạn đang tìm kiếm cơ hội thực tập với những trải
                            nghiệm thực tế, giúp nâng cao kỹ năng chuyên môn &
                            kỹ năng mềm, làm quen với môi trường và văn hóa
                            doanh nghiệp.
                        </p>
                        <Link to='/thuc-tap'>
                            <img
                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/11/2-Thuc-tap.jpg'
                                alt=''
                            />
                        </Link>
                    </div>
                    <div
                        id='text-grid'
                        className='grid3'
                        onClick={handleClick("/tuyen-dung")}>
                        <h4>Bạn muốn tìm cơ hội việc làm?</h4>
                        <p>
                            Bạn đã và đang theo đuổi ngành Công nghệ, muốn thử
                            sức với vị trí Fresher hoặc làm việc tại dự án.
                        </p>
                        <Link to='/tuyen-dung'>
                            <img
                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/11/3-Cam-ket-viec-lam.jpg'
                                alt=''
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <div className='header5'>
                <h2>ĐỘI NGŨ CHUYÊN GIA</h2>
                <p>
                    Học viên của FPT Software Academy sẽ được hướng dẫn bởi đội
                    ngũ giảng viên, mentor là các lập trình viên, chuyên gia
                    công nghệ giàu kinh nghiệm của tập đoàn FPT.
                </p>
            </div>
            <div className='list-group'>
                <div className='list-group-items'>
                    {currentPosts.map((post) => (
                        <div className='list-group-item' key={post.id}>
                            <div className='item-image'>
                                <img
                                    id={post.id}
                                    src={post.thumbnail}
                                    alt='FSoft Academy'
                                    onClick={updateDetail}
                                />
                            </div>
                        </div>
                    ))}
                    <div className='pagination'>
                        <div
                            // Previous page (<) inactive if current page is 1
                            className={`pagination-arrow ${
                                activePage === 1 ? "inactive" : ""
                            }`}
                            onClick={() =>
                                activePage !== 1 &&
                                setActivePage((page) => page - 1)
                            }>
                            {"<"}
                        </div>
                        <div
                            // Next Page (>) inactive if the current page is the last page.
                            className={`pagination-arrow ${
                                activePage === totalPages ? "inactive" : ""
                            }`}
                            onClick={() =>
                                activePage !== totalPages &&
                                setActivePage((page) => page + 1)
                            }>
                            {">"}
                        </div>
                    </div>
                </div>
                <div className='item-detail'>
                    <p className='item-index'>
                        <span className='current-index'>
                            {currentItemIndex}
                        </span>
                    </p>
                    <h3 className='item-body'>{currentItemDetail}</h3>
                    <p className='item-name'>
                        <strong>{currentItemName}</strong>
                    </p>
                    <div className='item-content'>{currentItemContent}</div>
                </div>
            </div>
            <div className='header4'>
                <div className='text4'>
                    <h1>NÓI VỀ FPT SOFTWARE ACADEMY</h1>
                    <p>
                        FPT Software Academy chính là nơi khởi đầu cho những
                        thành công của các kỹ sư CNTT trong tương lai, cung cấp
                        và đào tạo nguồn nhân lực IT chất lượng cao cho các dự
                        án lớn trên toàn cầu.
                    </p>
                </div>
                <div className='grid'>
                    <div
                        onMouseEnter={() =>
                            swiperRef.current.swiper.autoplay.stop()
                        }
                        onMouseLeave={() =>
                            swiperRef.current.swiper.autoplay.start()
                        }>
                        <Swiper
                            ref={swiperRef}
                            modules={[Navigation, Pagination, Autoplay]}
                            loop={true}
                            slidesPerView={1}
                            spaceBetween={20}
                            autoplay={{
                                delay: 2000,
                                pauseOnMouseEnter: true,
                                disableOnInteraction: false,
                            }}
                            speed={1000}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                                dynamicMainBullets: 2,
                            }}
                            initialSlide={0}
                            breakpoints={{
                                550: {
                                    slidesPerView: 2,
                                    spaceBetween: 50,
                                },
                                992: {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                },
                            }}>
                            <SwiperSlide>
                                <div className='grid-box'>
                                    <div className='grid-text'>
                                        FPT Software xứng đáng là một công ty
                                        phần mềm lớn nhất Việt Nam, có định
                                        hướng phát triển một cách bền vững và có
                                        trách nhiệm với cộng đồng.
                                    </div>
                                    <div className='icon'>
                                        <div className='icon-inner'>
                                            <img
                                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/05/Noi-ve-FA-HCM-02-80x80.webp'
                                                alt=''></img>
                                        </div>
                                        <div className='icon-box-text'>
                                            <p>
                                                <strong>
                                                    ThS Nguyễn Văn Toàn
                                                </strong>
                                            </p>
                                            <p style={{ fontSize: "14px" }}>
                                                Trưởng phòng CTSV - ĐH CNTT TP
                                                HCM
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='grid-box'>
                                    <div className='grid-text'>
                                        Số sinh viên HUTECH thực tập cũng như
                                        chính thức làm việc tại FPT Software
                                        ngày càng tăng qua các năm, điều đó cho
                                        thấy môi trường ở đây rất tốt.
                                    </div>
                                    <div className='icon'>
                                        <div className='icon-inner'>
                                            <img
                                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/05/Noi-ve-FA-HCM-01-80x80.webp'
                                                alt=''></img>
                                        </div>
                                        <div className='icon-box-text'>
                                            <p>
                                                <strong>
                                                    ThS. Dương Thành Phết
                                                </strong>
                                            </p>
                                            <p style={{ fontSize: "14px" }}>
                                                Phó khoa CNTT - ĐH Công Nghệ TP
                                                HCM
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='grid-box'>
                                    <div className='grid-text'>
                                        FA đã trang bị được cho học viên kiến
                                        thức cơ bản và cọ sát với thực tế của dự
                                        án nên khi join dự án cũng không bị tốn
                                        quá nhiều thời gian để có thể thích
                                        nghi.
                                    </div>
                                    <div className='icon'>
                                        <div className='icon-inner'>
                                            <img
                                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/05/giangtn1-80x80.jpg'
                                                alt=''></img>
                                        </div>
                                        <div className='icon-box-text'>
                                            <p>
                                                <strong>Trần Ngọc Giang</strong>
                                            </p>
                                            <p style={{ fontSize: "14px" }}>
                                                Project Manager FPT Software
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='grid-box'>
                                    <div className='grid-text'>
                                        Nhờ có sự tận tâm của đội ngũ đào tạo
                                        tại FA mà các bạn trẻ có mong muốn được
                                        bước chân vào ngành IT có thêm chỗ dựa
                                        để được hướng dẫn, tiến bước thực hiện
                                        ước mơ
                                    </div>
                                    <div className='icon'>
                                        <div className='icon-inner'>
                                            <img
                                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/05/HongNTA-80x80.jpg'
                                                alt=''></img>
                                        </div>
                                        <div className='icon-box-text'>
                                            <p>
                                                <strong>
                                                    Nguyễn Thị Ánh Hồng
                                                </strong>
                                            </p>
                                            <p style={{ fontSize: "14px" }}>
                                                Manager FPT Software
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='grid-box'>
                                    <div className='grid-text'>
                                        FPT Software xứng đáng là một công ty
                                        phần mềm lớn nhất Việt Nam, có định
                                        hướng phát triển một cách bền vững và có
                                        trách nhiệm với cộng đồng.
                                    </div>
                                    <div className='icon'>
                                        <div className='icon-inner'>
                                            <img
                                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/05/Noi-ve-FA-HCM-02-80x80.webp'
                                                alt=''></img>
                                        </div>
                                        <div className='icon-box-text'>
                                            <p>
                                                <strong>
                                                    ThS Nguyễn Văn Toàn
                                                </strong>
                                            </p>
                                            <p style={{ fontSize: "14px" }}>
                                                Trưởng phòng CTSV - ĐH CNTT TP
                                                HCM
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='grid-box'>
                                    <div className='grid-text'>
                                        Số sinh viên HUTECH thực tập cũng như
                                        chính thức làm việc tại FPT Software
                                        ngày càng tăng qua các năm, điều đó cho
                                        thấy môi trường ở đây rất tốt.
                                    </div>
                                    <div className='icon'>
                                        <div className='icon-inner'>
                                            <img
                                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/05/Noi-ve-FA-HCM-01-80x80.webp'
                                                alt=''></img>
                                        </div>
                                        <div className='icon-box-text'>
                                            <p>
                                                <strong>
                                                    ThS. Dương Thành Phết
                                                </strong>
                                            </p>
                                            <p style={{ fontSize: "14px" }}>
                                                Phó khoa CNTT - ĐH Công Nghệ TP
                                                HCM
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='grid-box'>
                                    <div className='grid-text'>
                                        FA đã trang bị được cho học viên kiến
                                        thức cơ bản và cọ sát với thực tế của dự
                                        án nên khi join dự án cũng không bị tốn
                                        quá nhiều thời gian để có thể thích
                                        nghi.
                                    </div>
                                    <div className='icon'>
                                        <div className='icon-inner'>
                                            <img
                                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/05/giangtn1-80x80.jpg'
                                                alt=''></img>
                                        </div>
                                        <div className='icon-box-text'>
                                            <p>
                                                <strong>Trần Ngọc Giang</strong>
                                            </p>
                                            <p style={{ fontSize: "14px" }}>
                                                Project Manager FPT Software
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='grid-box'>
                                    <div className='grid-text'>
                                        Nhờ có sự tận tâm của đội ngũ đào tạo
                                        tại FA mà các bạn trẻ có mong muốn được
                                        bước chân vào ngành IT có thêm chỗ dựa
                                        để được hướng dẫn, tiến bước thực hiện
                                        ước mơ
                                    </div>
                                    <div className='icon'>
                                        <div className='icon-inner'>
                                            <img
                                                src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/05/HongNTA-80x80.jpg'
                                                alt=''></img>
                                        </div>
                                        <div className='icon-box-text'>
                                            <p>
                                                <strong>
                                                    Nguyễn Thị Ánh Hồng
                                                </strong>
                                            </p>
                                            <p style={{ fontSize: "14px" }}>
                                                Manager FPT Software
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className='header3'>
                <div className='text3'>
                    <h1>CÁC ĐỐI TÁC TIÊU BIỂU</h1>
                    <p>
                        Chúng tôi hợp tác với nhiều trường Đại học – Học viên –
                        Cao đẳng trên toàn quốc trong việc xây dựng chương trình
                        đào tạo, thực tập, thực hành và định hướng nghề nghiệp
                        cho sinh viên.
                    </p>
                </div>
                <div className='listOfImag'>
                    <div className='Outer'>
                        <div
                            className='Inner'
                            onMouseEnter={() =>
                                swiperRef.current.swiper.autoplay.stop()
                            }
                            onMouseLeave={() =>
                                swiperRef.current.swiper.autoplay.start()
                            }>
                            <Swiper
                                ref={swiperRef}
                                modules={[Navigation, Pagination, Autoplay]}
                                loop={true}
                                spaceBetween={60}
                                slidesPerView={3}
                                autoplay={{ delay: 500 }}
                                speed={1000}
                                pagination={{
                                    clickable: true,
                                    dynamicBullets: true,
                                    dynamicMainBullets: 3,
                                }}
                                direction={"horizontal"}
                                breakpoints={{
                                    550: {
                                        slidesPerView: 4,
                                        spaceBetween: 30,
                                    },
                                    988: {
                                        slidesPerView: 5,
                                        spaceBetween: 30,
                                    },
                                    1100: {
                                        slidesPerView: 7,
                                        spaceBetween: 50,
                                    },
                                }}>
                                <SwiperSlide>
                                    <img
                                        className='Photos'
                                        src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/04/doitac.png'
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
                                        src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/05/bk-da-nang.png'
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
                                        src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/05/cong-nghe.png'
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
                                        src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/05/dh-khoa-hoc-hue.png'
                                        alt=''></img>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img
                                        className='Photos'
                                        src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/08/unnamed.jpg'
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
                                        src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/05/Logo_Hust.png'
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
                                        src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/05/buu-chinh.png'
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
                                        src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/05/cong-nghiep.png'
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
                                        src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/05/dh-khoa-hoc-hue.png'
                                        alt=''></img>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img
                                        className='Photos'
                                        src='https://fsoft-academy.edu.vn/wp-content/uploads/2021/08/unnamed.jpg'
                                        alt=''></img>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;
